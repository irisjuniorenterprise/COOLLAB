<?php

namespace App\Entity;

use App\Repository\TrainingSessionRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

#[ORM\Entity(repositoryClass: TrainingSessionRepository::class)]
class TrainingSession
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
    private bool $isApproved = false;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $link = null;


    #[ORM\Column(length: 255, nullable: true)]
    private ?string $linkForm = null;


    #[ORM\Column]
    private bool $isCanceled = false;

    #[ORM\Column]
    private float $price;


    #[ORM\Column(nullable: true)]
    private ?float $rate = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $requirement = null;

    #[ORM\OneToMany(mappedBy: 'trainingSession', targetEntity: TrainingTrainer::class, fetch: 'EAGER', orphanRemoval: true)]
    private Collection $trainingTrainers;

    #[ORM\OneToMany(mappedBy: 'trainingSession', targetEntity: ParticipateToTrainingSession::class)]
    private Collection $participateToTrainingSessions;

    #[ORM\ManyToOne(inversedBy: 'trainingSessions')]
    #[ORM\JoinColumn(nullable: false)]
    private Category $category;

    #[ORM\OneToMany(mappedBy: 'trainingSession', targetEntity: Image::class, fetch: 'EAGER', orphanRemoval: true)]
    private Collection $images;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $thumbnail = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $city = null;


    public function __construct()
    {
        $this->trainingTrainers = new ArrayCollection();
        $this->participateToTrainingSessions = new ArrayCollection();
        $this->images = new ArrayCollection();
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

    public function getIsApproved(): bool
    {
        return $this->isApproved;
    }

    public function setIsApproved(bool $isApproved): self
    {
        $this->isApproved = $isApproved;

        return $this;
    }

    public function getLink(): ?string
    {
        return $this->link;
    }

    public function setLink(string $link): self
    {
        $this->link = $link;

        return $this;
    }

    public function getLinkForm(): ?string
    {
        return $this->linkForm;
    }

    public function setLinkForm(?string $linkForm): self
    {
        $this->linkForm = $linkForm;

        return $this;
    }

    public function getIsCanceled(): bool
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


    public function getRate(): ?float
    {
        return $this->rate;
    }

    public function setRate(?float $rate): self
    {
        $this->rate = $rate;

        return $this;
    }

    public function getRequirement(): ?string
    {
        return $this->requirement;
    }

    public function setRequirement(string $requirement): self
    {
        $this->requirement = $requirement;

        return $this;
    }

    /**
     * @return Collection<int, TrainingTrainer>
     */
    public function getTrainingTrainers(): Collection
    {
        return $this->trainingTrainers;
    }

    public function addTrainingTrainer(TrainingTrainer $trainingTrainer): self
    {
        if (!$this->trainingTrainers->contains($trainingTrainer)) {
            $this->trainingTrainers->add($trainingTrainer);
            $trainingTrainer->setTrainingSession($this);
        }

        return $this;
    }

    public function removeTrainingTrainer(TrainingTrainer $trainingTrainer): self|bool
    {
        /*if ($this->trainingTrainers->removeElement($trainingTrainer)) {
            // set the owning side to null (unless already changed)
            if ($trainingTrainer->getTrainingSession() === $this) {
                $trainingTrainer->setTrainingSession(null);
            }
        }*/
        return $this->trainingTrainers->removeElement($trainingTrainer);
    }

    /**
     * @return Collection<int, ParticipateToTrainingSession>
     */
    public function getParticipateToTrainingSessions(): Collection
    {
        return $this->participateToTrainingSessions;
    }

    public function addParticipateToTrainingSession(ParticipateToTrainingSession $participateToTrainingSession): self
    {
        if (!$this->participateToTrainingSessions->contains($participateToTrainingSession)) {
            $this->participateToTrainingSessions->add($participateToTrainingSession);
            $participateToTrainingSession->setTrainingSession($this);
        }

        return $this;
    }

    public function removeParticipateToTrainingSession(ParticipateToTrainingSession $participateToTrainingSession): self
    {
        if ($this->participateToTrainingSessions->removeElement($participateToTrainingSession)) {
            // set the owning side to null (unless already changed)
            if ($participateToTrainingSession->getTrainingSession() === $this) {
                $participateToTrainingSession->setTrainingSession(null);
            }
        }

        return $this;
    }

    public function getCategory(): ?Category
    {
        return $this->category;
    }

    public function setCategory(?Category $category): self
    {
        $this->category = $category;

        return $this;
    }

    public function __toString(): string
    {
        return $this->name;
    }

    /**
     * @return Collection<int, Image>
     */
    public function getImages(): Collection
    {
        return $this->images;
    }

    public function addImages(Image $imageCompetition): self
    {
        if (!$this->images->contains($imageCompetition)) {
            $this->images->add($imageCompetition);
            $imageCompetition->setTrainingSession($this);
        }

        return $this;
    }

    public function removeImageCompetition(Image $imageCompetition): self
    {
        if ($this->images->removeElement($imageCompetition)) {
            // set the owning side to null (unless already changed)
            if ($imageCompetition->getTrainingSession() === $this) {
                $imageCompetition->setTrainingSession(null);
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
