<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\World;
use App\Models\Node;
use Illuminate\Support\Facades\DB;

class PagesController extends Controller
{
    public function index(){
        return view('pages.index');
    }

    public function edit($world_id){

        $world_data = World::find($world_id);

        $node_data = Node::where('world_id', $world_id)->get();
        // $node_data = Node::find(2);


        return view('pages.edit')->with('world_data', $world_data)->with('node_data', $node_data);

    }

    public function create(){
        return view('pages.create');
    }

    public function canvas($world_id){

        return view('pages.canvas')->with('world_id', $world_id);
        
    }
}
