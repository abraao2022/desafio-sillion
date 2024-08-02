<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $fillable = [
        'uid', 'password', 'first_name', 'last_name', 'username', 'email', 'avatar', 'gender', 
        'phone_number', 'social_insurance_number', 'date_of_birth'
    ];

    public function employment()
    {
        return $this->hasOne(Employment::class);
    }

    public function address()
    {
        return $this->hasOne(Address::class);
    }

    public function creditCard()
    {
        return $this->hasOne(CreditCard::class);
    }

    public function subscription()
    {
        return $this->hasOne(Subscription::class);
    }
}
