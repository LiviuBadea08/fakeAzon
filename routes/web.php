<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ShopController;
use App\Http\Controllers\UserController;
use App\Models\Category;
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
Route::get('/', function () {
    return view('landingpage');
});

// Route::get('productshow', function () {
//     return view('showdescription');
// });


Route::get('/home', [HomeController::class, 'index'])->name('home');

Route::get('/profile', [UserController::class, 'index'])->name('profile');

Route::get('/shopProducts/{shop}', [ShopController::class, 'shopProducts'])->name('shopProducts');


Route::resources([
    'shops' => ShopController::class,
    'categories' => CategoryController::class
]);
Route::resource('products', ProductController::class)->except(['create', 'destroy']);
Route::get('products/create/{shopId}', [ProductController::class, 'create'])->name('product.create');
Route::get('products/{id}/destroy', [ProductController::class, 'destroy'])->name('product.destroy');

Auth::routes();

