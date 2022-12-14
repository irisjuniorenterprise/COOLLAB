<?php

namespace App\Form;

use App\Entity\ParticipateToTrainingSession;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ParticipateToTrainingSessionType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('isPresent')
            ->add('comment')
            ->add('rate')
            ->add('participatedAt')
            ->add('commentedAt')
            ->add('isCached')
            ->add('user')
            ->add('trainingSession')
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => ParticipateToTrainingSession::class,
        ]);
    }
}
