@extends('layouts/app')

@section('content')

    {{-- Page intro --}}
    <div style="height: 350px;" class="gradient">
        <a href="/index"><button class="fs-4 go-back"><i class="fal fa-chevron-left mr-1"></i><span style="margin-left: 10px">Go back</span></button></a>

        <div class="page-intro">
            <h1 style="font-size: 100px;">Create</h1>
            <p style="font-size: large;">Here you can create your world, you can choose between circular, rectangular and branch worlds. </p>
        </div>

    </div>

    @if (\Session::has('create_success'))
        <div style="width: 200px;" class="">
            <span><p class="m-3"><i class="fal fa-check mr-4"></i> {!! \Session::get('create_success') !!}</p></span>
        </div>
    @endif

    {{-- Create Form --}}

    {{-- composer require laravelcollective/html --}}

    <div class="my-5 center section">

        <div class="container">
            {{Form::open(array('action' => 'App\Http\Controllers\worldsController@create', 'method' => 'get'))}}
            {{-- <form action="#"> --}}
                <div class="row">
                    <div class="col-lg-4">
                        {{Form::text('world_name', '', ['class' => 'input worldNameInput', 'type' => 'text', 'required' => '', 'placeholder' => 'Name of your world...'])}}
                        {{-- <input onchange="selected()" class="input worldNameInput" type="text" required placeholder="Name of your world..."> --}}
                    </div>
                    <div class="col-lg-4">
                   {{-- {{Form::select('select_type',['Type of world' => ['Rectangular', 'Circular', 'Branch']
                        ])}} --}}
                        <select onchange="selected()" name="world_type" id="options" class="input">
                            <option class="no_order" value="no_order" disabled selected>Type of world</option>
                            <option class="no_order" value="rectangular">Rectangular</option>
                            <option class="popularity" value="circular">Circular</option>
                            <option class="latest" value="branch">Branch</option>
                        </select>
                    </div>
                    <div class="col-lg-4 type-values">
                        
                    </div>
                </div>

                {{-- {{Form::text('test', '',['class' => 'b', 'onchange' => 'selected()'])}} --}}

                {{Form::textarea('description', '',['class' => 'mt-5 p-2', 'onkeyup' => 'textareaKeyDown()', 'onkeydown' => 'textareaKeyDown()', 'minlength' => '10', 'maxlength' => '2064', 'required' => '', 'id' => 'textarea', 'cols' => '50', 'rows' => '10', 'placeholder' => 'Describe your world...'])}}
                {{-- <textarea class="mt-5 p-2" onkeyup="textareaKeyDown()" onkeydown="textareaKeyDown()" minlength="10" maxlength="2064" required name="" id="textarea" cols="50" rows="10" placeholder="Describe your world..."></textarea> --}}
                {{-- 'onkeyup' => 'textareaKeyDown()', 'onkeydown' => 'textareaKeyDown()' --}}
                <br><span class="q">0</span>
                <span>/2064</span><br><br>
                <br>
                {{Form::submit('Generate', ['disabled' => '', 'class' => 'btn-gradient btn-generate'])}}
                {{-- <button disabled class="btn-gradient btn-generate">Generate</button> --}}

            {{-- </form> --}}
            {{ Form::close() }}
        </div>

    </div>

    <script>
        // Textarea counter
let textarea = document.querySelector('#textarea');
let qLetters = document.querySelector('.q');

function textareaKeyDown(){
    qLetters.innerHTML = textarea.value.length;
}

// 

let worldNameInput = document.querySelector('.worldNameInput');


let select = document.querySelector('#options');
let btn_generate = document.querySelector('.btn-generate');
let type_values = document.querySelector('.type-values');

function selected(){
let selected = select.value;

if(selected == 'no_order'){
    return;
}   
else{
    // worldNameInput.disabled = true;
    // select.disabled = true;
    btn_generate.disabled = false;
    if(selected == 'rectangular'){
        type_values.innerHTML = `   <input required type="text" name="rectangle_x" placeholder="x..." class="input-s ml-1">
                                    <input required type="text" name="rectangle_y" placeholder="y..." class="input-s">`;
    }
    if(selected == 'circular'){
        type_values.innerHTML = `<input type="number" required name="circle_rooms" class="input" placeholder="Number of nodes...">`;
    }
    if(selected == 'branch'){
        type_values.innerHTML = `   <input type="text" class="input-s" required name="branch_factor" placeholder="Factor...">
                                    <input type="text" class="input-s" required name="branch_init_range" placeholder="Init range...">`;
    }
}

// alert(selected);
// window.location.href = `/store/${selected}`;
}
    </script>

@endsection