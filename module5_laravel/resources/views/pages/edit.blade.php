@extends('layouts/app')

@section('content')

    {{-- Page intro --}}
    <div style="height: 350px;" class="gradient">
        <a href="/canvas/{{$world_id}}"><button class="fs-4 go-back"><i class="fal fa-chevron-left mr-1"></i><span style="margin-left: 10px">Go back</span></button></a>

        <div class="page-intro">
            <h1 style="font-size: 100px;">Edit</h1>
            <p style="font-size: large;">Here you can edit existent Worlds with nodes.</p>
        </div>

    </div>

    @if (\Session::has('save_success'))
        <div style="width: 200px;" class="">
            <span><p class="m-3"><i class="fal fa-check mr-4"></i> {!! \Session::get('save_success') !!}</p></span>
        </div>
    @endif

    <div class="my-5 section">



        {{-- Collapse --}}
        <div class="collapse-div pt-2">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6"><span class="fs-4" style="color: #707070; font-weight: 300;"> World Information</span></div>
                    <div class="col-lg-6"><i onclick="collapseWorld()" style="float: right; margin-right: 20px; margin-top: 8px;" class="fal fa-plus collapse-plus"></i></div>
                </div>
            </div>
            
            
            <div class="conatiner" id="world_info">
                
            </div>
        </div>

        <div class="collapse-div pt-2 mt-2">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6"><span class="fs-4" style="color: #707070; font-weight: 300;">Node Summary</span></div>
                    <div class="col-lg-6"><i onclick="collapseNode()" style="float: right; margin-right: 20px; margin-top: 8px;" class="fal fa-plus collapse-plus"></i></div>
                </div>
            </div>

            <div class="container" id="node_info">
                

            </div>
        </div>

    </div>

    <canvas id="canvas" class="" style="border: 1px solid #333;"></canvas>  

    <div class="radio-toolbar" style="position: absolute; left: 50px;">
        <input type="radio"  name="radioBtn" id="edit" class="labelRadio mr-3">
        <label for="edit"><i class="fas fa-check"></i></label><span style="font-weight:200; font-size: large;"> Edit</span> <br><br>
        <input type="radio"  name="radioBtn" id="pathfind" class="labelRadio mr-3">
        <label for="pathfind"><i class="fas fa-check"></i></label><span style="font-weight:200; font-size: large;"> Find path</span> <br><br>
        {{-- <button id="edit" class="labelRadio mr-3"><i class="fas fa-check"></i></button><span style="font-weight:200; font-size: large;"> Edit</span> <br><br>
        <button class="labelRadio mr-3"><i class="fas fa-check"></i></button><span style="font-weight:200; font-size: large;"> Find path</span><br><br> --}}
    </div>
    <div id="save">
        {{Form::open(array('action' => 'App\Http\Controllers\worldsController@save', 'method' => 'get'))}}
            <button disabled onclick="saveExits()" style="position: absolute; right: 20px;" class="btn-gradient btn-generate mt-3 btn-save">Save</button>
        {{Form::close()}}
    </div>
    <input type="hidden" name="save_data" id="save_id" value="">
    {{-- <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-ajaxy/1.6.1/scripts/jquery.ajaxy.min.js"></script> --}}


    <script>
        // Collapse
        let collapseWorldTrue = false;
        let collapseNodeTrue = false;
        let world_info = document.querySelector('#world_info');
        let node_info = document.querySelector('#node_info');

        let world_data_info = {!! json_encode($world_data) !!};
        // console.log(world_data_info);

        let node_data_info = {!! json_encode($node_data) !!};
        // console.log(node_data_info);

        let node_number = {!! json_encode($test) !!};
        // console.log(node_number[0]['COUNT(*)']);
    
    </script>
    <script src="{{asset('js/editScript.js')}}"></script>


@endsection