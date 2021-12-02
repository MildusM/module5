<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\worldsController;
use App\Http\Controllers\PagesController;

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
    return view('welcome');
});
Route::get('/test', [worldsController::class, 'index']);

Route::get('/index', [PagesController::class, 'index']);
Route::get('/load', [PagesController::class, 'load']);
Route::get('/edit', [PagesController::class, 'edit']);
Route::get('/create', [PagesController::class, 'create']);
Route::get('/canvas', [PagesController::class, 'canvas']);