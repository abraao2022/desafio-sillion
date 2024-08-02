<?php

namespace App\Services\User;

use App\Repositories\User\UserRepositoryInterface;
use App\Repositories\Employment\EmploymentRepositoryInterface;
use App\Repositories\Address\AddressRepositoryInterface;
use App\Repositories\CreditCard\CreditCardRepositoryInterface;
use App\Repositories\Subscription\SubscriptionRepositoryInterface;
use App\Adapters\RandomUserApiAdapter;

class ImportUsersService
{
    protected $apiAdapter;
    protected $userRepository;
    protected $employmentRepository;
    protected $addressRepository;
    protected $creditCardRepository;
    protected $subscriptionRepository;

    public function __construct(
        RandomUserApiAdapter $apiAdapter,
        UserRepositoryInterface $userRepository,
        EmploymentRepositoryInterface $employmentRepository,
        AddressRepositoryInterface $addressRepository,
        CreditCardRepositoryInterface $creditCardRepository,
        SubscriptionRepositoryInterface $subscriptionRepository
    ) {
        $this->apiAdapter = $apiAdapter;
        $this->userRepository = $userRepository;
        $this->employmentRepository = $employmentRepository;
        $this->addressRepository = $addressRepository;
        $this->creditCardRepository = $creditCardRepository;
        $this->subscriptionRepository = $subscriptionRepository;
    }

    public function importUsers()
    {
        $users = $this->apiAdapter->fetchUsers();

        foreach ($users as $userData) {
            $user = $this->userRepository->create([
                'uid' => $userData['uid'],
                'password' => bcrypt($userData['password']),
                'first_name' => $userData['first_name'],
                'last_name' => $userData['last_name'],
                'username' => $userData['username'],
                'email' => $userData['email'],
                'avatar' => $userData['avatar'],
                'gender' => $userData['gender'],
                'phone_number' => $userData['phone_number'],
                'social_insurance_number' => $userData['social_insurance_number'],
                'date_of_birth' => $userData['date_of_birth'],
            ]);

            $this->employmentRepository->create([
                'user_id' => $user->id,
                'title' => $userData['employment']['title'],
                'key_skill' => $userData['employment']['key_skill'],
            ]);

            $this->addressRepository->create([
                'user_id' => $user->id,
                'city' => $userData['address']['city'],
                'street_name' => $userData['address']['street_name'],
                'street_address' => $userData['address']['street_address'],
                'zip_code' => $userData['address']['zip_code'],
                'state' => $userData['address']['state'],
                'country' => $userData['address']['country'],
                'lat' => $userData['address']['coordinates']['lat'],
                'lng' => $userData['address']['coordinates']['lng'],
            ]);

            $this->creditCardRepository->create([
                'user_id' => $user->id,
                'cc_number' => $userData['credit_card']['cc_number'],
            ]);

            $this->subscriptionRepository->create([
                'user_id' => $user->id,
                'plan' => $userData['subscription']['plan'],
                'status' => $userData['subscription']['status'],
                'payment_method' => $userData['subscription']['payment_method'],
                'term' => $userData['subscription']['term'],
            ]);
        }
    }
}
