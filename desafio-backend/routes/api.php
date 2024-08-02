<?php

use Illuminate\Support\Facades\Route;
// use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;

// Route::post('register', [AuthController::class, 'register']);
// Route::post('/login', [AuthController::class, 'login'])->name('login');
// Route::post('logout', [AuthController::class, 'logout']);
// Route::post('refresh', [AuthController::class, 'refresh']);

Route::get('/users', [UserController::class, 'index']);
Route::get('/users/{id}', [UserController::class, 'show']);

Route::middleware(['auth:api'])->group(function () {
    //
});
