<?php

namespace App\Controller;

use App\Repository\CompetitionRepository;
use App\Repository\PartnerRepository;
use App\Repository\TrainingSessionRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class IndexController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function index(PartnerRepository $partnerRepository, TrainingSessionRepository $trainingSessionRepository, CompetitionRepository $competitionRepository): Response
    {
        return $this->render('index/index.html.twig'
            , [
                'partners' => $partnerRepository->findAll(),
                'competition'=> $competitionRepository->createOrderedByCompetitionDateQueryBuilder(),
                'trainingSessions' => $trainingSessionRepository->findBy([
                    'isApproved' => true,
                    'isCanceled' => false,
                ]),
                'user' => $this->getUser(),
            ]);
    }

    // trainings page
    #[Route('/trainings', name: 'app_trainings')]
    public function trainings(TrainingSessionRepository $trainingSessionRepository): Response
    {
        return $this->render('trainings/all.html.twig', [
            'trainings' => $trainingSessionRepository->findAll(),
        ]);
    }

    #[Route('/banned', name: 'app_banned_user')]
    public function bannedUser(): Response
    {
        return $this->render('banned/banned.html.twig');
    }
}
