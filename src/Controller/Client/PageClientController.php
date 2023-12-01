<?php

namespace App\Controller\Client;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PageClientController extends AbstractController
{
    #[Route('/liste-des-clients', name: 'page_list_client')]
    public function index(): Response
    {
        return $this->render('client/client_table.html.twig');
    }
}
