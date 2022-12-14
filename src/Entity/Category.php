<?php

namespace App\Entity;

use App\Repository\CategoryRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CategoryRepository::class)]
class Category
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private int $id;

    #[ORM\Column(length: 255, unique: true)]
    private string $name;

    #[ORM\OneToMany(mappedBy: 'category', targetEntity: TrainingSession::class)]
    private Collection $trainingSessions;

    public function __construct()
    {
        $this->trainingSessions = new ArrayCollection();
    }

    public function __toString(): string
    {
        return $this->name;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return Collection<int, TrainingSession>
     */
    public function getTrainingSessions(): Collection
    {
        return $this->trainingSessions;
    }

    public function addTrainingSession(TrainingSession $trainingSession): self
    {
        if (!$this->trainingSessions->contains($trainingSession)) {
            $this->trainingSessions->add($trainingSession);
            $trainingSession->setCategory($this);
        }

        return $this;
    }

    public function removeTrainingSession(TrainingSession $trainingSession): self
    {
        if ($this->trainingSessions->removeElement($trainingSession)) {
            // set the owning side to null (unless already changed)
            if ($trainingSession->getCategory() === $this) {
                $trainingSession->setCategory(null);
            }
        }

        return $this;
    }
}
