<?php

Route::get('/', function () {
  return view('index');
});
Route::post('login', 'AuthController@login');

Route::get('{all}', function () {
  return view('index', [
    'config' => [

      'url' => [
        'base'    => url('/'),
        'storage' => asset('storage')
      ]
    ]
  ]);
})->where('all', '.*');

// Route::get("/", function () {
//   return Auth::check() ? redirect()->to("/dashboard") : view("index");
// })->name("login");