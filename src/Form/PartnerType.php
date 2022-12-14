<?php

namespace App\Form;

use App\Entity\Partner;
use EasyCorp\Bundle\EasyAdminBundle\Form\Type\FileUploadType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\File;

class PartnerType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name', null , [
                'label' => 'Nom du partenaire',
                'attr' => [
                    'required' => true,
                    'style' => 'width: 100%; margin: 8px 0; box-sizing: border-box; border: 1px solid blue; border-radius: 4px; font-size: 16px; padding: 10px 20px 10px 15px;',
                    'placeholder' => 'Tapez le nom du partenaire',
                ],
            ])
            ->add('logo', FileType::class, [
                'required' => false,
                'mapped' => false,
                'constraints' => [
                    new File([
                        'maxSize' => '1024k',
                        'mimeTypes' => [
                            'image/*',
                        ],
                    ])
                ],
                'label' => 'Logo du partenaire',
                'attr' => [
                    'style' => 'width: 100%; margin: 8px 0; box-sizing: border-box; border: 1px solid blue; border-radius: 4px; font-size: 16px; padding: 10px 20px 10px 15px;',
                ],
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Partner::class,
        ]);
    }
}
