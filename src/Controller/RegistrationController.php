<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\RegistrationFormType;
use App\Form\RegistrationTrainerFormType;
use App\Repository\UserRepository;
use App\Security\EmailVerifier;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mime\Address;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\Translation\TranslatorInterface;
use SymfonyCasts\Bundle\VerifyEmail\Exception\VerifyEmailExceptionInterface;
use SymfonyCasts\Bundle\VerifyEmail\VerifyEmailHelperInterface;

class RegistrationController extends AbstractController
{
    private EmailVerifier $emailVerifier;
    private string $urlVerifier;

    public function __construct(EmailVerifier $emailVerifier)
    {
        $this->emailVerifier = $emailVerifier;
    }

    #[Route('/register', name: 'app_register')]
    public function register(Request $request, UserPasswordHasherInterface $userPasswordHasher, EntityManagerInterface $entityManager, VerifyEmailHelperInterface $verifyEmailHelper): Response
    {
        $user = new User();
        $form = $this->createForm(RegistrationFormType::class, $user);
        $formTrainer = $this->createForm(RegistrationTrainerFormType::class, $user);
        $form->handleRequest($request);
        $formTrainer->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // encode the plain password
            $user->setRoles(['ROLE_USER']);
            $user->setIsBanned(false);
            $user->setIsVerified(true);
            $user->setPassword(
                $userPasswordHasher->hashPassword(
                    $user,
                    $form->get('plainPassword')->getData()
                )
            );

            $entityManager->persist($user);
            $entityManager->flush();

            $signatureComponents = $verifyEmailHelper->generateSignature(
                'app_verify_email',
                $user->getId(),
                $user->getEmail(),
                ['id' => $user->getId()]
            );
            $this->addFlash('success', 'Votre compte a été créé avec succès. Veuillez vérifier votre adresse email pour activer votre compte.');
            $this->urlVerifier = $signatureComponents->getSignedUrl();

            // generate a signed url and email it to the user
            $this->emailVerifier->sendEmailConfirmation('app_verify_email', $user,
                (new TemplatedEmail())
                    ->from(new Address('ghayth.frikha14@gmail.com', 'COLLAB'))
                    ->to($user->getEmail())
                    ->subject('Please Confirm your Email')
                    ->html("
                        <p>Bonjour {$user->getFirstName()} {$user->getLastName()},</p>
                        <p>Merci de vous être inscrit sur COLLAB.</p>
                        <p>Veuillez cliquer sur le lien ci-dessous pour activer votre compte.</p>
                        <p><a href='{$this->urlVerifier}'>Activer mon compte</a></p>
                        <p>Cordialement,</p>
                        <p>L'équipe COLLAB</p>
                    "),
                $this->urlVerifier
            );
            // do anything else you need here, like send an email

            return $this->redirectToRoute('login_users');
        }
        if ($formTrainer->isSubmitted() && $formTrainer->isValid()) {
            // split clubs by comma and trim spaces from each club
            $clubs = explode(',', $request->request->get('club'));
            $clubs = array_map('trim', $clubs);
            $workPlaces = explode(',', $request->request->get('work'));
            $workPlaces = array_map('trim', $workPlaces);
            // set clubs to user from clubs array
            $user->setClub($clubs);
            $user->setWorkPlace($workPlaces);
            // encode the plain password
            $user->setRoles(['ROLE_TRAINER']);
            $user->setIsBanned(false);
            $user->setIsApproved(false);
            $user->setPassword(
                $userPasswordHasher->hashPassword(
                    $user,
                    $formTrainer->get('plainPassword')->getData()
                )
            );

            $entityManager->persist($user);
            $entityManager->flush();

            $signatureComponents = $verifyEmailHelper->generateSignature(
                'app_verify_email',
                $user->getId(),
                $user->getEmail(),
                ['id' => $user->getId()]
            );
            $this->addFlash('success', 'Votre compte a été créé avec succès. Veuillez vérifier votre adresse email pour activer votre compte.');
            $this->urlVerifier = $signatureComponents->getSignedUrl();

            // generate a signed url and email it to the user
            $this->emailVerifier->sendEmailConfirmation('app_verify_email', $user,
                (new TemplatedEmail())
                    ->from(new Address('ghayth.frikha14@gmail.com', 'COLLAB'))
                    ->to($user->getEmail())
                    ->subject('Please Confirm your Email')
                    ->htmlTemplate('registration/confirmation_email.html.twig'),
                $this->urlVerifier
            );
            // do anything else you need here, like send an email

            return $this->redirectToRoute('login_users');
        }

        return $this->render('registration/registration.html.twig', [
            'registrationForm' => $form->createView(),
            'registrationTrainerForm' => $formTrainer->createView(),
        ]);
    }



