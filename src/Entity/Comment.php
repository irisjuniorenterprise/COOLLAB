<?php

namespace App\Entity;

use App\Repository\CommentRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CommentRepository::class)]
class Comment
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $content = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $commentedAt = null;

    #[ORM\Column]
    private ?bool $isCached = null;

    #[ORM\ManyToOne(inversedBy: 'comment')]
    private ?ParticipateToTrainingSession $participateToTrainingSession = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(string $content): self
    {
        $this->content = $content;

        return $this;
    }

    public function getCommentedAt(): ?\DateTimeImmutable
    {
        return $this->commentedAt;
    }

    public function setCommentedAt(\DateTimeImmutable $commentedAt): self
    {
        $this->commentedAt = $commentedAt;

        return $this;
    }

    public function isIsCached(): ?bool
    {
        return $this->isCached;
    }

    public function setIsCached(bool $isCached): self
    {
        $this->isCached = $isCached;

        return $this;
    }

    public function getParticipateToTrainingSession(): ?ParticipateToTrainingSession
    {
        return $this->participateToTrainingSession;
    }

    public function setParticipateToTrainingSession(?ParticipateToTrainingSession $participateToTrainingSession): self
    {
        $this->participateToTrainingSession = $participateToTrainingSession;

        return $this;
    }
}
