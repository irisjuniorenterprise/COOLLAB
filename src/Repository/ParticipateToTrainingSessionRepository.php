<?php

namespace App\Repository;

use App\Entity\ParticipateToTrainingSession;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<ParticipateToTrainingSession>
 *
 * @method ParticipateToTrainingSession|null find($id, $lockMode = null, $lockVersion = null)
 * @method ParticipateToTrainingSession|null findOneBy(array $criteria, array $orderBy = null)
 * @method ParticipateToTrainingSession[]    findAll()
 * @method ParticipateToTrainingSession[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ParticipateToTrainingSessionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ParticipateToTrainingSession::class);
    }

    public function save(ParticipateToTrainingSession $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(ParticipateToTrainingSession $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return ParticipateToTrainingSession[] Returns an array of ParticipateToTrainingSession objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('p.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?ParticipateToTrainingSession
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
