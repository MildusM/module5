<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\world;
use Illuminate\Support\Facades\DB;

class worldsController extends Controller
{
    public function load($order){

        if ($order == 'latest') {
            $data = world::orderBy('latest_world', 'desc')->get();
        } 
        else if ($order == 'oldest') {
            $data = world::orderBy('latest_world', 'asc')->get();
        } 
        else if ($order == 'az') {
            $data = world::orderBy('world_name', 'asc')->get();
        }
        else if ($order == 'za') {
            $data = world::orderBy('world_name', 'desc')->get();
        }
        else if ($order == 'type') {
            $data = world::orderBy('world_type', 'asc')->get();
        }
        else {
            $data = world::all();
        }
        return view('pages.load')->with('data', $data);
    }
}
