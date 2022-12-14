<?php

namespace App\Test\Controller;

use App\Entity\Competition;
use App\Repository\CompetitionRepository;
use Symfony\Bundle\FrameworkBundle\KernelBrowser;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class CompetitionControllerTest extends WebTestCase
{
    private KernelBrowser $client;
    private CompetitionRepository $repository;
    private string $path = '/competition/';

    protected function setUp(): void
    {
        $this->client = static::createClient();
        $this->repository = static::getContainer()->get('doctrine')->getRepository(Competition::class);

        foreach ($this->repository->findAll() as $object) {
            $this->repository->remove($object, true);
        }
    }

    public function testIndex(): void
    {
        $crawler = $this->client->request('GET', $this->path);

        self::assertResponseStatusCodeSame(200);
        self::assertPageTitleContains('Competition index');

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
            'competition[name]' => 'Testing',
            'competition[description]' => 'Testing',
            'competition[place]' => 'Testing',
            'competition[startDate]' => 'Testing',
            'competition[endDate]' => 'Testing',
            'competition[file]' => 'Testing',
            'competition[isCanceled]' => 'Testing',
            'competition[price]' => 'Testing',
            'competition[guest]' => 'Testing',
        ]);

        self::assertResponseRedirects('/competition/');

        self::assertSame($originalNumObjectsInRepository + 1, count($this->repository->findAll()));
    }

    public function testShow(): void
    {
        $this->markTestIncomplete();
        $fixture = new Competition();
        $fixture->setName('My Title');
        $fixture->setDescription('My Title');
        $fixture->setPlace('My Title');
        $fixture->setStartDate('My Title');
        $fixture->setEndDate('My Title');
        $fixture->setFile('My Title');
        $fixture->setIsCanceled('My Title');
        $fixture->setPrice('My Title');
        $fixture->setGuest('My Title');

        $this->repository->add($fixture, true);

        $this->client->request('GET', sprintf('%s%s', $this->path, $fixture->getId()));

        self::assertResponseStatusCodeSame(200);
        self::assertPageTitleContains('Competition');

        // Use assertions to check that the properties are properly displayed.
    }

    public function testEdit(): void
    {
        $this->markTestIncomplete();
        $fixture = new Competition();
        $fixture->setName('My Title');
        $fixture->setDescription('My Title');
        $fixture->setPlace('My Title');
        $fixture->setStartDate('My Title');
        $fixture->setEndDate('My Title');
        $fixture->setFile('My Title');
        $fixture->setIsCanceled('My Title');
        $fixture->setPrice('My Title');
        $fixture->setGuest('My Title');

        $this->repository->add($fixture, true);

        $this->client->request('GET', sprintf('%s%s/edit', $this->path, $fixture->getId()));

        $this->client->submitForm('Update', [
            'competition[name]' => 'Something New',
            'competition[description]' => 'Something New',
            'competition[place]' => 'Something New',
            'competition[startDate]' => 'Something New',
            'competition[endDate]' => 'Something New',
            'competition[file]' => 'Something New',
            'competition[isCanceled]' => 'Something New',
            'competition[price]' => 'Something New',
            'competition[guest]' => 'Something New',
        ]);

        self::assertResponseRedirects('/competition/');

        $fixture = $this->repository->findAll();

        self::assertSame('Something New', $fixture[0]->getName());
        self::assertSame('Something New', $fixture[0]->getDescription());
        self::assertSame('Something New', $fixture[0]->getPlace());
        self::assertSame('Something New', $fixture[0]->getStartDate());
        self::assertSame('Something New', $fixture[0]->getEndDate());
        self::assertSame('Something New', $fixture[0]->getFile());
        self::assertSame('Something New', $fixture[0]->getIsCanceled());
        self::assertSame('Something New', $fixture[0]->getPrice());
        self::assertSame('Something New', $fixture[0]->getGuest());
    }

    public function testRemove(): void
    {
        $this->markTestIncomplete();

        $originalNumObjectsInRepository = count($this->repository->findAll());

        $fixture = new Competition();
        $fixture->setName('My Title');
        $fixture->setDescription('My Title');
        $fixture->setPlace('My Title');
        $fixture->setStartDate('My Title');
        $fixture->setEndDate('My Title');
        $fixture->setFile('My Title');
        $fixture->setIsCanceled('My Title');
        $fixture->setPrice('My Title');
        $fixture->setGuest('My Title');

        $this->repository->add($fixture, true);

        self::assertSame($originalNumObjectsInRepository + 1, count($this->repository->findAll()));

        $this->client->request('GET', sprintf('%s%s', $this->path, $fixture->getId()));
        $this->client->submitForm('Delete');

        self::assertSame($originalNumObjectsInRepository, count($this->repository->findAll()));
        self::assertResponseRedirects('/competition/');
    }
}
