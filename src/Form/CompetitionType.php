<?php

namespace App\Form;

use App\Entity\Competition;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\File;

class CompetitionType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name', null, [
                'label' => 'Nom de la compétition',
                'attr' => [
                    'required' => true,
                    'style' => 'width: 100%; margin: 8px 0; box-sizing: border-box; border: 1px solid blue; border-radius: 4px; font-size: 16px; padding: 10px 20px 10px 15px;',
                    'placeholder' => 'Nom de la compétition',
                ],
            ])
            ->add('description', null, [
                'label' => 'Description de la compétition',
                'attr' => [
                    'required' => true,
                    'style' => 'width: 100%; margin: 8px 0; box-sizing: border-box; border: 1px solid blue; border-radius: 4px; font-size: 16px; padding: 10px 20px 10px 15px;',
                    'placeholder' => 'Description de la compétition',
                ],
            ])
            ->add('place', null, [
                'label' => 'Lieu de la compétition',
                'attr' => [
                    'required' => true,
                    'style' => 'width: 100%; margin: 8px 0; box-sizing: border-box; border: 1px solid blue; border-radius: 4px; font-size: 16px; padding: 10px 20px 10px 15px;',
                    'placeholder' => 'Lieu de la compétition',
                ],
            ])
            ->add('startDate', DateTimeType::class, [
                'label' => 'Date de début de la compétition',
                'widget' => 'single_text',
                'attr' => [
                    'required' => true,
                    'style' => 'width: 100%; margin: 8px 0; box-sizing: border-box; border: 1px solid blue; border-radius: 4px; font-size: 16px; padding: 10px 20px 10px 15px;',
                    'placeholder' => 'Date de début de la compétition',
                ],
            ])
            ->add('endDate', DateTimeType::class, [
                'label' => 'Date de fin de la compétition',
                'widget' => 'single_text',
                'attr' => [
                    'required' => true,
                    'style' => 'width: 100%; margin: 8px 0; box-sizing: border-box; border: 1px solid blue; border-radius: 4px; font-size: 16px; padding: 10px 20px 10px 15px;',
                    'placeholder' => 'Date de fin de la compétition',
                ],
            ])
            ->add('price', null, [
                'label' => 'Prix de la compétition',
                'attr' => [
                    'required' => true,
                    'style' => 'width: 100%; margin: 8px 0; box-sizing: border-box; border: 1px solid blue; border-radius: 4px; font-size: 16px; padding: 10px 20px 10px 15px;',
                    'placeholder' => 'Prix de la compétition',
                ],
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Competition::class,
        ]);
    }
}
