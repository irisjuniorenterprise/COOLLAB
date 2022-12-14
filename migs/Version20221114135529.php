<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221114135529 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE category (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE competition (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, description LONGTEXT NOT NULL, place VARCHAR(255) NOT NULL, start_date DATETIME NOT NULL, end_date DATETIME NOT NULL, file LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:array)\', is_canceled TINYINT(1) NOT NULL, price DOUBLE PRECISION NOT NULL, gest LONGTEXT NOT NULL COMMENT \'(DC2Type:array)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE participate_to_competition (id INT AUTO_INCREMENT NOT NULL, competition_id INT DEFAULT NULL, user_id INT DEFAULT NULL, is_present TINYINT(1) DEFAULT NULL, participated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', classification INT DEFAULT NULL, prize VARCHAR(255) DEFAULT NULL, INDEX IDX_F97DC8E7B39D312 (competition_id), INDEX IDX_F97DC8EA76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE participate_to_training_session (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, training_session_id INT NOT NULL, is_present TINYINT(1) DEFAULT NULL, comment LONGTEXT DEFAULT NULL, rate DOUBLE PRECISION DEFAULT NULL, participated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', commented_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', is_cached TINYINT(1) DEFAULT NULL, INDEX IDX_438C11BBA76ED395 (user_id), INDEX IDX_438C11BBDB8156B9 (training_session_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE partner (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', logo VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE training_session (id INT AUTO_INCREMENT NOT NULL, category_id INT NOT NULL, name VARCHAR(255) NOT NULL, description LONGTEXT NOT NULL, place VARCHAR(255) NOT NULL, start_date DATETIME NOT NULL, end_date DATETIME NOT NULL, is_approved TINYINT(1) NOT NULL, link LONGTEXT DEFAULT NULL, file LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:array)\', link_form VARCHAR(255) DEFAULT NULL, is_canceled TINYINT(1) NOT NULL, price DOUBLE PRECISION NOT NULL, rate DOUBLE PRECISION DEFAULT NULL, requirement LONGTEXT DEFAULT NULL, INDEX IDX_D7A45DA12469DE2 (category_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE training_trainer (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, training_session_id INT NOT NULL, requested_by TINYINT(1) NOT NULL, requested_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', is_trainer_payed TINYINT(1) NOT NULL, trainer_payment DOUBLE PRECISION NOT NULL, payed_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_182B982EA76ED395 (user_id), INDEX IDX_182B982EDB8156B9 (training_session_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE participate_to_competition ADD CONSTRAINT FK_F97DC8E7B39D312 FOREIGN KEY (competition_id) REFERENCES competition (id)');
        $this->addSql('ALTER TABLE participate_to_competition ADD CONSTRAINT FK_F97DC8EA76ED395 FOREIGN KEY (user_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE participate_to_training_session ADD CONSTRAINT FK_438C11BBA76ED395 FOREIGN KEY (user_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE participate_to_training_session ADD CONSTRAINT FK_438C11BBDB8156B9 FOREIGN KEY (training_session_id) REFERENCES training_session (id)');
        $this->addSql('ALTER TABLE training_session ADD CONSTRAINT FK_D7A45DA12469DE2 FOREIGN KEY (category_id) REFERENCES category (id)');
        $this->addSql('ALTER TABLE training_trainer ADD CONSTRAINT FK_182B982EA76ED395 FOREIGN KEY (user_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE training_trainer ADD CONSTRAINT FK_182B982EDB8156B9 FOREIGN KEY (training_session_id) REFERENCES training_session (id)');
        $this->addSql('ALTER TABLE user CHANGE score score DOUBLE PRECISION DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE participate_to_competition DROP FOREIGN KEY FK_F97DC8E7B39D312');
        $this->addSql('ALTER TABLE participate_to_competition DROP FOREIGN KEY FK_F97DC8EA76ED395');
        $this->addSql('ALTER TABLE participate_to_training_session DROP FOREIGN KEY FK_438C11BBA76ED395');
        $this->addSql('ALTER TABLE participate_to_training_session DROP FOREIGN KEY FK_438C11BBDB8156B9');
        $this->addSql('ALTER TABLE training_session DROP FOREIGN KEY FK_D7A45DA12469DE2');
        $this->addSql('ALTER TABLE training_trainer DROP FOREIGN KEY FK_182B982EA76ED395');
        $this->addSql('ALTER TABLE training_trainer DROP FOREIGN KEY FK_182B982EDB8156B9');
        $this->addSql('DROP TABLE category');
        $this->addSql('DROP TABLE competition');
        $this->addSql('DROP TABLE participate_to_competition');
        $this->addSql('DROP TABLE participate_to_training_session');
        $this->addSql('DROP TABLE partner');
        $this->addSql('DROP TABLE training_session');
        $this->addSql('DROP TABLE training_trainer');
        $this->addSql('ALTER TABLE `user` CHANGE score score INT DEFAULT NULL');
    }
}
