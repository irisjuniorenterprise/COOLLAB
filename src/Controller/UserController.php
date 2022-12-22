<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\UserType;
use App\Repository\UserRepository;
use Pagerfanta\Doctrine\ORM\QueryAdapter;
use Pagerfanta\Pagerfanta;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Config\Security\PasswordHasherConfig;

#[Route('/admin/user')]
class UserController extends AbstractController
{

    #[Route('/search', name: 'app_user_search', methods: ['GET', 'POST'])]
    public function search(Request $request, UserRepository $userRepository): Response
    {
        $username = $request->query->get('q');

        $users = $userRepository->findByUsername($username);
        return $this->render('user/index.html.twig', [
            'users' => $users,
        ]);
    }


    #[Route('/users/{page}', name: 'app_user_index_users', methods: ['GET'])]
    public function indexUsers(UserRepository $userRepository, int $page = 1): Response
    {
        // get $page type from route
        $page = (int) $page;
        $queryBuilder = $userRepository->createOrderedByRolesQueryBuilder('ROLE_USER');
        $adapter = new QueryAdapter($queryBuilder);
        $pagerFanta = Pagerfanta::createForCurrentPageWithMaxPerPage(
            $adapter,
            $page ?? 1,
            5
        );
        return $this->render('user/index.html.twig', [
            'pager' => $pagerFanta,
        ]);
    }



    #[Route('/trainers/{page}', name: 'app_trainer_index_users', methods: ['GET'])]
    public function indexTrainers(UserRepository $userRepository, int $page = 1): Response
    {
        // get $page type from route
        $page = (int) $page;
        $queryBuilder = $userRepository->createOrderedByRolesQueryBuilder('ROLE_TRAINER', true);
        $adapter = new QueryAdapter($queryBuilder);
        $pagerFanta = Pagerfanta::createForCurrentPageWithMaxPerPage(
            $adapter,
            $page ?? 1,
            5
        );
        return $this->render('user/index.trainers.html.twig', [
            'pager' => $pagerFanta,
        ]);
    }

//    search by username with pagination
    #[Route('/u/{page}', name: 'app_user_index_search', methods: ['GET'])]
    public function index(UserRepository $userRepository, Request $request, int $page = 1): Response
    {
        // get $page type from route
        $userName = $request->query->get('q');
        $page = (int) $page;
        $queryBuilder = $userRepository->createOrderedByFirstNameQueryBuilder($userName);
        $adapter = new QueryAdapter($queryBuilder);
        $pagerFanta = Pagerfanta::createForCurrentPageWithMaxPerPage(
            $adapter,
            $page ?? 1,
            5
        );
        return $this->render('user/index.html.twig', [
            'pager' => $pagerFanta,
            'username' => $userName,
        ]);
    }



    #[Route('/t/{page}', name: 'app_trainer_index_search', methods: ['GET'])]
    public function searchTrainers(UserRepository $userRepository, Request $request, int $page = 1): Response
    {
        // get $page type from route
        $userName = $request->query->get('q');
        $page = (int) $page;
        $queryBuilder = $userRepository->createOrderedByFirstNameQueryBuilder($userName, 'ROLE_TRAINER');
        $adapter = new QueryAdapter($queryBuilder);
        $pagerFanta = Pagerfanta::createForCurrentPageWithMaxPerPage(
            $adapter,
            $page ?? 1,
            5
        );
        return $this->render('user/index.trainers.html.twig', [
            'pager' => $pagerFanta,
            'username' => $userName,
        ]);
    }

    #[Route('/new', name: 'app_user_new', methods: ['GET', 'POST'])]
    public function new(Request $request, UserRepository $userRepository): Response
    {
        $user = new User();
        $form = $this->createForm(UserType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $userRepository->save($user, true);

            return $this->redirectToRoute('app_user_index_users', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('user/new.html.twig', [
            'user' => $user,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_user_show', methods: ['GET'])]
    public function show(User $user): Response
    {
        return $this->render('user/show.html.twig', [
            'user' => $user,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_user_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, User $user, UserRepository $userRepository): Response
    {
        $form = $this->createForm(UserType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $userRepository->save($user, true);

            return $this->redirectToRoute('app_user_index_users', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('user/edit.html.twig', [
            'user' => $user,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_user_delete', methods: ['POST'])]
    public function delete(Request $request, User $user, UserRepository $userRepository): Response
    {
        if ($this->isCsrfTokenValid('delete' . $user->getId(), $request->request->get('_token'))) {
            $userRepository->remove($user, true);
        }

        return $this->redirectToRoute('app_user_index_users', [], Response::HTTP_SEE_OTHER);
    }

    // ban user
    #[Route('/{id}/ban', name: 'app_user_ban', methods: ['GET', 'POST'])]
    public function ban(User $user, UserRepository $userRepository): Response
    {
        $user->setIsBanned(true);
        $userRepository->save($user, true);
        return $this->redirectToRoute('app_user_index_users', [], Response::HTTP_SEE_OTHER);
    }

    // unban user
    #[Route('/{id}/unban', name: 'app_user_unban', methods: ['GET', 'POST'])]
    public function unban(User $user, UserRepository $userRepository): Response
    {
        $user->setIsBanned(false);
        $userRepository->save($user, true);
        return $this->redirectToRoute('app_user_index_users', [], Response::HTTP_SEE_OTHER);
    }

    // promote user to trainer
    #[Route('/{id}/promote', name: 'app_user_promote', methods: ['GET', 'POST'])]
    public function promote(User $user, UserRepository $userRepository): Response
    {
        $user->setRoles(['ROLE_USER', 'ROLE_TRAINER']);
        $userRepository->save($user, true);
        return $this->redirectToRoute('app_user_index_users', [], Response::HTTP_SEE_OTHER);
    }


    // get not approved trainers
    #[Route('/trainer/not-approved', name: 'app_user_not_approved_trainers', methods: ['GET'])]
    public function notApprovedTrainers(UserRepository $userRepository): Response
    {
        $trainers = $userRepository->findByRoleAndIsNotApproved('ROLE_TRAINER');
        return $this->render('user/not_approved_trainers.html.twig', [
            'trainers' => $trainers,
        ]);
    }

    // approve trainer
    #[Route('/trainer/{id}/approve', name: 'app_user_approve_trainer', methods: ['GET', 'POST'])]
    public function approveTrainer(User $user, UserRepository $userRepository): Response
    {
        $user->setIsApproved(true);
        $userRepository->save($user, true);
        return $this->redirectToRoute('app_user_not_approved_trainers', [], Response::HTTP_SEE_OTHER);
    }

}
