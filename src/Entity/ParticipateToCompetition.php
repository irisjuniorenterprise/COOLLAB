<?php

namespace App\Entity;

use App\Repository\ParticipateToCompetitionRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ParticipateToCompetitionRepository::class)]
class ParticipateToCompetition
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private int $id;

    #[ORM\Column(nullable: true)]
    private bool $isPresent = false;

    #[ORM\Column(nullable: true)]
    private ?\DateTimeImmutable $participatedAt = null;

    #[ORM\Column(nullable: true)]
    private ?int $classification = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $prize = null;

    #[ORM\ManyToOne(inversedBy: 'participateToCompetitions')]
    private Competition $competition;

    #[ORM\ManyToOne(fetch: 'EAGER', inversedBy: 'participateToCompetitions')]
    private User $user;

    public function getId(): int
    {
        return $this->id;
    }

    public function getIsPresent(): bool
    {
        return $this->isPresent;
    }

    public function setIsPresent(bool $isPresent): self
    {
        $this->isPresent = $isPresent;

        return $this;
    }

    public function getParticipatedAt(): \DateTimeImmutable
    {
        return $this->participatedAt;
    }

    public function setParticipatedAt(\DateTimeImmutable $participatedAt): self
    {
        $this->participatedAt = $participatedAt;

        return $this;
    }

    public function getClassification(): ?int
    {
        return $this->classification;
    }

    public function setClassification(int $classification): self
    {
        $this->classification = $classification;

        return $this;
    }

    public function getPrize(): ?string
    {
        return $this->prize;
    }

    public function setPrize(string $prize): self
    {
        $this->prize = $prize;

        return $this;
    }

    public function getCompetition(): Competition
    {
        return $this->competition;
    }

    public function setCompetition(Competition $competition): self
    {
        $this->competition = $competition;

        return $this;
    }

    public function getUser(): User
    {
        return $this->user;
    }

    public function setUser(User $user): self
    {
        $this->user = $user;

        return $this;
    }
}
