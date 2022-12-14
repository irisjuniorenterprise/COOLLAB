<?php

namespace App\Repository;

use App\Entity\ParticipateToCompetition;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<ParticipateToCompetition>
 *
 * @method ParticipateToCompetition|null find($id, $lockMode = null, $lockVersion = null)
 * @method ParticipateToCompetition|null findOneBy(array $criteria, array $orderBy = null)
 * @method ParticipateToCompetition[]    findAll()
 * @method ParticipateToCompetition[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ParticipateToCompetitionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ParticipateToCompetition::class);
    }

    public function save(ParticipateToCompetition $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(ParticipateToCompetition $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return ParticipateToCompetition[] Returns an array of ParticipateToCompetition objects
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

//    public function findOneBySomeField($value): ?ParticipateToCompetition
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
