<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\world;
use Illuminate\Support\Facades\DB;

class worldsController extends Controller
{
    public function index(){

        $data = world::find(1);

        return view('test')->with('data', $data);
    }
}
