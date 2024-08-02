<?php

namespace App\Repositories\User;

interface UserRepositoryInterface
{
    public function create(array $data);
    public function all();
    public function find($id);
    public function paginate($perPage = 15);
}
