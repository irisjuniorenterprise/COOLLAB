<?php

namespace App\Controller;

use App\Repository\CategoryRepository;
use App\Repository\TrainingSessionRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PageController extends AbstractController
{
    // get all approved and not canceled training sessions to display on training page
    #[Route('/training', name: 'app_training_session_training', methods: ['GET'])]
    public function training(TrainingSessionRepository $trainingSessionRepository, CategoryRepository $categoryRepository): Response
    {
        $trainingSessions = $trainingSessionRepository->findBy(['isApproved' => true, 'isCanceled' => false]);
        return $this->render('training_session/trainings.html.twig', [
            'training_sessions' => $trainingSessions,
            'user' => $this->getUser(),
            'categories' => $categoryRepository->findAll(),
            'cities' => $trainingSessionRepository->findAllCitiesForFilterApprovedNotCanceledNotExpired(),
        ]);
    }
    #[Route('/training', name: 'app_training_session_training_filtered', methods: ['GET', 'POST'])]
    public function trainingFiltered(TrainingSessionRepository $trainingSessionRepository, CategoryRepository $categoryRepository): Response
    {
        $expiredCheck = false;
        $priceFilter = '0';
        $cityFilter = '';
        $categoryFilter = '';
        if (isset($_POST['expiredCheck'])) {
            if ($_POST['expiredCheck'] === 'on') {
                $expiredCheck = true;
            }
        }
        if (isset($_POST['priceFilter'])) {
            if ($_POST['priceFilter']) {
                $priceFilter = $_POST['priceFilter'];
            }
        }
        if (isset($_POST['categoryFilter'])) {
            if ($_POST['categoryFilter']) {
                $categoryFilter = $_POST['categoryFilter'];
            }
        }
        if (isset($_POST['cityFilter'])) {
            if ($_POST['cityFilter']) {
                $cityFilter = $_POST['cityFilter'];
            }
        }

        $trainingSessionsFiltered = $trainingSessionRepository->findFilteredTrainingSessions($categoryFilter, $cityFilter, $priceFilter, $expiredCheck);
        dd($trainingSessionsFiltered);
    }
}
