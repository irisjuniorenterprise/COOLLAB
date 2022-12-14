<?php

namespace App\Entity;

use App\Repository\ImageRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass:
    ImageRepository::class)]
class Image
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private int $id;

    #[ORM\Column(length: 255)]
    private string $imageName;

    #[ORM\ManyToOne(inversedBy: 'imageCompetitions')]
    #[ORM\JoinColumn(nullable: true)]
    private ?Competition $competition;

    #[ORM\ManyToOne(inversedBy: 'imageCompetitions')]
    #[ORM\JoinColumn(nullable: true)]
    private ?TrainingSession $trainingSession;

    public function getId(): int
    {
        return $this->id;
    }

    public function getImageName(): ?string
    {
        return $this->imageName;
    }

    public function setImageName(string $imageName): self
    {
        $this->imageName = $imageName;

        return $this;
    }

    public function getCompetition(): ?Competition
    {
        return $this->competition;
    }

    public function setCompetition(?Competition $competition): self
    {
        $this->competition = $competition;

        return $this;
    }

    public function getTrainingSession(): ?TrainingSession
    {
        return $this->trainingSession;
    }

    public function setTrainingSession(?TrainingSession $trainingSession): self
    {
        $this->trainingSession = $trainingSession;

        return $this;
    }
}
