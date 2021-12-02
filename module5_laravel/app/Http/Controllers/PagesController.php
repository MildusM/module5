<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{
    public function index(){
        return view('pages.index');
    }

    public function load(){
        return view('pages.load');
    }

    public function edit(){
        return view('pages.edit');
    }

    public function create(){
        return view('pages.create');
    }

    public function canvas(){
        return view('pages.canvas');
    }
}
