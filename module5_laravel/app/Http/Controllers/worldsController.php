<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\world;
use Illuminate\Support\Facades\DB;

class worldsController extends Controller
{
    public function create(Request $request){

        $world_name = $request->input('world_name');
        $description = $request->input('description'); 
        $rectangle_x = $request->input('rectangle_x'); 
        $rectangle_y = $request->input('rectangle_y'); 
        $branch_factor = $request->input('branch_factor'); 
        $branch_init_range = $request->input('branch_init-range'); 
        $circle_rooms = $request->input('circle_rooms'); 
        $world_type = $request->input('world_type');

        if($rectangle_x == ''){
            $rectangle_x = NULL;
            $rectangle_y = NULL;
        }
        if($branch_factor == ''){
            $branch_factor = NULL;
            $branch_init_range = NULL;
        }
        if($circle_rooms == ''){
            $circle_rooms = NULL;
        }

        DB::table('worlds')->insert(
            array(
                'world_name'    =>  $world_name,
                'world_type'    =>  $world_type,
                'world_description'   =>  $description,
                'rectangle_x'   =>  $rectangle_x,
                'rectangle_y'   =>  $rectangle_y,
                'branch_factor' =>  $branch_factor,
                'branch_init_range' =>  $branch_init_range,
                'circle_rooms'  =>  $circle_rooms    
            )
        );

        $world_id = world::select('id')->firstWhere('world_name', $world_name);
        // $test = world::find($world_id);

        if($rectangle_x == !NULL){
            $qOfNodes = ($rectangle_x * $rectangle_y);
            // $test = $qOfNodes;
            for($i = 0; $i < $qOfNodes; $i++){
                if($i == 0){
                    DB::table('nodes')->insert(
                        array(
                            'node_name' => $i,
                            'node_exits' => ($qOfNodes-1 . ', ' . $i+1),
                            'world_id' => $world_id['id']
                        )
                    );
                }
                elseif($i == ($qOfNodes-1)){
                    DB::table('nodes')->insert(
                        array(
                            'node_name' => $i,
                            'node_exits' => (0 . ', ' . $i-1),
                            'world_id' => $world_id['id']
                        )
                    );
                }
                else{
                    DB::table('nodes')->insert(
                        array(
                            'node_name' => $i,
                            'node_exits' => ($i+1 . ', ' . $i-1),
                            'world_id' => $world_id['id']
                        )
                    );
                }

                
            }
        }
        if($branch_factor == !NULL){
            $qOfNodes = ($rectangle_x * $rectangle_y);
            $test = $qOfNodes;
        }
        if($circle_rooms == !NULL){
            $qOfNodes = ($rectangle_x * $rectangle_y);
            $test = $qOfNodes;
        }

        // if($rectangle_x == 'hello'){
        //     $test = 'Rectangle'
        // }
        // if($branch_factor !== NULL){
        //     $test = 'Branch'
        // }
        // if($circle_rooms !== NULL){
        //     $test = 'circular';
        // }

        // $test = $request->input('test'); 
        // $message = $request->input('message');

        return back()->with('create_success', 'World Created');
        // return view('test')->with('test', $test);

    }

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
