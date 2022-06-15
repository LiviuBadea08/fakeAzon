<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ShopController;
use App\Http\Controllers\UserController;
use App\Models\Rol;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('landing', function () {
    return view('landingpage');
});

Route::get('registeruser', function () {
    return view('createuser');
});
Route::get('registershop', function () {
    return view('createshop');
});


Route::get('/home', [HomeController::class, 'index'])->name('home');
Route::get('/', [HomeController::class, 'index'])->name('home');

Route::get('/profile', [UserController::class, 'index'])->name('profile');

Route::resource('shops', ShopController::class);
Route::resource('products', ProductController::class);
Auth::routes();

