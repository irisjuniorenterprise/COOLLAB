<?php

namespace App\Controller;

use App\Entity\Competition;
use App\Form\CompetitionType;
use App\Repository\CompetitionRepository;
use App\Repository\ImageRepository;
use App\Repository\ParticipateToCompetitionRepository;
use App\Service\FileUploaderService;
use Pagerfanta\Doctrine\ORM\QueryAdapter;
use Pagerfanta\Pagerfanta;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\String\Slugger\SluggerInterface;

#[Route('/admin/competition')]
class CompetitionController extends AbstractController
{
    #[Route('/competition/{page}', name: 'app_competition_index', methods: ['GET', 'POST'])]
    public function index(Request $request, CompetitionRepository $competitionRepository, int $page = 1): Response
    {
        $competitionName = $request->query->get('q');
        $page = (int)$page;
        $queryBuilder = $competitionRepository->createOrderedByCompetitionNameQueryBuilder($competitionName);
        $adapter = new QueryAdapter($queryBuilder);
        $pagerFanta = Pagerfanta::createForCurrentPageWithMaxPerPage(
            $adapter,
            $page ?? 1,
            5
        );
        return $this->render('competition/index.html.twig', [
            'pager' => $pagerFanta,
            'competitionSearch' => $competitionName,
        ]);
    }

    #[Route('/new', name: 'app_competition_new', methods: ['GET', 'POST'])]
    public function new(Request $request, CompetitionRepository $competitionRepository, SluggerInterface $slugger): Response
    {
        $competition = new Competition();
        $form = $this->createForm(CompetitionType::class, $competition);
        $form->handleRequest($request);
        $targetDirectory = 'uploads/competitions/thumbnail/';

        if ($form->isSubmitted() && $form->isValid()) {
            $competitionThumbnail = $_FILES['competitionThumbnail'];
            $uploadThumbnail = FileUploaderService::uploadImage($competitionThumbnail, $targetDirectory, $competition);
            $competition->setThumbnail($uploadThumbnail);
            $competition->setIsCanceled(false);
            $competitionRepository->save($competition, true);

            return $this->redirectToRoute('app_competition_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('competition/new.html.twig', [
            'competition' => $competition,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_competition_show', methods: ['GET'])]
    public function show(Competition $competition): Response
    {
        return $this->render('competition/show.html.twig', [
            'competition' => $competition,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_competition_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Competition $competition, CompetitionRepository $competitionRepository, ImageRepository $imageRepository): Response
    {
        $form = $this->createForm(CompetitionType::class, $competition);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $targetDirectory = 'uploads/competitions/';
            $competitionFiles = $_FILES['competitionFiles'];
            if ($competitionFiles !== null && $competitionFiles['size'][0] !== 0) {
                $fileUploaded = FileUploaderService::uploadImages($competitionFiles, $targetDirectory, $competition, $competitionRepository, $imageRepository);
                if ($fileUploaded === false) {
                    $this->addFlash('danger', 'Une erreur est survenue lors de l\'upload des images');
                }
            }
            $competitionRepository->save($competition, true);

            return $this->redirectToRoute('app_competition_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('competition/edit.html.twig', [
            'competition' => $competition,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_competition_delete', methods: ['POST'])]
    public function delete(Request $request, Competition $competition, CompetitionRepository $competitionRepository): Response
    {
        if ($this->isCsrfTokenValid('delete' . $competition->getId(), $request->request->get('_token'))) {
            $competitionRepository->remove($competition, true);
        }

        return $this->redirectToRoute('app_competition_index', [], Response::HTTP_SEE_OTHER);
    }

    // cancel a competition
    #[Route('/{id}/cancel', name: 'app_competition_cancel', methods: ['GET'])]
    public function cancel(Competition $competition, CompetitionRepository $competitionRepository): Response
    {
        $competition->setIsCanceled(true);
        $competitionRepository->save($competition, true);

        return $this->redirectToRoute('app_competition_index', [], Response::HTTP_SEE_OTHER);
    }

    // activate a competition
    #[Route('/{id}/activate', name: 'app_competition_activate', methods: ['GET'])]
    public function activate(Competition $competition, CompetitionRepository $competitionRepository): Response
    {
        $competition->setIsCanceled(false);
        $competitionRepository->save($competition, true);

        return $this->redirectToRoute('app_competition_index', [], Response::HTTP_SEE_OTHER);
    }

    // delete a competition image
    #[Route('/{id}/deleteImage/{imageId}', name: 'app_competition_delete_image', methods: ['GET'])]
    public function deleteImage(Competition $competition, CompetitionRepository $competitionRepository, ImageRepository $imageRepository, int $imageId): Response
    {
        $image = $imageRepository->find($imageId);
        if ($image !== null) {
            $imageRepository->remove($image, true);
        } else {
            $this->addFlash('danger', 'Une erreur est survenue lors de la suppression de l\'image');
        }

        return $this->redirectToRoute('app_competition_show', ['id' => $competition->getId()], Response::HTTP_SEE_OTHER);
    }

    // rank the users of a competition
    #[Route('/{id}/rank', name: 'app_competition_rank', methods: ['GET'])]
    public function rank(Competition $competition, CompetitionRepository $competitionRepository): Response
    {
        return $this->render('competition/rank.html.twig', [
            'competition' => $competition,
        ]);
    }

    // save the rank of the users of a competition
    #[Route('/{id}/saveRank', name: 'app_competition_save_rank', methods: ['POST', 'GET'])]
    public function saveRank(ParticipateToCompetitionRepository $participateToCompetitionRepository,Competition $competition, CompetitionRepository $competitionRepository, Request $request): Response
    {
        $userId = $request->request->get('userId');
        $userRank = $request->request->get('userRank');
        $prize = $request->request->get('prize');
        $participants = $participateToCompetitionRepository->findOneBy(['competition' => $competition,'user'=>$userId]);
        $participants?->setClassification($userRank);
        $participants?->setPrize($prize);
        $competitionRepository->save($competition, true);


        return $this->redirectToRoute('app_competition_show', ['id' => $competition->getId()], Response::HTTP_SEE_OTHER);
    }
}
