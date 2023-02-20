<?php

namespace App\Controller;

use App\Repository\CompetitionRepository;
use App\Repository\LinkRepository;
use App\Repository\PartnerRepository;
use App\Repository\TrainingSessionRepository;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class IndexController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function index(PartnerRepository $partnerRepository, LinkRepository $linkRepository ,TrainingSessionRepository $trainingSessionRepository, CompetitionRepository $competitionRepository, UserRepository $userRepository): Response
    {
        $trainers = $userRepository->findByRoles('ROLE_TRAINER');
        $filteredTrainers = [];
        $banner = $linkRepository->findOneBy(['video' => null]);
        $video = $linkRepository->findOneBy(['banner' => null]);
        foreach ($trainers as $trainer) {
            $trainingTrainer = $trainer->getTrainingTrainers();
            $score = 0;
            $rates = 0;
            $nbRates = 0;
            foreach ($trainingTrainer as $training) {
                $participates = $training->getTrainingSession()->getParticipateToTrainingSessions();

                foreach ($participates as $participate) {
                    if ($participate->getRate() !== null) {
                        $rates += $participate->getRate();
                        $nbRates++;
                    }
                }

            }
            if ($nbRates !== 0) {
                $score = $rates / $nbRates;
            }
            $filteredTrainers[] = [
                'trainer' => $trainer,
                'score' => $score,
            ];
        }
        usort($filteredTrainers, function ($a, $b) {
            return $a['score'] <=> $b['score'];
        });
        $filteredTrainers = array_reverse($filteredTrainers);
        // top 10 trainers by score
        $filteredTrainers = array_slice($filteredTrainers, 0, 10);
        // exclude trainers with score = 0
        $filteredTrainers = array_filter($filteredTrainers, function ($a) {
            return $a['score'] !== 0;
        });
        $lastCompetition = $competitionRepository->getLastCompetition()[0];
        // top 3 participants by rank in last competition
        $participants = $lastCompetition->getParticipateToCompetitions();
        $filteredParticipants = [];
        foreach ($participants as $participant) {
            $filteredParticipants[] = [
                'participant' => $participant,
                'rank' => $participant->getClassification(),
            ];
        }
        // filter the participants with rank = 0
        $filteredParticipants = array_filter($filteredParticipants, function ($a) {
            return $a['rank'] !== 0 && $a['rank'] !== null;
        });
        usort($filteredParticipants, function ($a, $b) {
            return $a['rank'] <=> $b['rank'];
        });
        $filteredParticipants = array_slice($filteredParticipants, 0, 3);
        $filteredParticipants = array_reverse($filteredParticipants);
        // slice string video
        $video = substr($video?->getVideo(), 32);
        return $this->render('index/index.html.twig'
            , [
                'partners' => $partnerRepository->findAll(),
                'competition'=> $competitionRepository->createOrderedByCompetitionDateQueryBuilder(),
                'trainingSessions' => $trainingSessionRepository->findFilteredTrainingSessionsApprovedNotCanceledNotExpired(),
                'lastCompetition' => $competitionRepository->getLastCompetition()[0],
                'rankedParticipants' => $filteredParticipants,
                'user' => $this->getUser(),
                'trainers' => $filteredTrainers,
                'banner' => $banner,
                'video' => $video,
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
