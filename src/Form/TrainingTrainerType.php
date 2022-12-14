<?php

namespace App\Form;

use App\Entity\TrainingTrainer;
use App\Entity\User;
use App\Repository\UserRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class TrainingTrainerType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('trainerPayment', null, [
                'label' => 'Paiement du formateur',
                'attr' => [
                    'required' => true,
                    'style' => 'width: 100%; margin: 8px 0; box-sizing: border-box; border: 1px solid blue; border-radius: 4px; font-size: 16px; padding: 10px 20px 10px 15px;',
                    'placeholder' => 'Tapez le paiement du formateur',
                ],
            ])
            ->add('user',  EntityType::class, [
                'class' => User::class,
                'query_builder' => function (UserRepository $er) {
                    return $er->createQueryBuilder('u')
                        ->where('u.roles LIKE :role')
                        ->setParameter('role', '%ROLE_TRAINER%');
                },
                'label' => 'Utilisateur',
                'attr' => [
                    'required' => true,
                    'style' => 'width: 100%; margin: 8px 0; box-sizing: border-box; border: 1px solid blue; border-radius: 4px; font-size: 16px; padding: 10px 20px 10px 15px;',
                    'placeholder' => 'Tapez l\'utilisateur',
                ],
            ])
            ->add('trainingSession', null, [
                'label' => 'Session de formation',
                'attr' => [
                    'required' => true,
                    'style' => 'width: 100%; margin: 8px 0; box-sizing: border-box; border: 1px solid blue; border-radius: 4px; font-size: 16px; padding: 10px 20px 10px 15px;',
                    'placeholder' => 'Tapez la session de formation',
                ],
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => TrainingTrainer::class,
        ]);
    }
}
