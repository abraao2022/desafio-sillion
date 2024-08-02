<?php

namespace App\Repositories\Address;

use App\Models\Address;
use App\Repositories\Address\AddressRepositoryInterface;

class AddressRepository implements AddressRepositoryInterface
{
    public function create(array $data)
    {
        return Address::create($data);
    }
}
