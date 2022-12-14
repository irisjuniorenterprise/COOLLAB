<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;

#[ORM\Entity(repositoryClass: UserRepository::class)]
#[ORM\Table(name: '`user`')]
#[UniqueEntity(fields: ['email'], message: 'There is already an account with this email')]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private int $id;

    #[ORM\Column(length: 180, unique: true)]
    private string $email;

    #[ORM\Column]
    private array $roles = [];

    /**
     * @var string The hashed password
     */
    #[ORM\Column]
    private string $password;

    #[ORM\Column(length: 255)]
    private string $phone;

    #[ORM\Column(length: 255)]
    private string $firstName;

    #[ORM\Column(length: 255)]
    private string $lastName;

    #[ORM\Column(length: 255)]
    private string $address;

    /**
     * @return string
     */
    public function getFirstName(): string
    {
        return $this->firstName;
    }

    /**
     * @param string $firstName
     */
    public function setFirstName(string $firstName): void
    {
        $this->firstName = $firstName;
    }

    /**
     * @return string
     */
    public function getLastName(): string
    {
        return $this->lastName;
    }

    /**
     * @param string $lastName
     */
    public function setLastName(string $lastName): void
    {
        $this->lastName = $lastName;
    }

    #[ORM\Column]
    private bool $isBanned;

    #[ORM\Column(type: Types::ARRAY, nullable: true)]
    private ?array $cv = [];

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $cin = null;

    #[ORM\Column(type: Types::ARRAY, nullable: true)]
    private array $workPlace = [];

    #[ORM\Column(type: Types::ARRAY, nullable: true)]
    private array $club = [];

    #[ORM\Column(nullable: true)]
    private ?float $score = null;

    #[ORM\OneToMany(mappedBy: 'user', targetEntity: ParticipateToCompetition::class)]
    private Collection $participateToCompetitions;

    #[ORM\OneToMany(mappedBy: 'user', targetEntity: TrainingTrainer::class, fetch: 'EAGER')]
    private Collection $trainingTrainers;

    #[ORM\OneToMany(mappedBy: 'user', targetEntity: ParticipateToTrainingSession::class)]
    private Collection $participateToTrainingSessions;

    #[ORM\Column(type: 'boolean')]
    private $isVerified = false;

    #[ORM\Column]
    private ?bool $isApproved = null;

    public function __construct()
    {
        $this->participateToCompetitions = new ArrayCollection();
        $this->trainingTrainers = new ArrayCollection();
        $this->participateToTrainingSessions = new ArrayCollection();
    }

    public function __toString(): string
    {
        return $this->getFullName();
    }

    public function getFullName(): string
    {
        return $this->firstName . ' ' . $this->lastName;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    public function getPhone(): ?string
    {
        return $this->phone;
    }

    public function setPhone(string $phone): self
    {
        $this->phone = $phone;

        return $this;
    }

    public function getAddress(): ?string
    {
        return $this->address;
    }

    public function setAddress(string $address): self
    {
        $this->address = $address;

        return $this;
    }

    public function getIsBanned(): ?bool
    {
        return $this->isBanned;
    }

    public function setIsBanned(bool $isBanned): self
    {
        $this->isBanned = $isBanned;

        return $this;
    }

    public function getCv(): array
    {
        return $this->cv;
    }

    public function setCv(?array $cv): self
    {
        $this->cv = $cv;

        return $this;
    }

    public function getCin(): ?string
    {
        return $this->cin;
    }

    public function setCin(?string $cin): self
    {
        $this->cin = $cin;

        return $this;
    }

    public function getWorkPlace(): array
    {
        return $this->workPlace;
    }

    public function setWorkPlace(?array $workPlace): self
    {
        $this->workPlace = $workPlace;

        return $this;
    }

    public function getClub(): array
    {
        return $this->club;
    }

    public function setClub(?array $club): self
    {
        $this->club = $club;

        return $this;
    }

    public function getScore(): ?int
    {
        return $this->score;
    }

    public function setScore(?int $score): self
    {
        $this->score = $score;

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
            $participateToCompetition->setUser($this);
        }

        return $this;
    }

    public function removeParticipateToCompetition(ParticipateToCompetition $participateToCompetition): self
    {
        if ($this->participateToCompetitions->removeElement($participateToCompetition)) {
            // set the owning side to null (unless already changed)
            if ($participateToCompetition->getUser() === $this) {
                $participateToCompetition->setUser(null);
            }
        }

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
            $trainingTrainer->setUser($this);
        }

        return $this;
    }

    public function removeTrainingTrainer(TrainingTrainer $trainingTrainer): self
    {
        if ($this->trainingTrainers->removeElement($trainingTrainer)) {
            // set the owning side to null (unless already changed)
            if ($trainingTrainer->getUser() === $this) {
                $trainingTrainer->setUser(null);
            }
        }

        return $this;
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
            $participateToTrainingSession->setUser($this);
        }

        return $this;
    }

    public function removeParticipateToTrainingSession(ParticipateToTrainingSession $participateToTrainingSession): self
    {
        if ($this->participateToTrainingSessions->removeElement($participateToTrainingSession)) {
            // set the owning side to null (unless already changed)
            if ($participateToTrainingSession->getUser() === $this) {
                $participateToTrainingSession->setUser(null);
            }
        }

        return $this;
    }

    public function isVerified(): bool
    {
        return $this->isVerified;
    }

    public function setIsVerified(bool $isVerified): self
    {
        $this->isVerified = $isVerified;

        return $this;
    }
    // $2y$13$V/HneYV7lvDuiQ0YczkTpezf/rHgzCc8VlNZsISuOPfgmNVk4quvq

    public function isIsApproved(): ?bool
    {
        return $this->isApproved;
    }

    public function setIsApproved(bool $isApproved): self
    {
        $this->isApproved = $isApproved;

        return $this;
    }
}
