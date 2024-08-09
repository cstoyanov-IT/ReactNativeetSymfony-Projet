<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class UserController extends AbstractController
{
    private $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    #[Route('/api/users', methods: ['POST'])]
    public function createUser(Request $request): JsonResponse
    {
        // Décoder le contenu JSON de la requête
        $data = json_decode($request->getContent(), true);

        // Créer une nouvelle instance d'Utilisateur
        $user = new User();
        $user->setFirstName($data['firstName']);
        $user->setLastName($data['lastName']);
        $user->setEmail($data['email']);
        $user->setDateOfBirth(new \DateTime($data['dateOfBirth']));
        
        // Sauvegarder l'utilisateur
        $this->userRepository->save($user);

        // Retourner une réponse JSON
        return new JsonResponse(['status' => 'User created'], JsonResponse::HTTP_CREATED);
    }
}