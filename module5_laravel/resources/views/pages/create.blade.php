@extends('layouts/app')

@section('content')

    {{-- Page intro --}}
    <div style="height: 350px;" class="gradient">
        <button class="fs-4 go-back"><i class="fal fa-chevron-left mr-1"></i><span style="margin-left: 10px">Go back</span></button>

        <div class="page-intro">
            <h1 style="font-size: 100px;">Create</h1>
            <p style="font-size: large;">Here you can create your world, you can choose between circular, rectangular and branch worlds. </p>
        </div>

    </div>

    {{-- Create Form --}}

    <div class="my-5 center section">

        <div class="container">
            <form action="#">
                <div class="row">
                    <div class="col-lg-4">
                        <input onchange="selected()" class="input worldNameInput" type="text" required placeholder="Name of your world...">
                    </div>
                    <div class="col-lg-4">
                        <select onchange="selected()" name="" id="options" class="input">
                            <option class="no_order" value="no_order" disabled selected>Type of world</option>
                            <option class="no_order" value="rectangular">Rectangular</option>
                            <option class="popularity" value="circular">Circular</option>
                            <option class="latest" value="branch">Branch</option>
                        </select>
                    </div>
                    <div class="col-lg-4 type-values">
                        
                    </div>
                </div>

                <textarea class="mt-5 p-2" onkeyup="textareaKeyDown()" onkeydown="textareaKeyDown()" minlength="10" maxlength="2064" required name="" id="textarea" cols="50" rows="10" placeholder="Describe your world..."></textarea>
                {{-- 'onkeyup' => 'textareaKeyDown()', 'onkeydown' => 'textareaKeyDown()' --}}
                <br><span class="q">0</span>
                <span>/2064</span><br><br>
                <br>
                <button disabled class="btn-gradient btn-generate">Generate</button>

            </form>
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

        if(worldNameInput.value == '' || selected == 'no_order'){
            return;
        }   
        else{
            worldNameInput.disabled = true;
            select.disabled = true;
            btn_generate.disabled = false;
            if(selected == 'rectangular'){
                type_values.innerHTML = `   <input required type="text" placeholder="x..." class="input-s ml-1">
                                            <input required type="text" placeholder="y..." class="input-s">`;
            }
            if(selected == 'circular'){
                type_values.innerHTML = `<input type="number" required class="input" placeholder="Number of nodes...">`;
            }
            if(selected == 'branch'){
                type_values.innerHTML = ` <input type="text" class="input-s" required placeholder="Factor...">
                                <input type="text" class="input-s" required placeholder="Init range...">`;
            }
        }

        // alert(selected);
        // window.location.href = `/store/${selected}`;
        }

    </script>




@endsection