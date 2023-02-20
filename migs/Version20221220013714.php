<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221220013714 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE comment (id INT AUTO_INCREMENT NOT NULL, participate_to_training_session_id INT DEFAULT NULL, content LONGTEXT NOT NULL, commented_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', is_cached TINYINT(1) NOT NULL, INDEX IDX_9474526C189D3899 (participate_to_training_session_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE comment ADD CONSTRAINT FK_9474526C189D3899 FOREIGN KEY (participate_to_training_session_id) REFERENCES participate_to_training_session (id)');
        $this->addSql('ALTER TABLE participate_to_training_session DROP comment, DROP commented_at');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE comment DROP FOREIGN KEY FK_9474526C189D3899');
        $this->addSql('DROP TABLE comment');
        $this->addSql('ALTER TABLE participate_to_training_session ADD comment LONGTEXT DEFAULT NULL, ADD commented_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\'');
    }
}
