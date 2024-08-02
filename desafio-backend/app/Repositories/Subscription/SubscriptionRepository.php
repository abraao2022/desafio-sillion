<?php

namespace App\Repositories\Subscription;

use App\Models\Subscription;
use App\Repositories\Subscription\SubscriptionRepositoryInterface;

class SubscriptionRepository implements SubscriptionRepositoryInterface
{
    public function create(array $data)
    {
        return Subscription::create($data);
    }
}
