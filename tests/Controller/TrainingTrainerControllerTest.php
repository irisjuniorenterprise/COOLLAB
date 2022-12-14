<?php

namespace App\Test\Controller;

use App\Entity\TrainingTrainer;
use App\Repository\TrainingTrainerRepository;
use Symfony\Bundle\FrameworkBundle\KernelBrowser;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class TrainingTrainerControllerTest extends WebTestCase
{
    private KernelBrowser $client;
    private TrainingTrainerRepository $repository;
    private string $path = '/training/trainer/';

    protected function setUp(): void
    {
        $this->client = static::createClient();
        $this->repository = static::getContainer()->get('doctrine')->getRepository(TrainingTrainer::class);

        foreach ($this->repository->findAll() as $object) {
            $this->repository->remove($object, true);
        }
    }

    public function testIndex(): void
    {
        $crawler = $this->client->request('GET', $this->path);

        self::assertResponseStatusCodeSame(200);
        self::assertPageTitleContains('TrainingTrainer index');

        // Use the $crawler to perform additional assertions e.g.
        // self::assertSame('Some text on the page', $crawler->filter('.p')->first());
    }

    public function testNew(): void
    {
        $originalNumObjectsInRepository = count($this->repository->findAll());

        $this->markTestIncomplete();
        $this->client->request('GET', sprintf('%snew', $this->path));

        self::assertResponseStatusCodeSame(200);

        $this->client->submitForm('Save', [
            'training_trainer[requestedBy]' => 'Testing',
            'training_trainer[requestedAt]' => 'Testing',
            'training_trainer[isTrainerPayed]' => 'Testing',
            'training_trainer[trainerPayment]' => 'Testing',
            'training_trainer[payedAt]' => 'Testing',
            'training_trainer[user]' => 'Testing',
            'training_trainer[trainingSession]' => 'Testing',
        ]);

        self::assertResponseRedirects('/training/trainer/');

        self::assertSame($originalNumObjectsInRepository + 1, count($this->repository->findAll()));
    }

    public function testShow(): void
    {
        $this->markTestIncomplete();
        $fixture = new TrainingTrainer();
        $fixture->setRequestedBy('My Title');
        $fixture->setRequestedAt('My Title');
        $fixture->setIsTrainerPayed('My Title');
        $fixture->setTrainerPayment('My Title');
        $fixture->setPayedAt('My Title');
        $fixture->setUser('My Title');
        $fixture->setTrainingSession('My Title');

        $this->repository->add($fixture, true);

        $this->client->request('GET', sprintf('%s%s', $this->path, $fixture->getId()));

        self::assertResponseStatusCodeSame(200);
        self::assertPageTitleContains('TrainingTrainer');

        // Use assertions to check that the properties are properly displayed.
    }

    public function testEdit(): void
    {
        $this->markTestIncomplete();
        $fixture = new TrainingTrainer();
        $fixture->setRequestedBy('My Title');
        $fixture->setRequestedAt('My Title');
        $fixture->setIsTrainerPayed('My Title');
        $fixture->setTrainerPayment('My Title');
        $fixture->setPayedAt('My Title');
        $fixture->setUser('My Title');
        $fixture->setTrainingSession('My Title');

        $this->repository->add($fixture, true);

        $this->client->request('GET', sprintf('%s%s/edit', $this->path, $fixture->getId()));

        $this->client->submitForm('Update', [
            'training_trainer[requestedBy]' => 'Something New',
            'training_trainer[requestedAt]' => 'Something New',
            'training_trainer[isTrainerPayed]' => 'Something New',
            'training_trainer[trainerPayment]' => 'Something New',
            'training_trainer[payedAt]' => 'Something New',
            'training_trainer[user]' => 'Something New',
            'training_trainer[trainingSession]' => 'Something New',
        ]);

        self::assertResponseRedirects('/training/trainer/');

        $fixture = $this->repository->findAll();

        self::assertSame('Something New', $fixture[0]->getRequestedBy());
        self::assertSame('Something New', $fixture[0]->getRequestedAt());
        self::assertSame('Something New', $fixture[0]->getIsTrainerPayed());
        self::assertSame('Something New', $fixture[0]->getTrainerPayment());
        self::assertSame('Something New', $fixture[0]->getPayedAt());
        self::assertSame('Something New', $fixture[0]->getUser());
        self::assertSame('Something New', $fixture[0]->getTrainingSession());
    }

    public function testRemove(): void
    {
        $this->markTestIncomplete();

        $originalNumObjectsInRepository = count($this->repository->findAll());

        $fixture = new TrainingTrainer();
        $fixture->setRequestedBy('My Title');
        $fixture->setRequestedAt('My Title');
        $fixture->setIsTrainerPayed('My Title');
        $fixture->setTrainerPayment('My Title');
        $fixture->setPayedAt('My Title');
        $fixture->setUser('My Title');
        $fixture->setTrainingSession('My Title');

        $this->repository->add($fixture, true);

        self::assertSame($originalNumObjectsInRepository + 1, count($this->repository->findAll()));

        $this->client->request('GET', sprintf('%s%s', $this->path, $fixture->getId()));
        $this->client->submitForm('Delete');

        self::assertSame($originalNumObjectsInRepository, count($this->repository->findAll()));
        self::assertResponseRedirects('/training/trainer/');
    }
}
