<?php

namespace App\Controller;

use App\Entity\Comment;
use App\Entity\Image;
use App\Entity\TrainingSession;
use App\Entity\TrainingTrainer;
use App\Form\TrainingSessionType;
use App\Repository\CommentRepository;
use App\Repository\ImageRepository;
use App\Repository\TrainingSessionRepository;
use App\Repository\TrainingTrainerRepository;
use App\Repository\UserRepository;
use App\Service\FileUploaderService;
use Pagerfanta\Doctrine\ORM\QueryAdapter;
use Pagerfanta\Pagerfanta;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/admin/training')]
class TrainingSessionController extends AbstractController
{
    // search training session by name or description or trainer name
    #[Route('/training/{page}', name: 'app_training_session_index', methods: ['GET', 'POST'])]
    public function search(Request $request, TrainingSessionRepository $trainingSessionRepository, int $page = 1): Response
    {
        $trainingName = $request->query->get('q');
        $page = (int) $page;
        $queryBuilder = $trainingSessionRepository->createOrderedByTrainingNameQueryBuilder($trainingName);
        $adapter = new QueryAdapter($queryBuilder);
        $pagerFanta = Pagerfanta::createForCurrentPageWithMaxPerPage(
            $adapter,
            $page ?? 1,
            10
        );
        return $this->render('training_session/train.html.twig', [
            'pager' => $pagerFanta,
            'trainingSearch' => $trainingName,
        ]);
    }

    #[Route('/train', name: 'app_training_session_index_train', methods: ['GET'])]
    public function index(TrainingSessionRepository $trainingSessionRepository): Response
    {
        return $this->render('training_session/index.html.twig', [
            'training_sessions' => $trainingSessionRepository->findAll(),
        ]);
    }
    #[Route('/', name: 'app_training_session_index_test', methods: ['GET'])]
    public function indexTrain(TrainingSessionRepository $trainingSessionRepository): Response
    {
        return $this->render('training_session/train.html.twig', [
            'training_sessions' => $trainingSessionRepository->findAll(),
        ]);
    }

   // get users by role
    public function getUsersByRole($role, UserRepository $userRepository)
    {
        $users = $userRepository->findAll();
        $usersByRole = [];
        foreach ($users as $user) {
            if (in_array($role, $user->getRoles(), true)) {
                $usersByRole[] = $user;
            }
        }
        return $usersByRole;
    }

    #[Route('/new', name: 'app_training_session_new', methods: ['GET', 'POST'])]
    public function new(Request $request, TrainingSessionRepository $trainingSessionRepository, UserRepository $userRepository, TrainingTrainerRepository $trainingTrainerRepository): Response
    {
        $users = $userRepository->findAll();
        $usersByRole = [];
        foreach ($users as $user) {
            if (in_array('ROLE_TRAINER', $user->getRoles(), true)) {
                $usersByRole[] = $user;
            }
        }
        $trainingSession = new TrainingSession();
        $trainingTrainer = new TrainingTrainer();
        $form = $this->createForm(TrainingSessionType::class, $trainingSession);
        $form->handleRequest($request);
        $targetDirectory = 'uploads/trainingSession/thumbnail/';

        if ($form->isSubmitted() && $form->isValid()) {
            $trainerSelected = $request->request->get('trainerSelect');
            $trainerPayment = $request->request->get('trainerPayment');
            $trainingThumbnail = $_FILES['trainingThumbnail'];
            $trainerChosen = $userRepository->find($trainerSelected);
            $trainingTrainer->setUser($trainerChosen);
            $trainingTrainer->setTrainingSession($trainingSession);
            $trainingTrainer->setRequestedBy(true);
            $trainingTrainer->setTrainerPayment($trainerPayment);
            $trainingTrainer->setPayedAt(null);
            $uploadThumbnail = FileUploaderService::uploadImage($trainingThumbnail, $targetDirectory, $trainingSession);
            $trainingSession->setThumbnail($uploadThumbnail);
            $trainingSession->setIsApproved(true);
            $trainingTrainerRepository->save($trainingTrainer);
            $trainingSessionRepository->save($trainingSession, true);

            return $this->redirectToRoute('app_training_session_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('training_session/new.html.twig', [
            'training_session' => $trainingSession,
            'form' => $form,
            'trainers' => $usersByRole,
        ]);
    }

    #[Route('/{id}', name: 'app_training_session_show', methods: ['GET'])]
    public function show(TrainingSession $trainingSession): Response
    {

        return $this->render('training_session/show.html.twig', [
            'training_session' => $trainingSession,
        ]);
    }