    #[Route('/register-trainer', name: 'app_register_trainer')]
    public function registerTrainer(Request $request, UserPasswordHasherInterface $userPasswordHasher, EntityManagerInterface $entityManager, VerifyEmailHelperInterface $verifyEmailHelper): Response
    {
        $user = new User();
        $form = $this->createForm(RegistrationTrainerFormType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // split clubs by comma and trim spaces from each club
            $clubs = explode(',', $request->request->get('club'));
            $clubs = array_map('trim', $clubs);
            $workPlaces = explode(',', $request->request->get('work'));
            $workPlaces = array_map('trim', $workPlaces);
            // set clubs to user from clubs array
            $user->setClub($clubs);
            $user->setWorkPlace($workPlaces);
            // encode the plain password
            $user->setRoles(['ROLE_TRAINER']);
            $user->setIsBanned(false);
            $user->setPassword(
                $userPasswordHasher->hashPassword(
                    $user,
                    $form->get('plainPassword')->getData()
                )
            );

            $entityManager->persist($user);
            $entityManager->flush();

            $signatureComponents = $verifyEmailHelper->generateSignature(
                'app_verify_email',
                $user->getId(),
                $user->getEmail(),
                ['id' => $user->getId()]
            );
            $this->addFlash('success', 'Confirm your email at: '.$signatureComponents->getSignedUrl());
            $this->urlVerifier = $signatureComponents->getSignedUrl();

            // generate a signed url and email it to the user
            $this->emailVerifier->sendEmailConfirmation('app_verify_email', $user,
                (new TemplatedEmail())
                    ->from(new Address('ghayth.frikha14@gmail.com', 'COLLAB'))
                    ->to($user->getEmail())
                    ->subject('Please Confirm your Email')
                    ->htmlTemplate('registration/confirmation_email.html.twig'),
                $this->urlVerifier
            );
            // do anything else you need here, like send an email

            return $this->redirectToRoute('app_home');
        }

        return $this->render('registration/register.trainer.html.twig', [
            'registrationForm' => $form->createView(),
        ]);
    }

    #[Route('/verify/email', name: 'app_verify_email')]
    public function verifyUserEmail(Request $request, EntityManagerInterface $entityManager, VerifyEmailHelperInterface $verifyEmailHelper, UserRepository $userRepository): Response
    {
        $user = $userRepository->find($request->query->get('id'));
        if (!$user)
        {
            throw $this->createNotFoundException();
        }
        try {
            $verifyEmailHelper->validateEmailConfirmation(
                $request->getUri(),
                $user->getId(),
                $user->getEmail()
            );
        }catch (VerifyEmailExceptionInterface $e){
            $this->addFlash('error', $e->getReason());
            return $this->redirectToRoute('app_register');
        }
        $user->setIsVerified(true);
        $entityManager->flush();
        $this->addFlash('success', 'account verified');
        return $this->redirectToRoute('login_users');
    }

    #[Route('/trainer/{id}/update-password', name: 'app_user_update_password', methods: ['GET', 'POST'])]
    public function updatePassword(User $user,Request $request ,UserRepository $userRepository, UserPasswordHasherInterface $userPasswordHasher): Response
    {
        // check if the old password is correct
        $oldPassword = $request->request->get('oldPassword');
        $newPassword = $request->request->get('newPassword');
        if ($oldPassword === $newPassword) {
            $this->addFlash('error', 'Mot de passe identique');
            return $this->redirectToRoute('app_profile_trainer', ['id' => $user->getId()]);
        }
        if (!$userPasswordHasher->isPasswordValid($user, $oldPassword)) {
            $this->addFlash('error', 'Mot de passe incorrect');
            return $this->redirectToRoute('app_profile_trainer', ['id' => $user->getId()]);
        }
        if ($oldPassword === null || $newPassword === null) {
            $this->addFlash('error', 'Mot de passe est vide');
            return $this->redirectToRoute('app_profile_trainer', ['id' => $user->getId()]);
        }
        // check the size of the new password
        if (strlen($newPassword) < 8) {
            $this->addFlash('error', 'Mot de passe doit contenir au moins 8 caractères');
            return $this->redirectToRoute('app_profile_trainer', ['id' => $user->getId()]);
        }
        if ($userPasswordHasher->isPasswordValid($user, $oldPassword)) {
            $newPassword = $request->request->get('newPassword');
            $user->setPassword($userPasswordHasher->hashPassword($user, $newPassword));
            $userRepository->save($user, true);
            $this->addFlash('success', 'Mot de passe modifié avec succès');
            return $this->redirectToRoute('app_profile_trainer', ['id' => $user->getId()]);
        }
        return $this->redirectToRoute('app_profile_trainer', ['id' => $user->getId()]);
    }
}
