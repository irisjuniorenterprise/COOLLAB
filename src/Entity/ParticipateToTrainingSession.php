<?php

namespace App\Entity;

use App\Repository\ParticipateToTrainingSessionRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ParticipateToTrainingSessionRepository::class)]
class ParticipateToTrainingSession
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private int $id;

    #[ORM\Column(nullable: true)]
    private ?bool $isPresent = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $comment = null;

    #[ORM\Column(nullable: true)]
    private ?float $rate = null;

    #[ORM\Column(nullable: true)]
    private ?\DateTimeImmutable $participatedAt = null;

    #[ORM\Column(nullable: true)]
    private ?\DateTimeImmutable $commentedAt = null;

    #[ORM\Column(nullable: true)]
    private ?bool $isCached = false;

    #[ORM\ManyToOne(inversedBy: 'participateToTrainingSessions')]
    #[ORM\JoinColumn(nullable: false)]
    private User $user;

    #[ORM\ManyToOne(inversedBy: 'participateToTrainingSessions')]
    #[ORM\JoinColumn(nullable: false)]
    private ?TrainingSession $trainingSession = null;

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

    public function getComment(): string
    {
        return $this->comment;
    }

    public function setComment(string $comment): self
    {
        $this->comment = $comment;

        return $this;
    }

    public function getRate(): float
    {
        return $this->rate;
    }

    public function setRate(float $rate): self
    {
        $this->rate = $rate;

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

    public function getCommentedAt(): \DateTimeImmutable
    {
        return $this->commentedAt;
    }

    public function setCommentedAt(\DateTimeImmutable $commentedAt): self
    {
        $this->commentedAt = $commentedAt;

        return $this;
    }

    public function getIsCached(): bool
    {
        return $this->isCached;
    }

    public function setIsCached(bool $isCached): self
    {
        $this->isCached = $isCached;

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

    public function getTrainingSession(): ?TrainingSession
    {
        return $this->trainingSession;
    }

    public function setTrainingSession(TrainingSession $trainingSession): self
    {
        $this->trainingSession = $trainingSession;

        return $this;
    }
}
