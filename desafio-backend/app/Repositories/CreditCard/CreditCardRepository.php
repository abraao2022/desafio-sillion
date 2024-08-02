<?php

namespace App\Repositories\CreditCard;

use App\Models\CreditCard;
use App\Repositories\CreditCard\CreditCardRepositoryInterface;

class CreditCardRepository implements CreditCardRepositoryInterface
{
    public function create(array $data)
    {
        return CreditCard::create($data);
    }
}
