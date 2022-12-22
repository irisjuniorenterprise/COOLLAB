<?php

namespace App\Entity;

use App\Repository\ParticipateToTrainingSessionRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
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


    #[ORM\Column(nullable: true)]
    private ?float $rate = null;

    #[ORM\Column(nullable: true)]
    private ?\DateTimeImmutable $participatedAt = null;




    #[ORM\ManyToOne(inversedBy: 'participateToTrainingSessions')]
    #[ORM\JoinColumn(nullable: false)]
    private User $user;

    #[ORM\ManyToOne(inversedBy: 'participateToTrainingSessions')]
    #[ORM\JoinColumn(nullable: false)]
    private ?TrainingSession $trainingSession = null;

    #[ORM\OneToMany(mappedBy: 'participateToTrainingSession', targetEntity: Comment::class)]
    private Collection $comment;

    public function __construct()
    {
        $this->comment = new ArrayCollection();
    }

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



    public function getRate(): float|null
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

    public function participate(?TrainingSession $trainingSession, ?User $commentedUser): bool
    {
        $participated = false;
        if ($trainingSession) {
            $this->setTrainingSession($trainingSession);
            $participated = true;
        }
        if ($commentedUser) {
            $this->setUser($commentedUser);
            $participated = true;
        }
        $this->setParticipatedAt(new \DateTimeImmutable());
        return $participated;
    }

    /**
     * @return Collection<int, Comment>
     */
    public function getComment(): Collection
    {
        return $this->comment;
    }

    public function addComment(Comment $comment): self
    {
        if (!$this->comment->contains($comment)) {
            $this->comment->add($comment);
            $comment->setParticipateToTrainingSession($this);
        }

        return $this;
    }

    public function removeComment(Comment $comment): self
    {
        if ($this->comment->removeElement($comment)) {
            // set the owning side to null (unless already changed)
            if ($comment->getParticipateToTrainingSession() === $this) {
                $comment->setParticipateToTrainingSession(null);
            }
        }

        return $this;
    }
}
