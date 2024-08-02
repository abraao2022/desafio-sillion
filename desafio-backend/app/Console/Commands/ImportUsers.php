<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Services\User\ImportUsersService;

class ImportUsers extends Command
{
    protected $signature = 'import:users';
    protected $description = 'Import users from Random Data API';

    protected $userService;

    public function __construct(ImportUsersService $userService)
    {
        parent::__construct();
        $this->userService = $userService;
    }

    public function handle()
    {
        $this->userService->importUsers();
        $this->info('Users imported successfully!');
    }
}
