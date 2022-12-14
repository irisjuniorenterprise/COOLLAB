<?php

namespace App\Controller;

use App\Entity\ParticipateToCompetition;
use App\Form\ParticipateToCompetitionType;
use App\Repository\ParticipateToCompetitionRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/participate/to/competition')]
class ParticipateToCompetitionController extends AbstractController
{
    #[Route('/', name: 'app_participate_to_competition_index', methods: ['GET'])]
    public function index(ParticipateToCompetitionRepository $participateToCompetitionRepository): Response
    {
        return $this->render('participate_to_competition/index.html.twig', [
            'participate_to_competitions' => $participateToCompetitionRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_participate_to_competition_new', methods: ['GET', 'POST'])]
    public function new(Request $request, ParticipateToCompetitionRepository $participateToCompetitionRepository): Response
    {
        $participateToCompetition = new ParticipateToCompetition();
        $form = $this->createForm(ParticipateToCompetitionType::class, $participateToCompetition);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $participateToCompetitionRepository->save($participateToCompetition, true);

            return $this->redirectToRoute('app_participate_to_competition_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('participate_to_competition/new.html.twig', [
            'participate_to_competition' => $participateToCompetition,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_participate_to_competition_show', methods: ['GET'])]
    public function show(ParticipateToCompetition $participateToCompetition): Response
    {
        return $this->render('participate_to_competition/show.html.twig', [
            'participate_to_competition' => $participateToCompetition,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_participate_to_competition_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, ParticipateToCompetition $participateToCompetition, ParticipateToCompetitionRepository $participateToCompetitionRepository): Response
    {
        $form = $this->createForm(ParticipateToCompetitionType::class, $participateToCompetition);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $participateToCompetitionRepository->save($participateToCompetition, true);

            return $this->redirectToRoute('app_participate_to_competition_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('participate_to_competition/edit.html.twig', [
            'participate_to_competition' => $participateToCompetition,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_participate_to_competition_delete', methods: ['POST'])]
    public function delete(Request $request, ParticipateToCompetition $participateToCompetition, ParticipateToCompetitionRepository $participateToCompetitionRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$participateToCompetition->getId(), $request->request->get('_token'))) {
            $participateToCompetitionRepository->remove($participateToCompetition, true);
        }

        return $this->redirectToRoute('app_participate_to_competition_index', [], Response::HTTP_SEE_OTHER);
    }
}
