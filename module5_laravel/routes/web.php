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
Route::get('/load/{order}', [worldsController::class, 'load']);

Route::get('/index', [PagesController::class, 'index']);
Route::get('/edit/{world_id}', [PagesController::class, 'edit']);
// Route::get('/edit', [PagesController::class, 'edit']);
Route::get('/create', [PagesController::class, 'create']);
Route::get('/canvas/{world_id}', [PagesController::class, 'canvas'], [worldsController::class, 'destroy']);

Route::get('/createWorld', [worldsController::class, 'create']);

// Route::resource('worlds', 'worldsController');

Route::get('/delete/{world_id}', [worldsController::class, 'delete']);

Route::get('/save', [worldsController::class, 'save']);

Route::get('ajax', function(){
    return view('test');
});
Route::post('/getmsg', [AjaxController::class, 'index']);