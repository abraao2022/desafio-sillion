<?php

namespace App\Services\User;

use App\Repositories\User\UserRepositoryInterface;

class UsersService
{
    protected $userRepository;

    public function __construct(UserRepositoryInterface $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    public function getPaginatedUsers($perPage = 15)
    {
        return $this->userRepository->paginate($perPage)->load(['employment', 'address', 'creditCard', 'subscription']);
    }

    public function getUserById($id)
    {
        $user = $this->userRepository->find($id);

        if ($user) {
            $user->load(['employment', 'address', 'creditCard', 'subscription']);
        }

        return $user;
    }
}
