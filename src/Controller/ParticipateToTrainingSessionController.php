<?php

namespace App\Controller;

use App\Entity\ParticipateToTrainingSession;
use App\Form\ParticipateToTrainingSessionType;
use App\Repository\ParticipateToTrainingSessionRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/participate/to/training/session')]
class ParticipateToTrainingSessionController extends AbstractController
{
    #[Route('/', name: 'app_participate_to_training_session_index', methods: ['GET'])]
    public function index(ParticipateToTrainingSessionRepository $participateToTrainingSessionRepository): Response
    {
        return $this->render('participate_to_training_session/index.html.twig', [
            'participate_to_training_sessions' => $participateToTrainingSessionRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_participate_to_training_session_new', methods: ['GET', 'POST'])]
    public function new(Request $request, ParticipateToTrainingSessionRepository $participateToTrainingSessionRepository): Response
    {
        $participateToTrainingSession = new ParticipateToTrainingSession();
        $form = $this->createForm(ParticipateToTrainingSessionType::class, $participateToTrainingSession);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $participateToTrainingSessionRepository->save($participateToTrainingSession, true);

            return $this->redirectToRoute('app_participate_to_training_session_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('participate_to_training_session/new.html.twig', [
            'participate_to_training_session' => $participateToTrainingSession,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_participate_to_training_session_show', methods: ['GET'])]
    public function show(ParticipateToTrainingSession $participateToTrainingSession): Response
    {
        return $this->render('participate_to_training_session/show.html.twig', [
            'participate_to_training_session' => $participateToTrainingSession,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_participate_to_training_session_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, ParticipateToTrainingSession $participateToTrainingSession, ParticipateToTrainingSessionRepository $participateToTrainingSessionRepository): Response
    {
        $form = $this->createForm(ParticipateToTrainingSessionType::class, $participateToTrainingSession);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $participateToTrainingSessionRepository->save($participateToTrainingSession, true);

            return $this->redirectToRoute('app_participate_to_training_session_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('participate_to_training_session/edit.html.twig', [
            'participate_to_training_session' => $participateToTrainingSession,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_participate_to_training_session_delete', methods: ['POST'])]
    public function delete(Request $request, ParticipateToTrainingSession $participateToTrainingSession, ParticipateToTrainingSessionRepository $participateToTrainingSessionRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$participateToTrainingSession->getId(), $request->request->get('_token'))) {
            $participateToTrainingSessionRepository->remove($participateToTrainingSession, true);
        }

        return $this->redirectToRoute('app_participate_to_training_session_index', [], Response::HTTP_SEE_OTHER);
    }
}
