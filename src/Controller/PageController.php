<?php

namespace App\Controller;

use App\Entity\Comment;
use App\Entity\ParticipateToCompetition;
use App\Entity\ParticipateToTrainingSession;
use App\Entity\TrainingSession;
use App\Entity\TrainingTrainer;
use App\Entity\User;
use App\Repository\CategoryRepository;
use App\Repository\CommentRepository;
use App\Repository\CompetitionRepository;
use App\Repository\ParticipateToCompetitionRepository;
use App\Repository\ParticipateToTrainingSessionRepository;
use App\Repository\TrainingSessionRepository;
use App\Repository\TrainingTrainerRepository;
use App\Repository\UserRepository;
use Pagerfanta\Doctrine\ORM\QueryAdapter;
use Pagerfanta\Pagerfanta;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PageController extends AbstractController
{
    // get all approved and not canceled training sessions to display on training page
    /*#[Route('/training', name: 'app_training_session_training', methods: ['GET'])]
    public function training(TrainingSessionRepository $trainingSessionRepository, CategoryRepository $categoryRepository): Response
    {
        $trainingSessions = $trainingSessionRepository->findBy(['isApproved' => true, 'isCanceled' => false]);
        return $this->render('training_session/competitions.html.twig', [
            'training_sessions' => $trainingSessions,
            'user' => $this->getUser(),
            'categories' => $categoryRepository->findAll(),
            'cities' => $trainingSessionRepository->findAllCitiesForFilterApprovedNotCanceledNotExpired(),
        ]);
    }
   */
    /* #[Route('/training', name: 'app_training_session_training_filtered', methods: ['GET', 'POST'])]
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
    }*/

    #[Route('/training/{page}', name: 'app_training_session_training_filtered', methods: ['GET', 'POST'])]
    public function search(TrainingSessionRepository $trainingSessionRepository, CategoryRepository $categoryRepository, int $page = 1): Response
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
        if (isset($_POST['price-filter'])) {
            if ($_POST['price-filter']) {
                $priceFilter = $_POST['price-filter'];
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


        $page = (int)$page;
        $queryBuilder = $trainingSessionRepository->findFilteredTrainingSessions($categoryFilter, $cityFilter, $priceFilter, $expiredCheck);
        $adapter = new QueryAdapter($queryBuilder);
        $pagerFanta = Pagerfanta::createForCurrentPageWithMaxPerPage(
            $adapter,
            $page ?? 1,
            3
        );
        return $this->render('training_session/trainings.html.twig', [
            'pager' => $pagerFanta,
            'user' => $this->getUser(),
            'categories' => $categoryRepository->findAll(),
            'cities' => $trainingSessionRepository->findAllCitiesForFilterApprovedNotCanceledNotExpired(),
            'priceFilter' => $priceFilter,
            'cityFilter' => $cityFilter,
            'categoryFilter' => $categoryFilter,
            'expiredCheck' => $expiredCheck,
        ]);
    }

    // training session details
    #[Route('/training/detail/{id}', name: 'app_training_session_details', methods: ['GET'])]
    public function details(CommentRepository $commentRepository, TrainingSessionRepository $trainingSessionRepository, ParticipateToTrainingSessionRepository $participateToTrainingSessionRepository, int $id): Response
    {
        $trainingSession = $trainingSessionRepository->find($id);
        return $this->render('training_session/trainings.details.html.twig', [
            'training_session' => $trainingSession,
            'trainings' => $trainingSessionRepository->findBy(['isApproved' => true, 'isCanceled' => false]),
            'images' => $trainingSession?->getImages(),
            'related_trainings' => $trainingSessionRepository->findBy(['category' => $trainingSession?->getCategory(), 'isApproved' => true, 'isCanceled' => false]),
            'user' => $this->getUser(),
            'comments' => $commentRepository->findBy(['isCached' => false, 'participateToTrainingSession' => $participateToTrainingSessionRepository->findBy(['trainingSession' => $trainingSession])]),
            'rated' => $participateToTrainingSessionRepository->findOneBy(['trainingSession' => $trainingSession, 'user' => $this->getUser()?->getId()])?->getRate() ?? 0.0,
        ]);
    }

    // participate in training session (add user to training session)
    #[Route('/training/participate/{id}', name: 'app_training_session_participate', methods: ['GET', 'POST'])]
    public function participate(TrainingSessionRepository $trainingSessionRepository, ParticipateToTrainingSessionRepository $participateToTrainingSessionRepository, UserRepository $userRepository, int $id)
    {
        $participateToTrainingSession = new ParticipateToTrainingSession();
        // check if user is logged in and if he is not already participated in the training session and if he is not logged in redirect to login page
        if (!$this->getUser()) {
            return $this->redirectToRoute('login_users');
        }
        $trainingSession = $trainingSessionRepository->find($id);
        $commentedUser = $userRepository->find($this->getUser()?->getId());
        $participateToTrainingSession->setTrainingSession($trainingSession);
        $participateToTrainingSession->setUser($commentedUser);
        $participateToTrainingSession->setParticipatedAt(new \DateTimeImmutable());
        $participateToTrainingSession->setIsPresent(false);
        $participateToTrainingSessionRepository->save($participateToTrainingSession, true);
        $this->addFlash('success', 'Vous participez à la formation');
        return $this->redirectToRoute('app_training_session_details', ['id' => $id]);
    }


    // get all competitions for competition page filtered
    #[Route('/competition/{page}', name: 'app_competition_competition_filtered', methods: ['GET', 'POST'])]
    public function competitionFiltered(CompetitionRepository $competitionRepository, CategoryRepository $categoryRepository, int $page = 1): Response
    {
        $expiredCheck = false;
        $priceFilter = '0';
        $cityFilter = '';
        if (isset($_POST['expiredCheck'])) {
            if ($_POST['expiredCheck'] === 'on') {
                $expiredCheck = true;
            }
        }
        if (isset($_POST['price-filter'])) {
            if ($_POST['price-filter']) {
                $priceFilter = $_POST['price-filter'];
            }
        }
        if (isset($_POST['cityFilter'])) {
            if ($_POST['cityFilter']) {
                $cityFilter = $_POST['cityFilter'];
            }
        }

        $page = (int)$page;
        $queryBuilder = $competitionRepository->findFilteredCompetitions($cityFilter, $priceFilter);
        $adapter = new QueryAdapter($queryBuilder);
        $pagerFanta = Pagerfanta::createForCurrentPageWithMaxPerPage(
            $adapter,
            $page ?? 1,
            3
        );
        return $this->render('competition/competitions.html.twig', [
            'pager' => $pagerFanta,
            'user' => $this->getUser(),
            'cities' => $competitionRepository->findAllCitiesForFilterApprovedNotCanceledNotExpired(),
            'cityFilter' => $cityFilter,
            'priceFilter' => $priceFilter,
        ]);
    }


    #[Route('/competition/detail/{id}', name: 'app_competition_details', methods: ['GET'])]
    public function detailsCompetition(CompetitionRepository $competitionRepository, int $id): Response
    {
        $competition = $competitionRepository->find($id);
        return $this->render('competition/competitions.details.html.twig', [
            'competition' => $competition,
            'competitions' => $competitionRepository->findBy(['isCanceled' => false]),
            'images' => $competition?->getImageCompetitions(),
            'related_competitions' => $competitionRepository->findBy(['isCanceled' => false]),
            'user' => $this->getUser(),
        ]);
    }

    // participate in competition (add user to competition)
    #[Route('/competition/participate/{id}', name: 'app_competition_participate', methods: ['GET', 'POST'])]
    public function participateCompetition(CompetitionRepository $competitionRepository, ParticipateToCompetitionRepository $participateToCompetitionRepository, UserRepository $userRepository, int $id): RedirectResponse
    {
        // check if the user is already participated in the competition
        if ($participateToCompetitionRepository->findOneBy(['competition' => $competitionRepository->find($id), 'user' => $userRepository->find($this->getUser()?->getId())])) {
            $this->addFlash('error', 'Vous participez déjà à cette compétition');
            return $this->redirectToRoute('app_competition_details', ['id' => $id]);
        }
        $participateToCompetition = new ParticipateToCompetition();
        // check if user is logged in and if he is not already participated in the competition and if he is not logged in redirect to login page
        if (!$this->getUser()) {
            return $this->redirectToRoute('login_users');
        }
        $competition = $competitionRepository->find($id);
        $commentedUser = $userRepository->find($this->getUser()?->getId());
        $participateToCompetition->setCompetition($competition);
        $participateToCompetition->setUser($commentedUser);
        $participateToCompetition->setParticipatedAt(new \DateTimeImmutable());
        $participateToCompetition->setIsPresent(false);
        $participateToCompetitionRepository->save($participateToCompetition, true);
        $this->addFlash('success', 'Vous participez à la compétition');
        return $this->redirectToRoute('app_competition_details', ['id' => $id]);
    }

    // comment on training session (add comment to training session) (only for logged in users) (only for users who participated and present in the training session) (add comment to participate to training session)
    #[Route('/training/comment/{id}', name: 'app_training_session_comment', methods: ['GET', 'POST'])]
    public function commentTrainingSession(CommentRepository $commentRepository, TrainingSessionRepository $trainingSessionRepository, ParticipateToTrainingSessionRepository $participateToTrainingSessionRepository, UserRepository $userRepository, int $id): RedirectResponse
    {
        $trainingComment = '';
        if (isset($_POST['trainingComment'])) {
            if ($_POST['trainingComment']) {
                $trainingComment = $_POST['trainingComment'];
            }
        }
        $comment = new Comment();
        $participateToTrainingSession = $participateToTrainingSessionRepository->findOneBy(['trainingSession' => $trainingSessionRepository->find($id), 'user' => $userRepository->find($this->getUser()?->getId())]);
        // check if user is logged in and if he is not already participated in the training session and if he is not logged in redirect to login page
        if (!$this->getUser()) {
            return $this->redirectToRoute('login_users');
        }
        // check if user is participated in the training session
        if (!$participateToTrainingSession) {
            $this->addFlash('error', 'Vous devez participer à la formation pour pouvoir commenter');
            return $this->redirectToRoute('app_training_session_details', ['id' => $id]);
        }
        // check if user is present in the training session
        if (!$participateToTrainingSession->getIsPresent()) {
            $this->addFlash('error', 'Vous devez être présent à la formation pour pouvoir commenter');
            return $this->redirectToRoute('app_training_session_details', ['id' => $id]);
        }
        $comment->setContent($trainingComment);
        $comment->setCommentedAt(new \DateTimeImmutable());
        $comment->setIsCached(false);
        $comment->setParticipateToTrainingSession($participateToTrainingSession);
        $participateToTrainingSessionRepository->save($participateToTrainingSession, true);
        $commentRepository->save($comment, true);
        $this->addFlash('success', 'Votre commentaire a été ajouté');
        return $this->redirectToRoute('app_training_session_details', ['id' => $id]);
    }

    // set a rate for a training session
    #[Route('/training/rate/{id}', name: 'app_training_session_rate', methods: ['GET', 'POST'])]
    public function rateTrainingSession(TrainingSessionRepository $trainingSessionRepository, ParticipateToTrainingSessionRepository $participateToTrainingSessionRepository, UserRepository $userRepository, int $id): RedirectResponse
    {
        $participateToTrainingSession = $participateToTrainingSessionRepository->findOneBy(['trainingSession' => $trainingSessionRepository->find($id), 'user' => $userRepository->find($this->getUser()?->getId())]);
        // check if user is logged in and if he is not already participated in the training session and if he is not logged in redirect to login page
        if (!$this->getUser()) {
            return $this->redirectToRoute('login_users');
        }
        // check if user is participated in the training session
        if (!$participateToTrainingSession) {
            $this->addFlash('error', 'Vous devez participer à la formation pour pouvoir noter');
            return $this->redirectToRoute('app_training_session_details', ['id' => $id]);
        }
        // check if user is present in the training session
        if (!$participateToTrainingSession->getIsPresent()) {
            $this->addFlash('error', 'Vous devez être présent à la formation pour pouvoir noter');
            return $this->redirectToRoute('app_training_session_details', ['id' => $id]);
        }
        if (isset($_POST['rating'])) {
            $participateToTrainingSession->setRate($_POST['rating']);
            $participateToTrainingSessionRepository->save($participateToTrainingSession, true);
            $this->addFlash('success', 'Votre note a été ajoutée');
            return $this->redirectToRoute('app_training_session_details', ['id' => $id]);
        }
        return $this->redirectToRoute('app_training_session_details', ['id' => $id]);
    }

    // profile page (only for logged in users) (only for trainers)
    #[Route('/profile', name: 'app_profile_trainer', methods: ['GET', 'POST'])]
    public function profile(TrainingSessionRepository $trainingSessionRepository, UserRepository $userRepository, CategoryRepository $categoryRepository): Response
    {
        // check if user is logged in and if he is not already participated in the training session and if he is not logged in redirect to login page
        if (!$this->getUser()) {
            return $this->redirectToRoute('login_users');
        }
        return $this->render('user/profile.trainer.html.twig', [
            'user' => $userRepository->find($this->getUser()?->getId()),
            'categories' => $categoryRepository->findAll(),
        ]);
    }

    // update user data from the data entered in the form
    #[Route('/profile/update', name: 'app_profile_update', methods: ['GET', 'POST'])]
    public function updateProfile(Request $request, UserRepository $userRepository): Response
    {
        if (!$this->getUser()) {
            return $this->redirectToRoute('login_users');
        }
        $user = $userRepository->find($this->getUser()?->getId());
        if (!$user) {
            throw $this->createNotFoundException('Utilisateur non trouvé');
        }
        $firstName = $request->request->get('firstName');
        $lastName = $request->request->get('lastName');
        $phone = $request->request->get('phone');
        $address = $request->request->get('address');
        $clubs = explode(',', $request->request->get('club'));
        $clubs = array_map('trim', $clubs);
        $workPlaces = explode(',', $request->request->get('work'));
        $workPlaces = array_map('trim', $workPlaces);
        if ($firstName) {
            $user->setFirstName($firstName);
        }
        if ($lastName) {
            $user->setLastName($lastName);
        }
        if ($phone) {
            $user->setPhone($phone);
        }
        if ($address) {
            $user->setAddress($address);
        }
        if ($clubs) {
            $user->setClub($clubs);
        }
        if ($workPlaces) {
            $user->setWorkplace($workPlaces);
        }
        $userRepository->save($user, true);
        $this->addFlash('updated', 'Vos informations ont été mises à jour');
        return $this->redirectToRoute('app_profile_trainer');

    }

    // trainer request training session via form

    /**
     * @throws \Exception
     */
    #[Route('/profile/training/request', name: 'app_profile_training_request', methods: ['GET', 'POST'])]
    public function requestTrainingSession(Request $request, TrainingSessionRepository $trainingSessionRepository, UserRepository $userRepository, CategoryRepository $categoryRepository, TrainingTrainerRepository $trainingTrainerRepository): Response
    {
        if (!$this->getUser()) {
            return $this->redirectToRoute('login_users');
        }
        $user = $userRepository->find($this->getUser()?->getId());
        if (!$user) {
            throw $this->createNotFoundException('Utilisateur non trouvé');
        }
        $trainingSession = new TrainingSession();
        $trainingTrainer = new TrainingTrainer();
        $name = $request->request->get('trainingName');
        $description = $request->request->get('description');
        $category = $request->request->get('category');
        $startDate = $request->request->get('startDate');
        $endDate = $request->request->get('endDate');
        $address = $request->request->get('address');
        $city = $request->request->get('city');
        $requirement = $request->request->get('requirement');
        if ($startDate >= $endDate) {
            $this->addFlash('errorDate', 'La date de début doit être inférieure à la date de fin');
            return $this->redirectToRoute('app_profile_trainer');
        }
        if(!$name || !$description || !$category || !$startDate || !$endDate || !$address) {
            $this->addFlash('error', 'Veuillez remplir tous les champs');
            return $this->redirectToRoute('app_profile_trainer');
        }
        $trainingSession->setName($name);
        $trainingSession->setDescription($description);
        $trainingSession->setCategory($categoryRepository->find($category));
        $trainingSession->setStartDate(new \DateTimeImmutable($startDate));
        $trainingSession->setEndDate(new \DateTimeImmutable($endDate));
        $trainingSession->setPlace($address);
        $trainingSession->setCity($city);
        $trainingSession->setRequirement($requirement);
        $trainingSessionRepository->save($trainingSession, true);
        $trainingTrainer->setUser($user);
        $trainingTrainer->setTrainingSession($trainingSession);
        $trainingTrainer->setRequestedBy(true);
        $trainingTrainer->setRequestedAt(new \DateTimeImmutable());
        $trainingTrainerRepository->save($trainingTrainer, true);
        $this->addFlash('created', 'Votre demande de formation a été envoyée');
        return $this->redirectToRoute('app_profile_trainer');
    }

}
