<?php

namespace App\Controller;

use App\Entity\Link;
use App\Repository\LinkRepository;
use App\Service\FileUploaderService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\String\Slugger\SluggerInterface;

class LinkController extends AbstractController
{
    #[Route('/link/video/{id}', name: 'app_link_video_update')]
    public function new(LinkRepository $linkRepository, Request $request,Link $link): Response
    {
        $linkUrl = $request->request->get('video');
        $link->setVideo($linkUrl);
        $linkRepository->save($link,true);
        return $this->redirectToRoute('app_link_video_index');
    }
    #[Route('/link/video', name: 'app_link_video_index')]
    public function indexVideo(LinkRepository $linkRepository): Response
    {
        $link = $linkRepository->findOneBy(['banner' => null]);
        return $this->render('link/index.html.twig', [
            'link' => $link,
        ]);
    }
    #[Route('/link/banner', name: 'app_link_banner_index')]
    public function indexBanner(LinkRepository $linkRepository): Response
    {
        $banner = $linkRepository->findOneBy(['video' => null]);
        return $this->render('link/banner.html.twig', [
            'link' => $banner,
        ]);
    }
    #[Route('/link/banner/{id}', name: 'app_link_banner_update')]
    public function editBanner(LinkRepository $linkRepository, Link $link): Response
    {
        $fileUploader = FileUploaderService::uploadBanner($_FILES['banner'], 'uploads/banner/');
        if ($fileUploader) {
            $link->setBanner($fileUploader);
            $linkRepository->save($link, true);
        }
        return $this->redirectToRoute('app_link_banner_index');
    }
}
