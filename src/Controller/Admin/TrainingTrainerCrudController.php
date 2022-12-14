<?php

namespace App\Controller\Admin;

use App\Entity\TrainingTrainer;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class TrainingTrainerCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return TrainingTrainer::class;
    }


    public function configureFields(string $pageName): iterable
    {
        yield IdField::new('id')
            ->hideOnForm();
        yield AssociationField::new('user');
        yield AssociationField::new('trainingSession');
        yield BooleanField::new('requestedBy')->renderAsSwitch(false);
        yield BooleanField::new('isTrainerPayed')->renderAsSwitch(false);
        yield IntegerField::new('trainerPayment');
    }

}
