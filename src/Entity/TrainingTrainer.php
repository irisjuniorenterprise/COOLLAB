<?php

namespace App\Entity;

use App\Repository\TrainingTrainerRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TrainingTrainerRepository::class)]
class TrainingTrainer
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private int $id;

    #[ORM\Column]
    private bool $requestedBy = false;

    #[ORM\Column]
    private \DateTimeImmutable $requestedAt;

    #[ORM\Column]
    private bool $isTrainerPayed = false;

    #[ORM\Column]
    private float $trainerPayment;

    #[ORM\Column]
    #[ORM\JoinColumn(nullable: true)]
    private ?\DateTimeImmutable $payedAt;

    #[ORM\ManyToOne(fetch: 'EAGER', inversedBy: 'trainingTrainers')]
    #[ORM\JoinColumn(nullable: false)]
    private User $user;

    #[ORM\ManyToOne(targetEntity: TrainingSession::class, inversedBy: 'trainingTrainers')]
    #[ORM\JoinColumn(nullable: false)]
    private TrainingSession $trainingSession;


    public function __construct()
    {
        $this->payedAt =null;
        $this->isTrainerPayed = false;
    }


    public function __toString(): string
    {
        return $this->user->getFullName();
    }

    public function getId(): int
    {
        return $this->id;
    }

    public function isRequestedBy(): ?bool
    {
        return $this->requestedBy;
    }

    public function setRequestedBy(bool $requestedBy): self
    {
        $this->requestedBy = $requestedBy;

        return $this;
    }

    public function getRequestedAt(): \DateTimeImmutable
    {
        return $this->requestedAt;
    }

    public function setRequestedAt(\DateTimeImmutable $requestedAt): self
    {
        $this->requestedAt = $requestedAt;

        return $this;
    }

    public function getIsTrainerPayed(): bool
    {
        return $this->isTrainerPayed;
    }
    public function setPayedAt(\DateTimeImmutable|null $payedAt): self
    {
        $this->payedAt = $payedAt;

        return $this;
    }

    public function setIsTrainerPayed(bool $isTrainerPayed): self
    {
        $this->isTrainerPayed = $isTrainerPayed;
        if ($isTrainerPayed) {
            $this->setPayedAt(new \DateTimeImmutable());
        }

        return $this;
    }

    public function getTrainerPayment(): float
    {
        return $this->trainerPayment;
    }

    public function setTrainerPayment(float $trainerPayment): self
    {
        $this->trainerPayment = $trainerPayment;

        return $this;
    }

    public function getPayedAt(): \DateTimeImmutable|null
    {
        return $this->payedAt;
    }


    public function getUser(): User
    {
        return $this->user;
    }

    public function setUser(User $user): self
    {
        $this->user = $user;
        $this->setRequestedAt(new \DateTimeImmutable());
        return $this;
    }

    public function getTrainingSession(): TrainingSession
    {
        return $this->trainingSession;
    }

    public function setTrainingSession(TrainingSession $trainingSession): self
    {
        $this->trainingSession = $trainingSession;

        return $this;
    }
}
