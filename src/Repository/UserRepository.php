<?php

namespace App\Repository;

use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\QueryBuilder;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Security\Core\Exception\UnsupportedUserException;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\PasswordUpgraderInterface;

/**
 * @extends ServiceEntityRepository<User>
 *
 * @method User|null find($id, $lockMode = null, $lockVersion = null)
 * @method User|null findOneBy(array $criteria, array $orderBy = null)
 * @method User[]    findAll()
 * @method User[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserRepository extends ServiceEntityRepository implements PasswordUpgraderInterface
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, User::class);
    }

    public function save(User $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(User $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    /**
     * Used to upgrade (rehash) the user's password automatically over time.
     */
    public function upgradePassword(PasswordAuthenticatedUserInterface $user, string $newHashedPassword): void
    {
        if (!$user instanceof User) {
            throw new UnsupportedUserException(sprintf('Instances of "%s" are not supported.', \get_class($user)));
        }

        $user->setPassword($newHashedPassword);

        $this->save($user, true);
    }

//    /**
//     * @return User[] Returns an array of User objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('u')
//            ->andWhere('u.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('u.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

    /**
     * @return User[] Returns an array of User objects
     */
    public function findByRole($role): array
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.roles = :role')
            ->setParameter('role', $role)
            ->getQuery()
            ->getResult()
        ;
    }

//    public function findOneBySomeField($value): ?User
//    {
//        return $this->createQueryBuilder('u')
//            ->andWhere('u.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }

    public function findByRoles($role)
    {
        $qb = $this->_em->createQueryBuilder();
        $qb->select('u')
            ->from(User::class, 'u')
            ->where('u.roles LIKE :roles')
            ->setParameter('roles', '%"'.$role.'"%');

        return $qb->getQuery()->getResult();
    }



    public function createOrderedByRolesQueryBuilder(string $role = null, bool $isApproved = null): QueryBuilder
    {
        $queryBuilder = $this->addOrderByIdQueryBuilder();

        if ($role) {
            $queryBuilder
                ->andWhere('user.roles LIKE :role')
                ->andWhere('user.isApproved = :isApproved')
                ->setParameter('isApproved', $isApproved)
                ->setParameter('role', '%"'.$role.'"%');
        }
        return $queryBuilder;
    }
    public function createOrderedByFirstNameQueryBuilder(string $q = null, $role = 'ROLE_USER'): QueryBuilder
    {
        $queryBuilder = $this->addOrderByIdQueryBuilder();

        if ($q) {
            $queryBuilder
                ->andWhere('user.phone LIKE :phone')
                ->orWhere('user.email LIKE :email')
                ->orWhere('user.firstName LIKE :firstName')
                ->orWhere('user.lastName LIKE :lastName')
                ->andWhere('user.roles LIKE :role')
                ->setParameter('email', '%'.$q.'%')
                ->setParameter('firstName', '%'.$q.'%')
                ->setParameter('lastName', '%'.$q.'%')
                ->setParameter('role', '%'.$role.'%')
                ->setParameter('phone', '%"'.$q.'"%');
        }
        return $queryBuilder;
    }

    public function createOrderedByNameQueryBuilder(string $name = null): QueryBuilder
    {
        $queryBuilder = $this->addOrderByIdQueryBuilder();

        if ($name) {
            $queryBuilder
                ->andWhere('user.firstName LIKE :firstN')
                ->orWhere('user.lastName LIKE :lastN')
                ->orWhere('user.email LIKE :email')
                ->setParameter('firstN', '%"'.$name.'"%')
                ->setParameter('lastN', '%"'.$name.'"%')
                ->setParameter('email', '%"'.$name.'"%');

        }
        return $queryBuilder;
    }


    private function addOrderByIdQueryBuilder(QueryBuilder $queryBuilder = null): QueryBuilder
    {
        $queryBuilder = $queryBuilder ?? $this->createQueryBuilder('user')->select('user');

        return $queryBuilder->orderBy('user.id', 'DESC');
    }

    public function findByUsername(string $username): QueryBuilder
    {
        $qb = $this->_em->createQueryBuilder();
        $qb->select('u')
            ->from(User::class, 'u')
            ->where('u.firstName LIKE :firstN')
            ->orWhere('u.lastName LIKE :lastN')
            ->orWhere('u.email LIKE :email')
            ->setParameter('firstN', '%"'.$username.'"%')
            ->setParameter('lastN', '%"'.$username.'"%')
            ->setParameter('email', '%"'.$username.'"%');

        return $qb;
    }

    // find user by role and is not approved
    public function findByRoleAndIsNotApproved($role)
    {
        $qb = $this->_em->createQueryBuilder();
        $qb->select('u')
            ->from(User::class, 'u')
            ->where('u.roles LIKE :roles')
            ->andWhere('u.isApproved = :isApproved')
            ->setParameter('roles', '%"'.$role.'"%')
            ->setParameter('isApproved', false);

        return $qb->getQuery()->getResult();
    }
}
