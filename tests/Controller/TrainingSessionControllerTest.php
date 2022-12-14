<?php

namespace App\Test\Controller;

use App\Entity\TrainingSession;
use App\Repository\TrainingSessionRepository;
use Symfony\Bundle\FrameworkBundle\KernelBrowser;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class TrainingSessionControllerTest extends WebTestCase
{
    private KernelBrowser $client;
    private TrainingSessionRepository $repository;
    private string $path = '/training/session/';

    protected function setUp(): void
    {
        $this->client = static::createClient();
        $this->repository = static::getContainer()->get('doctrine')->getRepository(TrainingSession::class);

        foreach ($this->repository->findAll() as $object) {
            $this->repository->remove($object, true);
        }
    }

    public function testIndex(): void
    {
        $crawler = $this->client->request('GET', $this->path);

        self::assertResponseStatusCodeSame(200);
        self::assertPageTitleContains('TrainingSession index');

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
            'training_session[name]' => 'Testing',
            'training_session[description]' => 'Testing',
            'training_session[place]' => 'Testing',
            'training_session[startDate]' => 'Testing',
            'training_session[endDate]' => 'Testing',
            'training_session[isApproved]' => 'Testing',
            'training_session[link]' => 'Testing',
            'training_session[file]' => 'Testing',
            'training_session[linkForm]' => 'Testing',
            'training_session[isCanceled]' => 'Testing',
            'training_session[price]' => 'Testing',
            'training_session[rate]' => 'Testing',
            'training_session[requirement]' => 'Testing',
            'training_session[category]' => 'Testing',
        ]);

        self::assertResponseRedirects('/training/session/');

        self::assertSame($originalNumObjectsInRepository + 1, count($this->repository->findAll()));
    }

    public function testShow(): void
    {
        $this->markTestIncomplete();
        $fixture = new TrainingSession();
        $fixture->setName('My Title');
        $fixture->setDescription('My Title');
        $fixture->setPlace('My Title');
        $fixture->setStartDate('My Title');
        $fixture->setEndDate('My Title');
        $fixture->setIsApproved('My Title');
        $fixture->setLink('My Title');
        $fixture->setFile('My Title');
        $fixture->setLinkForm('My Title');
        $fixture->setIsCanceled('My Title');
        $fixture->setPrice('My Title');
        $fixture->setRate('My Title');
        $fixture->setRequirement('My Title');
        $fixture->setCategory('My Title');

        $this->repository->add($fixture, true);

        $this->client->request('GET', sprintf('%s%s', $this->path, $fixture->getId()));

        self::assertResponseStatusCodeSame(200);
        self::assertPageTitleContains('TrainingSession');

        // Use assertions to check that the properties are properly displayed.
    }

    public function testEdit(): void
    {
        $this->markTestIncomplete();
        $fixture = new TrainingSession();
        $fixture->setName('My Title');
        $fixture->setDescription('My Title');
        $fixture->setPlace('My Title');
        $fixture->setStartDate('My Title');
        $fixture->setEndDate('My Title');
        $fixture->setIsApproved('My Title');
        $fixture->setLink('My Title');
        $fixture->setFile('My Title');
        $fixture->setLinkForm('My Title');
        $fixture->setIsCanceled('My Title');
        $fixture->setPrice('My Title');
        $fixture->setRate('My Title');
        $fixture->setRequirement('My Title');
        $fixture->setCategory('My Title');

        $this->repository->add($fixture, true);

        $this->client->request('GET', sprintf('%s%s/edit', $this->path, $fixture->getId()));

        $this->client->submitForm('Update', [
            'training_session[name]' => 'Something New',
            'training_session[description]' => 'Something New',
            'training_session[place]' => 'Something New',
            'training_session[startDate]' => 'Something New',
            'training_session[endDate]' => 'Something New',
            'training_session[isApproved]' => 'Something New',
            'training_session[link]' => 'Something New',
            'training_session[file]' => 'Something New',
            'training_session[linkForm]' => 'Something New',
            'training_session[isCanceled]' => 'Something New',
            'training_session[price]' => 'Something New',
            'training_session[rate]' => 'Something New',
            'training_session[requirement]' => 'Something New',
            'training_session[category]' => 'Something New',
        ]);

        self::assertResponseRedirects('/training/session/');

        $fixture = $this->repository->findAll();

        self::assertSame('Something New', $fixture[0]->getName());
        self::assertSame('Something New', $fixture[0]->getDescription());
        self::assertSame('Something New', $fixture[0]->getPlace());
        self::assertSame('Something New', $fixture[0]->getStartDate());
        self::assertSame('Something New', $fixture[0]->getEndDate());
        self::assertSame('Something New', $fixture[0]->getIsApproved());
        self::assertSame('Something New', $fixture[0]->getLink());
        self::assertSame('Something New', $fixture[0]->getFile());
        self::assertSame('Something New', $fixture[0]->getLinkForm());
        self::assertSame('Something New', $fixture[0]->getIsCanceled());
        self::assertSame('Something New', $fixture[0]->getPrice());
        self::assertSame('Something New', $fixture[0]->getRate());
        self::assertSame('Something New', $fixture[0]->getRequirement());
        self::assertSame('Something New', $fixture[0]->getCategory());
    }

    public function testRemove(): void
    {
        $this->markTestIncomplete();

        $originalNumObjectsInRepository = count($this->repository->findAll());

        $fixture = new TrainingSession();
        $fixture->setName('My Title');
        $fixture->setDescription('My Title');
        $fixture->setPlace('My Title');
        $fixture->setStartDate('My Title');
        $fixture->setEndDate('My Title');
        $fixture->setIsApproved('My Title');
        $fixture->setLink('My Title');
        $fixture->setFile('My Title');
        $fixture->setLinkForm('My Title');
        $fixture->setIsCanceled('My Title');
        $fixture->setPrice('My Title');
        $fixture->setRate('My Title');
        $fixture->setRequirement('My Title');
        $fixture->setCategory('My Title');

        $this->repository->add($fixture, true);

        self::assertSame($originalNumObjectsInRepository + 1, count($this->repository->findAll()));

        $this->client->request('GET', sprintf('%s%s', $this->path, $fixture->getId()));
        $this->client->submitForm('Delete');

        self::assertSame($originalNumObjectsInRepository, count($this->repository->findAll()));
        self::assertResponseRedirects('/training/session/');
    }
}
