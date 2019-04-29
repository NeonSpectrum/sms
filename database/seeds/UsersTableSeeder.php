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

    $user->save();
  }
}
