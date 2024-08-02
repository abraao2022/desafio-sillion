<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\User\UsersService;

class UserController extends Controller
{
    protected $usersService;

    public function __construct(UsersService $usersService)
    {
        $this->usersService = $usersService;
    }

    public function index(Request $request)
    {
        $perPage = $request->input('per_page', 15);
        $users = $this->usersService->getPaginatedUsers($perPage);
        return response()->json($users);
    }

    // Get a single user by ID
    public function show($id)
    {
        $user = $this->usersService->getUserById($id);

        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        return response()->json($user);
    }
}
