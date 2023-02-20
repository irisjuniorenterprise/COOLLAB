<?php

namespace App\Service;

use App\Entity\Competition;
use App\Entity\Image;
use App\Entity\TrainingSession;
use App\Entity\User;
use App\Repository\CompetitionRepository;
use App\Repository\ImageRepository;
use App\Repository\TrainingSessionRepository;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\String\Slugger\SluggerInterface;

class FileUploaderService
{
    public static function uploadFile($file, $targetDirectory, SluggerInterface $slugger): bool|string
    {
        if ($file) {
            $originalFilename = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
            $safeFilename = $slugger->slug($originalFilename);
            $newFilename = $safeFilename . '-' . uniqid('', true) . '.' . $file->guessExtension();
            try {
                $file->move(
                    $targetDirectory,
                    $newFilename
                );
                return $newFilename;
            } catch (FileException $e) {
                return false;
            }
        }
        return false;
    }

    // upload multiple files
    public static function uploadFiles($files, $targetDirectory, SluggerInterface $slugger): array
    {
        $fileNames = [];
        foreach ($files as $file) {
            $fileNames[] = self::uploadFile($file, $targetDirectory, $slugger);
        }
        return $fileNames;
    }


    public static function uploadImages(mixed $files, $targetDirectory, TrainingSession|Competition $entity, TrainingSessionRepository|CompetitionRepository $repository, ImageRepository $imageRepository): bool
    {
        $i = 0;
        $done = false;
        foreach ($files['name'] as $picture) {
            $imageType = pathinfo($picture, PATHINFO_EXTENSION);
            $imageName = str_replace(' ', '_', 'training') . '_' . $i . uniqid('', true) . "." . $imageType;
            move_uploaded_file($files['tmp_name'][$i], $targetDirectory . $imageName);
            $trainingImage = new Image();
            $trainingImage->setImageName($imageName);
            if ($entity instanceof TrainingSession) {
                $trainingImage->setTrainingSession($entity);
                $done = true;
            } else {
                $trainingImage->setCompetition($entity);
                $done = true;
            }
            $i++;
            $imageRepository->save($trainingImage);
        }
        return $done;
    }

    // upload single image
    public static function uploadImage($file, $targetDirectory, TrainingSession|Competition $entity): string
    {
        $picture = $file['name'];
        $imageType = pathinfo($picture, PATHINFO_EXTENSION);
        $imageName = str_replace(' ', '_', 'thumbnail') . '_' . uniqid('', true) . "." . $imageType;
        move_uploaded_file($file['tmp_name'], $targetDirectory . $imageName);
        $entity->setThumbnail($imageName);
        return $imageName;
    }

    public static function uploadBanner($file, $targetDirectory): string
    {
        $picture = $file['name'];
        $imageType = pathinfo($picture, PATHINFO_EXTENSION);
        $imageName = str_replace(' ', '_', 'banner') . '_' . uniqid('', true) . "." . $imageType;
        move_uploaded_file($file['tmp_name'], $targetDirectory . $imageName);
        return $imageName;
    }

    public static function uploadTrainerImage($file, $targetDirectory, User $entity): string
    {
        $picture = $file['name'];
        $imageType = pathinfo($picture, PATHINFO_EXTENSION);
        $imageName = str_replace(' ', '_', 'thumbnail') . '_' . uniqid('', true) . "." . $imageType;
        move_uploaded_file($file['tmp_name'], $targetDirectory . $imageName);
        $entity->setImage($imageName);
        return $imageName;
    }
}