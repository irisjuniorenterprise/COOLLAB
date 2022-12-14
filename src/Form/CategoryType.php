<?php

namespace App\Form;

use App\Entity\Category;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class CategoryType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name', null, [
                'label' => 'Nom du categorie',
                'attr' => [
                    'required' => true,
                    'style' => 'width: 100%; margin: 8px 0; box-sizing: border-box; border: 1px solid blue; border-radius: 4px; font-size: 16px; padding: 10px 20px 10px 15px;',
                    'placeholder' => 'Tapez le nom du categorie',
                ],
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Category::class,
        ]);
    }
}
