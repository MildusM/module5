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

        // $test = $request->input('test'); 
        // $message = $request->input('message');

        return back()->with('create_success', 'World created');
    }
}