    #[Route('/{id}/edit', name: 'app_training_session_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, TrainingSession $trainingSession, TrainingSessionRepository $trainingSessionRepository, ImageRepository $imageRepository): Response
    {
        $form = $this->createForm(TrainingSessionType::class, $trainingSession);
        $form->handleRequest($request);
        $targetDirectory = 'uploads/trainingSession/';

        if ($form->isSubmitted() && $form->isValid()) {
            $trainingSessionFiles = $_FILES['trainingSessionFiles'];
            if ($trainingSessionFiles !== null && $trainingSessionFiles['size'][0] !== 0)
            {
                $fileUploaded = FileUploaderService::uploadImages($trainingSessionFiles, $targetDirectory, $trainingSession, $trainingSessionRepository, $imageRepository);
                if ($fileUploaded === false)
                {
                    $this->addFlash('danger', 'Une erreur est survenue lors de l\'upload des images');
                }
            }

            $trainingSessionRepository->save($trainingSession, true);

            return $this->redirectToRoute('app_training_session_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('training_session/edit.html.twig', [
            'training_session' => $trainingSession,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_training_session_delete', methods: ['POST'])]
    public function delete(Request $request, TrainingSession $trainingSession, TrainingSessionRepository $trainingSessionRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$trainingSession->getId(), $request->request->get('_token'))) {
            $trainingSessionRepository->remove($trainingSession, true);
        }

        return $this->redirectToRoute('app_training_session_index', [], Response::HTTP_SEE_OTHER);
    }

    // approve training session
    #[Route('/{id}/approve', name: 'app_training_session_approve', methods: ['GET', 'POST'])]
    public function approve(TrainingSession $trainingSession, TrainingSessionRepository $trainingSessionRepository): Response
    {
        $trainingSession->setIsApproved(true);
        $trainingSessionRepository->save($trainingSession, true);
        return $this->redirectToRoute('app_training_session_index', [], Response::HTTP_SEE_OTHER);
    }    // approve training session
    #[Route('/{id}/cached/{id_comment}', name: 'app_cached', methods: ['GET', 'POST'])]
    public function cached(CommentRepository $commentRepository ,TrainingSessionRepository $trainingSessionRepository, $id, $id_comment): Response
    {
        $comment = $commentRepository->find($id_comment);
        if($comment){
            $comment->setIsCached(true);
            $commentRepository->save($comment, true);
        }
       $trainingSession= $trainingSessionRepository->find($id);

        return $this->redirectToRoute('app_training_session_show', [ 'id' =>$trainingSession?->getId()] );
    }
    #[Route('/{id}/visible/{id_comment}', name: 'app_visible_comment', methods: ['GET', 'POST'])]
    public function commentVisible(CommentRepository $commentRepository ,TrainingSessionRepository $trainingSessionRepository, $id, $id_comment): Response
    {
        $comment = $commentRepository->find($id_comment);
        if($comment){
            $comment->setIsCached(false);
            $commentRepository->save($comment, true);
        }
       $trainingSession= $trainingSessionRepository->find($id);

        return $this->redirectToRoute('app_training_session_show', [ 'id' =>$trainingSession?->getId()] );
    }

    // disapprove training session
    #[Route('/{id}/disapprove', name: 'app_training_session_disapprove', methods: ['GET', 'POST'])]
    public function disapprove(TrainingSession $trainingSession, TrainingSessionRepository $trainingSessionRepository): Response
    {
        $trainingSession->setIsApproved(false);
        $trainingSessionRepository->save($trainingSession, true);
        return $this->redirectToRoute('app_training_session_index', [], Response::HTTP_SEE_OTHER);
    }

    // cancel training session
    #[Route('/{id}/cancel', name: 'app_training_session_cancel', methods: ['GET', 'POST'])]
    public function cancel(TrainingSession $trainingSession, TrainingSessionRepository $trainingSessionRepository): Response
    {
        $trainingSession->setIsCanceled(true);
        $trainingSessionRepository->save($trainingSession, true);
        return $this->redirectToRoute('app_training_session_index', [], Response::HTTP_SEE_OTHER);
    }
    
    // activate training session
    #[Route('/{id}/activate', name: 'app_training_session_activate', methods: ['GET', 'POST'])]
    public function activate(TrainingSession $trainingSession, TrainingSessionRepository $trainingSessionRepository): Response
    {
        $trainingSession->setIsCanceled(false);
        $trainingSessionRepository->save($trainingSession, true);
        return $this->redirectToRoute('app_training_session_index', [], Response::HTTP_SEE_OTHER);
    }

    // delete image from training session
    #[Route('/{id}/deleteImage/{imageId}', name: 'app_training_session_delete_image', methods: ['GET', 'POST'])]
    public function deleteImage(TrainingSession $trainingSession, ImageRepository $imageRepository, $imageId): Response
    {
        $image = $imageRepository->find($imageId);
        if ($image !== null)
        {
            $imageRepository->remove($image, true);
        }else{
            $this->addFlash('danger', 'Une erreur est survenue lors de la suppression de l\'image');
        }
        return $this->redirectToRoute('app_training_session_show', ['id' => $trainingSession->getId()], Response::HTTP_SEE_OTHER);
    }


}
