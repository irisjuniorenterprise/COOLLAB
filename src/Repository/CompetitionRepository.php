<?php

namespace App\Repository;

use App\Entity\Competition;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\QueryBuilder;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Competition>
 *
 * @method Competition|null find($id, $lockMode = null, $lockVersion = null)
 * @method Competition|null findOneBy(array $criteria, array $orderBy = null)
 * @method Competition[]    findAll()
 * @method Competition[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CompetitionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Competition::class);
    }

    public function save(Competition $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Competition $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return Competition[] Returns an array of Competition objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('c.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?Competition
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }


    private function addOrderByIdQueryBuilder(QueryBuilder $queryBuilder = null): QueryBuilder
    {
        $queryBuilder = $queryBuilder ?? $this->createQueryBuilder('competition')->select('competition');

        return $queryBuilder->orderBy('competition.id', 'DESC');
    }

    private function addOrderByDateQueryBuilder(QueryBuilder $queryBuilder = null): QueryBuilder
    {
        $queryBuilder = $queryBuilder ?? $this->createQueryBuilder('competition')->select('competition');

        return $queryBuilder->orderBy('competition.startDate', 'DESC');
    }


    public function createOrderedByCompetitionNameQueryBuilder(string $q = null): QueryBuilder
    {
        $queryBuilder = $this->addOrderByIdQueryBuilder();

        if ($q) {
            $queryBuilder
                ->andWhere('competition.name LIKE :name')
                ->orWhere('competition.place LIKE :place')
                /*                ->orWhere('user.firstName LIKE :firstName')
                                ->orWhere('user.lastName LIKE :lastName')
                                ->andWhere('user.roles LIKE :role')*/
                ->setParameter('name', '%'.$q.'%')
                ->setParameter('place', '%'.$q.'%');
            /*                ->setParameter('firstName', '%'.$q.'%')
                            ->setParameter('lastName', '%'.$q.'%')
                            ->setParameter('role', '%'.$role.'%')*/
        }
        return $queryBuilder;
    }

    public function createOrderedByCompetitionDateQueryBuilder(): array
    {
        $queryBuilder = $this->addOrderByIdQueryBuilder();
            $queryBuilder
                ->andWhere('competition.startDate > :startDate')
                ->setParameter('startDate', new \DateTimeImmutable())
                ->setMaxResults(1);
        return $queryBuilder->getQuery()->getResult();
    }
}
