<?php

namespace App\Http\Controllers;

use Auth;
use Illuminate\Http\Request;

class AuthController extends Controller {
  /**
   * @param Request $request
   */
  public function login(Request $request) {
    if (Auth::attempt($request->only(['username', 'password']))) {
      return response()->json(['success' => true, 'message' => 'Login Successfully!']);
    }
    return response()->json(['success' => false, 'message' => 'Invalid Username and/or Password.']);
  }
  /**
   * @param Request $request
   */
  public function logout() {
    Auth::logout();
    return response()->json(['success' => true, 'message' => 'Something went wrong']);
  }
}
