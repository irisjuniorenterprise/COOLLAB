<?php

namespace App\Test\Controller;

use App\Entity\ParticipateToCompetition;
use App\Repository\ParticipateToCompetitionRepository;
use Symfony\Bundle\FrameworkBundle\KernelBrowser;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class ParticipateToCompetitionControllerTest extends WebTestCase
{
    private KernelBrowser $client;
    private ParticipateToCompetitionRepository $repository;
    private string $path = '/participate/to/competition/';

    protected function setUp(): void
    {
        $this->client = static::createClient();
        $this->repository = static::getContainer()->get('doctrine')->getRepository(ParticipateToCompetition::class);

        foreach ($this->repository->findAll() as $object) {
            $this->repository->remove($object, true);
        }
    }

    public function testIndex(): void
    {
        $crawler = $this->client->request('GET', $this->path);

        self::assertResponseStatusCodeSame(200);
        self::assertPageTitleContains('ParticipateToCompetition index');

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
            'participate_to_competition[isPresent]' => 'Testing',
            'participate_to_competition[participatedAt]' => 'Testing',
            'participate_to_competition[classification]' => 'Testing',
            'participate_to_competition[prize]' => 'Testing',
            'participate_to_competition[competition]' => 'Testing',
            'participate_to_competition[user]' => 'Testing',
        ]);

        self::assertResponseRedirects('/participate/to/competition/');

        self::assertSame($originalNumObjectsInRepository + 1, count($this->repository->findAll()));
    }

    public function testShow(): void
    {
        $this->markTestIncomplete();
        $fixture = new ParticipateToCompetition();
        $fixture->setIsPresent('My Title');
        $fixture->setParticipatedAt('My Title');
        $fixture->setClassification('My Title');
        $fixture->setPrize('My Title');
        $fixture->setCompetition('My Title');
        $fixture->setUser('My Title');

        $this->repository->add($fixture, true);

        $this->client->request('GET', sprintf('%s%s', $this->path, $fixture->getId()));

        self::assertResponseStatusCodeSame(200);
        self::assertPageTitleContains('ParticipateToCompetition');

        // Use assertions to check that the properties are properly displayed.
    }

    public function testEdit(): void
    {
        $this->markTestIncomplete();
        $fixture = new ParticipateToCompetition();
        $fixture->setIsPresent('My Title');
        $fixture->setParticipatedAt('My Title');
        $fixture->setClassification('My Title');
        $fixture->setPrize('My Title');
        $fixture->setCompetition('My Title');
        $fixture->setUser('My Title');

        $this->repository->add($fixture, true);

        $this->client->request('GET', sprintf('%s%s/edit', $this->path, $fixture->getId()));

        $this->client->submitForm('Update', [
            'participate_to_competition[isPresent]' => 'Something New',
            'participate_to_competition[participatedAt]' => 'Something New',
            'participate_to_competition[classification]' => 'Something New',
            'participate_to_competition[prize]' => 'Something New',
            'participate_to_competition[competition]' => 'Something New',
            'participate_to_competition[user]' => 'Something New',
        ]);

        self::assertResponseRedirects('/participate/to/competition/');

        $fixture = $this->repository->findAll();

        self::assertSame('Something New', $fixture[0]->getIsPresent());
        self::assertSame('Something New', $fixture[0]->getParticipatedAt());
        self::assertSame('Something New', $fixture[0]->getClassification());
        self::assertSame('Something New', $fixture[0]->getPrize());
        self::assertSame('Something New', $fixture[0]->getCompetition());
        self::assertSame('Something New', $fixture[0]->getUser());
    }

    public function testRemove(): void
    {
        $this->markTestIncomplete();

        $originalNumObjectsInRepository = count($this->repository->findAll());

        $fixture = new ParticipateToCompetition();
        $fixture->setIsPresent('My Title');
        $fixture->setParticipatedAt('My Title');
        $fixture->setClassification('My Title');
        $fixture->setPrize('My Title');
        $fixture->setCompetition('My Title');
        $fixture->setUser('My Title');

        $this->repository->add($fixture, true);

        self::assertSame($originalNumObjectsInRepository + 1, count($this->repository->findAll()));

        $this->client->request('GET', sprintf('%s%s', $this->path, $fixture->getId()));
        $this->client->submitForm('Delete');

        self::assertSame($originalNumObjectsInRepository, count($this->repository->findAll()));
        self::assertResponseRedirects('/participate/to/competition/');
    }
}
