<?php

namespace App\Controller;

use App\Entity\Partner;
use App\Form\PartnerType;
use App\Repository\PartnerRepository;
use App\Service\FileUploaderService;
use Pagerfanta\Doctrine\ORM\QueryAdapter;
use Pagerfanta\Pagerfanta;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\String\Slugger\SluggerInterface;

#[Route('/admin/partner')]
class PartnerController extends AbstractController
{
    #[Route('/', name: 'app_partner_index', methods: ['GET'])]
    public function index(Request $request, PartnerRepository $partnerRepository, int $page = 1): Response
    {
        $partnerName = $request->query->get('q');
        $page = (int) $page;
        $queryBuilder = $partnerRepository->createOrderedByPartnerNameQueryBuilder($partnerName);
        $adapter = new QueryAdapter($queryBuilder);
        $pagerFanta = Pagerfanta::createForCurrentPageWithMaxPerPage(
            $adapter,
            $page ?? 1,
            10
        );
        return $this->render('partner/index.html.twig', [
            'pager' => $pagerFanta,
            'partnerSearch' => $partnerName,
        ]);
    }

    #[Route('/new', name: 'app_partner_new', methods: ['GET', 'POST'])]
    public function new(Request $request, PartnerRepository $partnerRepository, SluggerInterface $slugger): Response
    {
        $partner = new Partner();
        $form = $this->createForm(PartnerType::class, $partner);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $partnerByNameObject = $partnerRepository->findOneBy(['name' => $partner->getName()]);
            if ($partnerByNameObject !== null) {
                $this->addFlash('danger', 'Partenaire '.$partner->getName().' existe déjà');

                return $this->redirectToRoute('app_partner_new');
            }
            /** @var UploadedFile $partnerFile */
            $partnerFile = $form->get('logo')->getData();
            $targetDirectory = 'uploads/partners';
            $fileName = FileUploaderService::uploadFile($partnerFile, $targetDirectory, $slugger);
            if ($fileName) {
                $partner->setLogo($fileName);
            }
            $partnerRepository->save($partner, true);
            return $this->redirectToRoute('app_partner_index', [], Response::HTTP_SEE_OTHER);
        }
        return $this->renderForm('partner/new.html.twig', [
            'partner' => $partner,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_partner_show', methods: ['GET'])]
    public function show(Partner $partner): Response
    {
        return $this->render('partner/show.html.twig', [
            'partner' => $partner,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_partner_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Partner $partner, PartnerRepository $partnerRepository, SluggerInterface $slugger): Response
    {
        $form = $this->createForm(PartnerType::class, $partner);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $partnerByNameObject = $partnerRepository->findOneBy(['name' => $partner->getName()]);
            if ($partnerByNameObject !== null && $partnerByNameObject->getId() !== $partner->getId()) {
                $this->addFlash('danger', 'Partenaire '.$partner->getName().' existe déjà! Veuillez choisir un autre nom.');

                return $this->redirectToRoute('app_partner_edit', ['id' => $partner->getId()]);
            }
            /** @var UploadedFile $partnerFile */
            $partnerFile = $form->get('logo')->getData();
            if ($partnerFile !== null) {
                $targetDirectory = 'uploads/partners';
                $fileName = FileUploaderService::uploadFile($partnerFile, $targetDirectory, $slugger);
                if ($fileName) {
                    $partner->setLogo($fileName);
                }else{
                    $this->addFlash('danger', 'Une erreur est survenue lors de l\'upload du fichier');
                }
            }
            $partnerRepository->save($partner, true);

            return $this->redirectToRoute('app_partner_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('partner/edit.html.twig', [
            'partner' => $partner,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_partner_delete', methods: ['POST'])]
    public function delete(Request $request, Partner $partner, PartnerRepository $partnerRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$partner->getId(), $request->request->get('_token'))) {
            $partnerRepository->remove($partner, true);
        }

        return $this->redirectToRoute('app_partner_index', [], Response::HTTP_SEE_OTHER);
    }
}
