<?php

namespace App\Validators;

use Illuminate\Support\Facades\Validator;

class UserValidator
{
    public static function validate($user)
    {
        $validator = Validator::make($user, [
            'id' => 'required|integer',
            'uid' => 'required|string',
            'password' => 'required|string',
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'username' => 'required|string|unique:users,username',
            'email' => 'required|string|email|unique:users,email',
            'avatar' => 'required|string|url',
            'gender' => 'required|string',
            'phone_number' => 'required|string',
            'social_insurance_number' => 'required|string|unique:users,social_insurance_number',
            'date_of_birth' => 'required|date',
            'employment.title' => 'required|string',
            'employment.key_skill' => 'required|string',
            'address.city' => 'required|string',
            'address.street_name' => 'required|string',
            'address.street_address' => 'required|string',
            'address.zip_code' => 'required|string',
            'address.state' => 'required|string',
            'address.country' => 'required|string',
            'address.coordinates.lat' => 'required|numeric',
            'address.coordinates.lng' => 'required|numeric',
            'credit_card.cc_number' => 'required|string',
            'subscription.plan' => 'required|string',
            'subscription.status' => 'required|string',
            'subscription.payment_method' => 'required|string',
            'subscription.term' => 'required|string',
        ]);

        return !$validator->fails();
    }
}
