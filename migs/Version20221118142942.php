<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221118142942 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE image (id INT AUTO_INCREMENT NOT NULL, competition_id INT NOT NULL, training_session_id INT NOT NULL, image_name VARCHAR(255) NOT NULL, INDEX IDX_C53D045F7B39D312 (competition_id), INDEX IDX_C53D045FDB8156B9 (training_session_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE image ADD CONSTRAINT FK_C53D045F7B39D312 FOREIGN KEY (competition_id) REFERENCES competition (id)');
        $this->addSql('ALTER TABLE image ADD CONSTRAINT FK_C53D045FDB8156B9 FOREIGN KEY (training_session_id) REFERENCES training_session (id)');
        $this->addSql('ALTER TABLE training_session CHANGE category_id category_id INT NOT NULL');
        $this->addSql('ALTER TABLE training_trainer CHANGE payed_at payed_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\'');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE image DROP FOREIGN KEY FK_C53D045F7B39D312');
        $this->addSql('ALTER TABLE image DROP FOREIGN KEY FK_C53D045FDB8156B9');
        $this->addSql('DROP TABLE image');
        $this->addSql('ALTER TABLE training_trainer CHANGE payed_at payed_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\'');
        $this->addSql('ALTER TABLE training_session CHANGE category_id category_id INT DEFAULT NULL');
    }
}
