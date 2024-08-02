<?php

namespace App\Repositories\Employment;

use App\Models\Employment;
use App\Repositories\Employment\EmploymentRepositoryInterface;

class EmploymentRepository implements EmploymentRepositoryInterface
{
    public function create(array $data)
    {
        return Employment::create($data);
    }
}
