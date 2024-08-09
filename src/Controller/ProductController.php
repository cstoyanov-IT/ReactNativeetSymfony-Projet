<?php

namespace App\Controller;

use App\Entity\Product;
use App\Repository\ProductRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api/product', name: 'api_product_')]
class ProductController extends AbstractController
{
    private $productRepository;

    public function __construct(ProductRepository $productRepository)
    {
        $this->productRepository = $productRepository;
    }

    #[Route('', name: 'index', methods: ['GET'])]
    public function index(): JsonResponse
    {
        $product = $this->productRepository->findAll();
        return $this->json($product);
    }

    #[Route('/{id}', name: 'show', methods: ['GET'])]
    public function show(int $id): JsonResponse
    {
        $product = $this->productRepository->find($id);
        
        if (!$product) {
            return $this->json(['message' => 'Product not found'], 404);
        }

        return $this->json($product);
    }

    #[Route('', name: 'create', methods: ['POST'])]
    public function create(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        $product = new Product();
        $product->setName($data['name']);
        $product->setReference($data['reference']);
        $product->setPrice($data['price']);
        $product->setDescription($data['description']);

        $this->productRepository->save($product, true);

        return $this->json($product, 201);
    }

    #[Route('/{id}', name: 'update', methods: ['PUT', 'PATCH'])]
    public function update(int $id, Request $request): JsonResponse
    {
        $product = $this->productRepository->find($id);
        
        if (!$product) {
            return $this->json(['message' => 'Product not found'], 404);
        }

        $data = json_decode($request->getContent(), true);

        if (isset($data['name'])) $product->setName($data['name']);
        if (isset($data['reference'])) $product->setReference($data['reference']);
        if (isset($data['price'])) $product->setPrice($data['price']);
        if (isset($data['description'])) $product->setDescription($data['description']);

        $this->productRepository->save($product, true);

        return $this->json($product);
    }

    #[Route('/{id}', name: 'delete', methods: ['DELETE'])]
    public function delete(int $id): JsonResponse
    {
        $product = $this->productRepository->find($id);
        
        if (!$product) {
            return $this->json(['message' => 'Product not found'], 404);
        }

        $this->productRepository->remove($product, true);

        return $this->json(null, 204);
    }
}