<?php

namespace App\Repository;

use App\Entity\TrainingSession;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\QueryBuilder;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<TrainingSession>
 *
 * @method TrainingSession|null find($id, $lockMode = null, $lockVersion = null)
 * @method TrainingSession|null findOneBy(array $criteria, array $orderBy = null)
 * @method TrainingSession[]    findAll()
 * @method TrainingSession[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TrainingSessionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TrainingSession::class);
    }

    public function save(TrainingSession $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(TrainingSession $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return TrainingSession[] Returns an array of TrainingSession objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('t.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?TrainingSession
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }




    private function addOrderByIdQueryBuilder(QueryBuilder $queryBuilder = null): QueryBuilder
    {
        $queryBuilder = $queryBuilder ?? $this->createQueryBuilder('training_session')->select('training_session');

        return $queryBuilder->orderBy('training_session.id', 'DESC');
    }

    public function createOrderedByTrainingNameQueryBuilder(string $q = null): QueryBuilder
    {
        $queryBuilder = $this->addOrderByIdQueryBuilder();

        if ($q) {
            $queryBuilder
                ->andWhere('training_session.name LIKE :name')
                ->orWhere('training_session.place LIKE :place')
                ->setParameter('name', '%'.$q.'%')
                ->setParameter('place', '%'.$q.'%');
        }
        return $queryBuilder;
    }


    public function findAllCities(): array
    {
        $queryBuilder = $this->createQueryBuilder('training_session')->select('DISTINCT training_session.city');
        return $queryBuilder->getQuery()->getResult();
    }

    // get cities for filter distinct and not null
    public function findAllCitiesForFilter(): array
    {
        $queryBuilder = $this->createQueryBuilder('training_session')->select('DISTINCT training_session.city');
        $queryBuilder->andWhere('training_session.city IS NOT NULL');
        return $queryBuilder->getQuery()->getResult();
    }

    // get cities for filter distinct and not null and approved and not canceled and not expired
    public function findAllCitiesForFilterApprovedNotCanceledNotExpired(): array
    {
        $queryBuilder = $this->createQueryBuilder('training_session')->select('DISTINCT training_session.city');
        $queryBuilder->andWhere('training_session.city IS NOT NULL');
        $queryBuilder->andWhere('training_session.isApproved = true');
        $queryBuilder->andWhere('training_session.isCanceled = false');/*
        $queryBuilder->andWhere('training_session.endDate > CURRENT_DATE()');*/
        return $queryBuilder->getQuery()->getResult();
    }

    public function findFilteredTrainingSessions($categoryFilter, $cityFilter, $priceFilter, $expiredCheck): QueryBuilder
    {
        $queryBuilder = $this->addOrderByIdQueryBuilder();
        //$queryBuilder = $this->createQueryBuilder('training_session')->select('training_session');
        if ($cityFilter!==''){$queryBuilder->andWhere('training_session.city LIKE :city')->setParameter('city', '%'.$cityFilter.'%');}
        if ($categoryFilter!==''){$queryBuilder->andWhere('training_session.category = :category')->setParameter('category', $categoryFilter);}
        if ($priceFilter==='under-50'){$queryBuilder->andWhere('training_session.price < 50');}
        if ($priceFilter==='50-100'){$queryBuilder->andWhere('training_session.price BETWEEN 50 AND 100');}
        if ($priceFilter==='over-100'){$queryBuilder->andWhere('training_session.price > 100');}
        $queryBuilder->andWhere('training_session.isApproved = true');
        $queryBuilder->andWhere('training_session.isCanceled = false');
        return $queryBuilder;
    }

    // get training sessions for filter approved and not canceled and not expired
    public function findFilteredTrainingSessionsApprovedNotCanceledNotExpired(): array
    {
        $queryBuilder = $this->addOrderByIdQueryBuilder();
        $queryBuilder->andWhere('training_session.isApproved = true');
        $queryBuilder->andWhere('training_session.isCanceled = false');
        $queryBuilder->andWhere('training_session.endDate > CURRENT_DATE()');
        return $queryBuilder->getQuery()->getResult();
    }

}
