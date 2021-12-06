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

        $world_number_nodes = DB::select(DB::raw('SELECT COUNT(*) FROM worlds
        JOIN nodes ON nodes.world_id = worlds.id'));

        // {{$world->join('nodes', 'nodes.world_id', '=', 'worlds.id')->where('nodes.world_id', '=', $world->id)->count()}}

        $node_data = Node::where('world_id', $world_id)->get();
        // $node_data = Node::find(2);


        return view('pages.edit')->with('world_data', $world_data)->with('node_data', $node_data)->with('test', $world_number_nodes);

    }

    public function create(){
        return view('pages.create');
    }

    public function canvas(){
        return view('pages.canvas');
    }
}
