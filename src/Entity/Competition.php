<?php

namespace App\Entity;

use App\Repository\CompetitionRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: CompetitionRepository::class)]
class Competition
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private int $id;

    #[ORM\Column(length: 255)]
    private string $name;

    #[ORM\Column(type: Types::TEXT)]
    private string $description;

    #[ORM\Column(length: 255)]
    private string $place;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private \DateTimeInterface $startDate;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private \DateTimeInterface $endDate;


    #[ORM\Column]
    private bool $isCanceled;

    #[ORM\Column]
    private float $price;

    #[ORM\Column(type: Types::ARRAY)]
    private array $guest = [];

    #[ORM\OneToMany(mappedBy: 'competition', targetEntity: ParticipateToCompetition::class, fetch: 'EAGER', orphanRemoval: true)]
    private Collection $participateToCompetitions;

    #[ORM\OneToMany(mappedBy: 'competition', targetEntity: Image::class, orphanRemoval: true)]
    private Collection $imageCompetitions;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $thumbnail = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $city = null;

    public function __construct()
    {
        $this->participateToCompetitions = new ArrayCollection();
        $this->imageCompetitions = new ArrayCollection();
    }

    public function getId(): int
    {
        return $this->id;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getDescription(): string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getPlace(): string
    {
        return $this->place;
    }

    public function setPlace(string $place): self
    {
        $this->place = $place;

        return $this;
    }

    public function getStartDate(): \DateTimeInterface
    {
        return $this->startDate;
    }

    public function setStartDate(\DateTimeInterface $startDate): self
    {
        $this->startDate = $startDate;

        return $this;
    }

    public function getEndDate(): \DateTimeInterface
    {
        return $this->endDate;
    }

    public function setEndDate(\DateTimeInterface $endDate): self
    {
        $this->endDate = $endDate;

        return $this;
    }

    public function isIsCanceled(): bool
    {
        return $this->isCanceled;
    }

    public function setIsCanceled(bool $isCanceled): self
    {
        $this->isCanceled = $isCanceled;

        return $this;
    }

    public function getPrice(): float
    {
        return $this->price;
    }

    public function setPrice(float $price): self
    {
        $this->price = $price;

        return $this;
    }

    public function getGuest(): array
    {
        return $this->guest;
    }

    public function setGuest(array $guest): self
    {
        $this->guest = $guest;

        return $this;
    }

    /**
     * @return Collection<int, ParticipateToCompetition>
     */
    public function getParticipateToCompetitions(): Collection
    {
        return $this->participateToCompetitions;
    }

    public function addParticipateToCompetition(ParticipateToCompetition $participateToCompetition): self
    {
        if (!$this->participateToCompetitions->contains($participateToCompetition)) {
            $this->participateToCompetitions->add($participateToCompetition);
            $participateToCompetition->setCompetition($this);
        }

        return $this;
    }

    public function removeParticipateToCompetition(ParticipateToCompetition $participateToCompetition): self
    {
        if ($this->participateToCompetitions->removeElement($participateToCompetition)) {
            // set the owning side to null (unless already changed)
            if ($participateToCompetition->getCompetition() === $this) {
                $participateToCompetition->setCompetition(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Image>
     */
    public function getImageCompetitions(): Collection
    {
        return $this->imageCompetitions;
    }

    public function addImageCompetition(Image $imageCompetition): self
    {
        if (!$this->imageCompetitions->contains($imageCompetition)) {
            $this->imageCompetitions->add($imageCompetition);
            $imageCompetition->setCompetition($this);
        }

        return $this;
    }

    public function removeImageCompetition(Image $imageCompetition): self
    {
        if ($this->imageCompetitions->removeElement($imageCompetition)) {
            // set the owning side to null (unless already changed)
            if ($imageCompetition->getCompetition() === $this) {
                $imageCompetition->setCompetition(null);
            }
        }

        return $this;
    }

    public function getThumbnail(): ?string
    {
        return $this->thumbnail;
    }

    public function setThumbnail(?string $thumbnail): self
    {
        $this->thumbnail = $thumbnail;

        return $this;
    }

    public function getCity(): ?string
    {
        return $this->city;
    }

    public function setCity(?string $city): self
    {
        $this->city = $city;

        return $this;
    }
}
