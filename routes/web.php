<?php

Route::get('/', function () {
  return Auth::check() ? redirect()->to('/dashboard') : view('index', ['config' => []]);
})->name('login');

Route::post('login', 'AuthController@login');
Route::post('logout', 'AuthController@logout');

Route::get('{all}', function () {
  return view('index', [
    'config' => [
      'isLogged' => Auth::check(),
      'user'     => Auth::check() ? Auth::user()->only(['username']) : null,
      'userType' => Auth::check() ? DB::table('users')->select('type')->where('username', Auth::user()->only(['username']))->first() : null,
      'url'      => [
        'base'    => url('/'),
        'storage' => asset('storage')
      ]
    ]
  ]);
})->where('all', '.*')->middleware('auth');

// Route::get("/", function () {
//   return Auth::check() ? redirect()->to("/dashboard") : view("index");
// })->name("login");