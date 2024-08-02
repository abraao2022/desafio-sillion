<?php

namespace App\Adapters;

use GuzzleHttp\Client;
use App\Validators\UserValidator;

class RandomUserApiAdapter
{
    protected $client;

    public function __construct()
    {
        $this->client = new Client();
    }

    public function fetchUsers($size = 100)
    {
        $response = $this->client->get("https://random-data-api.com/api/v2/users?size={$size}");
        $users = json_decode($response->getBody()->getContents(), true);

        return array_filter($users, function($user) {
            return UserValidator::validate($user);
        });
    }
}
