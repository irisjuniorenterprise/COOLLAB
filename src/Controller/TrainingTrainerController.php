<?php

namespace App\Controller;

use App\Entity\TrainingTrainer;
use App\Form\TrainingTrainerType;
use App\Repository\TrainingTrainerRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/admin/training-trainer')]
class TrainingTrainerController extends AbstractController
{
    #[Route('/', name: 'app_training_trainer_index', methods: ['GET'])]
    public function index(TrainingTrainerRepository $trainingTrainerRepository): Response
    {
        return $this->render('training_trainer/index.html.twig', [
            'training_trainers' => $trainingTrainerRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_training_trainer_new', methods: ['GET', 'POST'])]
    public function new(Request $request, TrainingTrainerRepository $trainingTrainerRepository): Response
    {
        $trainingTrainer = new TrainingTrainer();
        $form = $this->createForm(TrainingTrainerType::class, $trainingTrainer);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // check if trainer is already assigned to this training
            $training = $trainingTrainer->getTrainingSession();
            $trainer = $trainingTrainer->getUser();
            $trainingTrainerIfExists = $trainingTrainerRepository->findOneBy([
                'trainingSession' => $training,
                'user' => $trainer,
            ]);
            if ($trainingTrainerIfExists) {
                $this->addFlash('danger', 'Formateur déjà assigné à cette formation');
                return $this->redirectToRoute('app_training_trainer_new');
            }
            $trainingTrainer->setPayedAt(null);
            $trainingTrainerRepository->save($trainingTrainer, true);

            return $this->redirectToRoute('app_training_trainer_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('training_trainer/new.html.twig', [
            'training_trainer' => $trainingTrainer,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_training_trainer_show', methods: ['GET'])]
    public function show(TrainingTrainer $trainingTrainer): Response
    {
        return $this->render('training_trainer/show.html.twig', [
            'training_trainer' => $trainingTrainer,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_training_trainer_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, TrainingTrainer $trainingTrainer, TrainingTrainerRepository $trainingTrainerRepository): Response
    {
        $form = $this->createForm(TrainingTrainerType::class, $trainingTrainer);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $trainingTrainerRepository->save($trainingTrainer, true);

            return $this->redirectToRoute('app_training_trainer_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('training_trainer/edit.html.twig', [
            'training_trainer' => $trainingTrainer,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_training_trainer_delete', methods: ['POST'])]
    public function delete(Request $request, TrainingTrainer $trainingTrainer, TrainingTrainerRepository $trainingTrainerRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$trainingTrainer->getId(), $request->request->get('_token'))) {
            $trainingTrainerRepository->remove($trainingTrainer, true);
        }

        return $this->redirectToRoute('app_training_trainer_index', [], Response::HTTP_SEE_OTHER);
    }

    // set isTrainerPayed to true
    #[Route('/{id}/pay', name: 'app_training_trainer_pay', methods: ['GET', 'POST'])]
    public function pay(TrainingTrainer $trainingTrainer, TrainingTrainerRepository $trainingTrainerRepository): Response
    {
        $trainingTrainer->setIsTrainerPayed(true);
        $trainingTrainer->setPayedAt(new \DateTimeImmutable());
        $trainingTrainerRepository->save($trainingTrainer, true);

        return $this->redirectToRoute('app_training_trainer_index', [], Response::HTTP_SEE_OTHER);
    }
}
