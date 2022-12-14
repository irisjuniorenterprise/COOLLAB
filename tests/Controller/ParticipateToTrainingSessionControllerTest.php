<?php

namespace App\Test\Controller;

use App\Entity\ParticipateToTrainingSession;
use App\Repository\ParticipateToTrainingSessionRepository;
use Symfony\Bundle\FrameworkBundle\KernelBrowser;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class ParticipateToTrainingSessionControllerTest extends WebTestCase
{
    private KernelBrowser $client;
    private ParticipateToTrainingSessionRepository $repository;
    private string $path = '/participate/to/training/session/';

    protected function setUp(): void
    {
        $this->client = static::createClient();
        $this->repository = static::getContainer()->get('doctrine')->getRepository(ParticipateToTrainingSession::class);

        foreach ($this->repository->findAll() as $object) {
            $this->repository->remove($object, true);
        }
    }

    public function testIndex(): void
    {
        $crawler = $this->client->request('GET', $this->path);

        self::assertResponseStatusCodeSame(200);
        self::assertPageTitleContains('ParticipateToTrainingSession index');

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
            'participate_to_training_session[isPresent]' => 'Testing',
            'participate_to_training_session[comment]' => 'Testing',
            'participate_to_training_session[rate]' => 'Testing',
            'participate_to_training_session[participatedAt]' => 'Testing',
            'participate_to_training_session[commentedAt]' => 'Testing',
            'participate_to_training_session[isCached]' => 'Testing',
            'participate_to_training_session[user]' => 'Testing',
            'participate_to_training_session[trainingSession]' => 'Testing',
        ]);

        self::assertResponseRedirects('/participate/to/training/session/');

        self::assertSame($originalNumObjectsInRepository + 1, count($this->repository->findAll()));
    }

    public function testShow(): void
    {
        $this->markTestIncomplete();
        $fixture = new ParticipateToTrainingSession();
        $fixture->setIsPresent('My Title');
        $fixture->setComment('My Title');
        $fixture->setRate('My Title');
        $fixture->setParticipatedAt('My Title');
        $fixture->setCommentedAt('My Title');
        $fixture->setIsCached('My Title');
        $fixture->setUser('My Title');
        $fixture->setTrainingSession('My Title');

        $this->repository->add($fixture, true);

        $this->client->request('GET', sprintf('%s%s', $this->path, $fixture->getId()));

        self::assertResponseStatusCodeSame(200);
        self::assertPageTitleContains('ParticipateToTrainingSession');

        // Use assertions to check that the properties are properly displayed.
    }

    public function testEdit(): void
    {
        $this->markTestIncomplete();
        $fixture = new ParticipateToTrainingSession();
        $fixture->setIsPresent('My Title');
        $fixture->setComment('My Title');
        $fixture->setRate('My Title');
        $fixture->setParticipatedAt('My Title');
        $fixture->setCommentedAt('My Title');
        $fixture->setIsCached('My Title');
        $fixture->setUser('My Title');
        $fixture->setTrainingSession('My Title');

        $this->repository->add($fixture, true);

        $this->client->request('GET', sprintf('%s%s/edit', $this->path, $fixture->getId()));

        $this->client->submitForm('Update', [
            'participate_to_training_session[isPresent]' => 'Something New',
            'participate_to_training_session[comment]' => 'Something New',
            'participate_to_training_session[rate]' => 'Something New',
            'participate_to_training_session[participatedAt]' => 'Something New',
            'participate_to_training_session[commentedAt]' => 'Something New',
            'participate_to_training_session[isCached]' => 'Something New',
            'participate_to_training_session[user]' => 'Something New',
            'participate_to_training_session[trainingSession]' => 'Something New',
        ]);

        self::assertResponseRedirects('/participate/to/training/session/');

        $fixture = $this->repository->findAll();

        self::assertSame('Something New', $fixture[0]->getIsPresent());
        self::assertSame('Something New', $fixture[0]->getComment());
        self::assertSame('Something New', $fixture[0]->getRate());
        self::assertSame('Something New', $fixture[0]->getParticipatedAt());
        self::assertSame('Something New', $fixture[0]->getCommentedAt());
        self::assertSame('Something New', $fixture[0]->getIsCached());
        self::assertSame('Something New', $fixture[0]->getUser());
        self::assertSame('Something New', $fixture[0]->getTrainingSession());
    }

    public function testRemove(): void
    {
        $this->markTestIncomplete();

        $originalNumObjectsInRepository = count($this->repository->findAll());

        $fixture = new ParticipateToTrainingSession();
        $fixture->setIsPresent('My Title');
        $fixture->setComment('My Title');
        $fixture->setRate('My Title');
        $fixture->setParticipatedAt('My Title');
        $fixture->setCommentedAt('My Title');
        $fixture->setIsCached('My Title');
        $fixture->setUser('My Title');
        $fixture->setTrainingSession('My Title');

        $this->repository->add($fixture, true);

        self::assertSame($originalNumObjectsInRepository + 1, count($this->repository->findAll()));

        $this->client->request('GET', sprintf('%s%s', $this->path, $fixture->getId()));
        $this->client->submitForm('Delete');

        self::assertSame($originalNumObjectsInRepository, count($this->repository->findAll()));
        self::assertResponseRedirects('/participate/to/training/session/');
    }
}
