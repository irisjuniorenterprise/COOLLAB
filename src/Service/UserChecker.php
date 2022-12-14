<?php
namespace App\Service;

use Symfony\Component\Security\Core\Exception\CustomUserMessageAuthenticationException;
use Symfony\Component\Security\Core\User\UserCheckerInterface;
use Symfony\Component\Security\Core\User\UserInterface;

class UserChecker implements UserCheckerInterface
{

    public function checkPreAuth(UserInterface $user)
    {
        if ($user->getIsBanned()) {
            throw new CustomUserMessageAuthenticationException("Sorry! You're banned !");
        }
    }

    public function checkPostAuth(UserInterface $user)
    {

    }
}