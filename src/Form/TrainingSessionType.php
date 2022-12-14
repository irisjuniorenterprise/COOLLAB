<?php

namespace App\Form;

use App\Entity\TrainingSession;
use App\Entity\TrainingTrainer;
use App\Entity\User;
use App\Repository\UserRepository;
use EasyCorp\Bundle\EasyAdminBundle\Form\Type\FileUploadType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\SearchType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\File;

class TrainingSessionType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name', null, [
                'label' => 'Nom de la session',
                'attr' => [
                    'required' => true,
                    'style' => 'width: 100%; margin: 8px 0; box-sizing: border-box; border: 1px solid blue; border-radius: 4px; font-size: 16px; padding: 10px 20px 10px 15px;',
                    'placeholder' => 'Tapez le nom de la session',
                ],
            ])
            ->add('description', TextareaType::class, [
                'label' => 'Description de la session',
                'attr' => [
                    'required' => true,
                    'style' => 'width: 100%; margin: 8px 0; box-sizing: border-box; border: 1px solid blue; border-radius: 4px; font-size: 16px; padding: 10px 20px 10px 15px;',
                    'placeholder' => 'Tapez la description de la session',
                ],
            ])
            ->add('place', null, [
                'label' => 'Lieu de la session',
                'attr' => [
                    'required' => true,
                    'style' => 'width: 100%; margin: 8px 0; box-sizing: border-box; border: 1px solid blue; border-radius: 4px; font-size: 16px; padding: 10px 20px 10px 15px;',
                    'placeholder' => 'Tapez le lieu de la session',
                ],
            ])
            ->add('startDate', DateTimeType::class, [
                'label' => 'Date de début de la session',

                'widget' => 'single_text',
                'attr' => [
                    'required' => true,
                    'style' => 'width: 100%; margin: 8px 0; box-sizing: border-box; border: 1px solid blue; border-radius: 4px; font-size: 16px; padding: 10px 20px 10px 15px;',
                    'placeholder' => 'Tapez la date de début de la session',
                ],
            ])
            ->add('endDate', DateTimeType::class, [
                'label' => 'Date de fin de la session',
                'widget' => 'single_text',
                'attr' => [
                    'required' => true,
                    'style' => 'width: 100%; margin: 8px 0; box-sizing: border-box; border: 1px solid blue; border-radius: 4px; font-size: 16px; padding: 10px 20px 10px 15px;',
                    'placeholder' => 'Tapez la date de fin de la session',
                ],
            ])
            ->add('link', null, [
                'label' => 'Lien de la session',
                'attr' => [
                    'required' => false,
                    'style' => 'width: 100%; margin: 8px 0; box-sizing: border-box; border: 1px solid blue; border-radius: 4px; font-size: 16px; padding: 10px 20px 10px 15px;',
                    'placeholder' => 'Tapez le lien de la session',
                ],
            ])
            ->add('linkForm', null, [
                'label' => 'Lien du formulaire de la session',
                'attr' => [
                    'required' => false,
                    'style' => 'width: 100%; margin: 8px 0; box-sizing: border-box; border: 1px solid blue; border-radius: 4px; font-size: 16px; padding: 10px 20px 10px 15px;',
                    'placeholder' => 'Tapez le lien du formulaire de la session',
                ],
            ])
            ->add('price', null, [
                'label' => 'Prix de la session',
                'attr' => [
                    'required' => true,
                    'style' => 'width: 100%; margin: 8px 0; box-sizing: border-box; border: 1px solid blue; border-radius: 4px; font-size: 16px; padding: 10px 20px 10px 15px;',
                    'placeholder' => 'Tapez le prix de la session',
                ],
            ])
            ->add('requirement', null, [
                'label' => 'Prérequis de la session',
                'attr' => [
                    'required' => true,
                    'style' => 'width: 100%; margin: 8px 0; box-sizing: border-box; border: 1px solid blue; border-radius: 4px; font-size: 16px; padding: 10px 20px 10px 15px;',
                    'placeholder' => 'Tapez les prérequis de la session',
                ],
            ])
            ->add('category', null, [
                'label' => 'Catégorie de la session',
                'attr' => [
                    'required' => true,
                    'style' => 'width: 100%; margin: 8px 0; box-sizing: border-box; border: 1px solid blue; border-radius: 4px; font-size: 16px; padding: 10px 20px 10px 15px;',
                    'placeholder' => 'Tapez la catégorie de la session',
                ],
            ]);
            /*->add('trainingTrainers', EntityType::class, [
                'class' => User::class,
                'expanded' => false,
                'multiple' => false,
                'mapped' => false,
                'query_builder' => function (UserRepository $userRepository) {
                    return $userRepository->createQueryBuilder('u')
                        ->where('u.roles LIKE :role')
                        ->setParameter('role', '%"ROLE_TRAINER"%');
                },
                'choice_label' => 'fullName',
                'label' => 'Formateur de la session',
                'attr' => [
                    'required' => true,
                    'style' => 'width: 100%; margin: 8px 0; box-sizing: border-box; border: 1px solid blue; border-radius: 4px; font-size: 16px; padding: 10px 20px 10px 15px;',
                ],
            ])*/

    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => TrainingSession::class,
        ]);
    }
}
