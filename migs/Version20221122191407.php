<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221122191407 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE competition ADD thumbnail VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE training_session ADD thumbnail VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE training_trainer CHANGE payed_at payed_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\'');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE competition DROP thumbnail');
        $this->addSql('ALTER TABLE training_trainer CHANGE payed_at payed_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\'');
        $this->addSql('ALTER TABLE training_session DROP thumbnail');
    }
}
