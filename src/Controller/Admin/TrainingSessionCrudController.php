<?php

namespace App\Controller\Admin;

use App\Entity\TrainingSession;
use App\Form\TrainingImageType;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\CollectionField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\MoneyField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Form\Type\FileUploadType;

class TrainingSessionCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return TrainingSession::class;
    }


    public function configureFields(string $pageName): iterable
    {
        yield IdField::new('id')
            ->hideOnForm();
        yield TextField::new('name');
        yield AssociationField::new('category')
            ->autocomplete()
            ->setCrudController(CategoryCrudController::class);
        yield AssociationField::new('trainingTrainers')
            ->autocomplete()
            ->setCrudController(UserCrudController::class);
        yield TextField::new('description');
        yield TextField::new('place')->hideOnIndex();
        yield DateField::new('startDate');
        yield DateField::new('endDate')->hideOnIndex();
        yield booleanField::new('isApproved')
            ->renderAsSwitch(false);
        yield TextField::new('link')->hideOnIndex();
        yield CollectionField::new('file')
            ->onlyOnForms()
            ->renderExpanded(true)
            ->setEntryType(FileUploadType::class);
        yield ImageField::new('file')
            ->setBasePath('uploads/files')
            ->setUploadDir('uploads/files')
            ->OnlyOnDetail();
        yield TextField::new('linkForm')->hideOnIndex();
        yield booleanField::new('isCanceled')
            ->hideOnIndex()
            ->renderAsSwitch(false);
        yield MoneyField::new('price')->setCurrency('TND')->setNumDecimals(2)->setStoredAsCents(false);
        yield IntegerField::new('rate')->hideOnIndex();
        yield TextareaField::new('requirement')->hideOnIndex();
    }

    public function configureActions(Actions $actions): Actions
    {
        return parent::configureActions($actions)
            ->add(Crud::PAGE_INDEX, Action::DETAIL);
    }


}
