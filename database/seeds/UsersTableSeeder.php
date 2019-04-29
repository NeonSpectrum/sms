<?php

use App\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder {
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run() {
    $user = new User;

    $user->username = 'rustle';
    $user->password = '1234';
    $user->type     = 'student';
    $user->save();
    $user           = new User;
    $user->username = 'miki';
    $user->password = 'asd';
    $user->type     = 'faculty';
    $user->save();
    $user           = new User;
    $user->username = 'manny';
    $user->password = '4321';
    $user->type     = 'parent';
    $user->save();
  }
}
