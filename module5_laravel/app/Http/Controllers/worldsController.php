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
        $branch_init_range = $request->input('branch_init_range'); 
        $circle_rooms = $request->input('circle_rooms'); 
        $world_type = $request->input('world_type');

        // $branch_factor.replace(',','.');

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

        $findName = world::select('world_name')->firstWhere('world_name', $world_name);
        if ($findName === null) {
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
        }
        else {
            $delRow = world::select('*')->where('world_name', $world_name);
            $delRow->delete();

            // $newName = $world_name.'_'.time();
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
        }

        // DB::table('worlds')->insert(
        //     array(
        //         'world_name'    =>  $world_name,
        //         'world_type'    =>  $world_type,
        //         'world_description'   =>  $description,
        //         'rectangle_x'   =>  $rectangle_x,
        //         'rectangle_y'   =>  $rectangle_y,
        //         'branch_factor' =>  $branch_factor,
        //         'branch_init_range' =>  $branch_init_range,
        //         'circle_rooms'  =>  $circle_rooms    
        //     )
        // );

        $world_id = world::select('id')->firstWhere('world_name', $world_name);
        // $test = world::find($world_id);

        if($rectangle_x == !NULL){
            $qOfNodes = ($rectangle_x * $rectangle_y);

            for ($i = 0; $i < $qOfNodes; $i++) {
                $y = $rectangle_x;
                $x = $rectangle_y;
                
                if($qOfNodes == 1) {
                    DB::table('nodes')->insert(
                        array(
                            'node_name' => $i,
                            'node_exits' => '',
                            'world_id' => $world_id['id']
                        )
                    );
                }

                if($x==1 || $y==1) {
                    for($i = 0; $i < $qOfNodes; $i++){
                        if($i == 0){
                            DB::table('nodes')->insert(
                                array(
                                    'node_name' => $i,
                                    'node_exits' => ($i+1),
                                    'world_id' => $world_id['id']
                                )
                            );
                        }
                        elseif($i == ($qOfNodes-1)){
                            DB::table('nodes')->insert(
                                array(
                                    'node_name' => $i,
                                    'node_exits' => ($i-1),
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

                if($y >= 2 && $x >= 2) {
                    // vänster hörna upp
                    if($i == 0){
                        DB::table('nodes')->insert(
                            array(
                                'node_name' => $i,
                                'node_exits' => ($i+1 . ', ' . $i+$y),
                                'world_id' => $world_id['id']
                            )
                        );
                        
                    }
                    // höger hörna upp
                    elseif($i == ($y-1)) {
                        DB::table('nodes')->insert(
                            array(
                                'node_name' => $i,
                                'node_exits' => ($i-1 . ', ' . $i+$y),
                                'world_id' => $world_id['id']
                            )
                        );
                    }
                    // vänster hörna ner
                    elseif($i == ($x*$y)-$y) {
                        DB::table('nodes')->insert(
                            array(
                                'node_name' => $i,
                                'node_exits' => ($i-$y . ', ' . $i+1),
                                'world_id' => $world_id['id']
                            )
                        );
                    }
                    // höger hörna ner
                    elseif($i==($qOfNodes-1)){
                        DB::table('nodes')->insert(
                            array(
                                'node_name' => $i,
                                'node_exits' => ($i-1 . ', ' . $i-$y),
                                'world_id' => $world_id['id']
                            )
                        );
                    }
                    
                }
                if($x >= 3 || $y >= 3) {
                    // upp
                    if($i>0 && $i<($y-1)) {
                        DB::table('nodes')->insert(
                            array(
                                'node_name' => $i,
                                'node_exits' => ($i-1 . ', ' . $i+1 . ', ' . $i+$y),
                                'world_id' => $world_id['id']
                            )
                        );
                    }
                    for($j = 1; $j < $x-1; $j++) {
                        // höger
                        if($i==($y*($j+1))-1) {
                            DB::table('nodes')->insert(
                                array(
                                    'node_name' => $i,
                                    'node_exits' => ($i-$y . ', ' . $i-1 . ', ' . $i+$y),
                                    'world_id' => $world_id['id']
                                )
                            );
                        }
                        // vänster
                        elseif($i==($y*$j)) {
                            DB::table('nodes')->insert(
                                array(
                                    'node_name' => $i,
                                    'node_exits' => ($i-$y . ', ' . $i+1 . ', ' . $i+$y),
                                    'world_id' => $world_id['id']
                                )
                            );
                        }
                        
                        // mitten
                        if($i>($y*$j) && $i<($y*($j+1))-1){
                            DB::table('nodes')->insert(
                                array(
                                    'node_name' => $i,
                                    'node_exits' => ($i-$y . ', ' . $i-1 . ', ' . $i+1 . ', ' . $i+$y),
                                    'world_id' => $world_id['id']
                                )
                            );
                        }
                    }
                    // ner
                    if($y>2){
                        if($i<($qOfNodes-1) && $i >($y*($x-1))){
                            DB::table('nodes')->insert(
                                array(
                                    'node_name' => $i,
                                    'node_exits' => ($i-1 . ', ' . $i+1 . ', ' . $i-$y),
                                    'world_id' => $world_id['id']
                                )
                            );
                        }
                    }
                }
            }
        } 
        if($branch_factor == !NULL){
            $factor = $branch_factor;
            $mBranch = $branch_init_range;

            if($mBranch < 1)
                return;
            
            // Main branch
            for($i=0; $i <$mBranch; $i++) {
                // First node
                if($i == 0){
                    DB::table('nodes')->insert(
                        array(
                            'node_name' => $i,
                            'node_exits' => ($i+1),
                            'world_id' => $world_id['id']
                        )
                    );
                }
                // Last node
                elseif($i == ($mBranch-1)){
                    DB::table('nodes')->insert(
                        array(
                            'node_name' => $i,
                            'node_exits' => ($i-1),
                            'world_id' => $world_id['id']
                        )
                    );
                }
                // Middle nodes
                else{
                    DB::table('nodes')->insert(
                        array(
                            'node_name' => $i,
                            'node_exits' => ($i-1 . ', ' . $i+1),
                            'world_id' => $world_id['id']
                        )
                    );
                } 
            }

            // Child branches
            $cBranch = round($mBranch*$factor);
            $start = $mBranch;

            while($cBranch > 5) {
                for($i = $start; $i < ($start+$cBranch); $i++) {
                    // First child node
                    if($i == $start){
                        DB::table('nodes')->insert(
                            array(
                                'node_name' => $i,
                                'node_exits' => ($i+1),
                                'world_id' => $world_id['id']
                            )
                        );
                    }
                    // Last child node
                    elseif($i == ($start+$cBranch-1)){
                        DB::table('nodes')->insert(
                            array(
                                'node_name' => $i,
                                'node_exits' => ($i-1),
                                'world_id' => $world_id['id']
                            )
                        );
                    }
                    // Middle nodes
                    else{
                        DB::table('nodes')->insert(
                            array(
                                'node_name' => $i,
                                'node_exits' => ($i-1 . ', ' . $i+1),
                                'world_id' => $world_id['id']
                            )
                        );
                    }
                }
                $start += $cBranch;
                $cBranch = round($cBranch*$factor);
            }

        }
        if($circle_rooms == !NULL){
            $qOfNodes = $circle_rooms;
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
