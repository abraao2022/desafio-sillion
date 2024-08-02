<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Adapters\RandomUserApiAdapter;
use App\Services\User\ImportUsersService;
use App\Services\User\UsersService;
use App\Repositories\User\UserRepositoryInterface;
use App\Repositories\Employment\EmploymentRepositoryInterface;
use App\Repositories\Address\AddressRepositoryInterface;
use App\Repositories\CreditCard\CreditCardRepositoryInterface;
use App\Repositories\Subscription\SubscriptionRepositoryInterface;
use App\Repositories\User\UserRepository;
use App\Repositories\Employment\EmploymentRepository;
use App\Repositories\Address\AddressRepository;
use App\Repositories\CreditCard\CreditCardRepository;
use App\Repositories\Subscription\SubscriptionRepository;

class AppServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->singleton(UsersService::class, function ($app) {
            return new UsersService($app->make(UserRepositoryInterface::class));
        });
        $this->app->singleton(RandomUserApiAdapter::class, function ($app) {
            return new RandomUserApiAdapter();
        });

        $this->app->singleton(ImportUsersService::class, function ($app) {
            return new ImportUsersService(
                $app->make(RandomUserApiAdapter::class),
                $app->make(UserRepositoryInterface::class),
                $app->make(EmploymentRepositoryInterface::class),
                $app->make(AddressRepositoryInterface::class),
                $app->make(CreditCardRepositoryInterface::class),
                $app->make(SubscriptionRepositoryInterface::class)
            );
        });

        $this->app->bind(UserRepositoryInterface::class, UserRepository::class);
        $this->app->bind(EmploymentRepositoryInterface::class, EmploymentRepository::class);
        $this->app->bind(AddressRepositoryInterface::class, AddressRepository::class);
        $this->app->bind(CreditCardRepositoryInterface::class, CreditCardRepository::class);
        $this->app->bind(SubscriptionRepositoryInterface::class, SubscriptionRepository::class);
    }

    public function boot()
    {
        //
    }
}
