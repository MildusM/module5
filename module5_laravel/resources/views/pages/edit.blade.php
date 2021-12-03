@extends('layouts/app')

@section('content')

    {{-- Page intro --}}
    <div style="height: 350px;" class="gradient">
        <a href="/canvas"><button class="fs-4 go-back"><i class="fal fa-chevron-left mr-1"></i><span style="margin-left: 10px">Go back</span></button></a>

        <div class="page-intro">
            <h1 style="font-size: 100px;">Edit</h1>
            <p style="font-size: large;">Here you can edit existent Worlds with nodes.</p>
        </div>

    </div>

    

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

            <div class="conatiner" id="node_info">


            </div>
        </div>

    </div>

    {{-- Canvas --}}

        <!-- <canvas id="canvas" style="border: 1px solid #333;" height="400px" width="400px"></canvas>

    <script>
        let canvas = document.querySelector('#canvas');
        let ctx = canvas.getContext('2d');

        ctx.fillStyle = 'rgb(0,0,200)';
        ctx.fillRect(2, 2, 100, 100);

        ctx.fillStyle = 'rgb(0,0,0)';
        ctx.fillText('hahahha', 200, 200);
    </script> -->
    <canvas id="canvas" style="border: 1px solid #333;"></canvas><br><br>

    <div style="position: absolute; left: 50px;">
        <button id="edit" class="labelRadio mr-3"><i class="fas fa-check"></i></button><span style="font-weight:200; font-size: large;"> Edit</span> <br><br>
        <button class="labelRadio mr-3"><i class="fas fa-check"></i></button><span style="font-weight:200; font-size: large;"> Find path</span><br><br>
    </div>
    <div id="save">
        {{-- <button style="position: absolute; right: 20px;" class="btn-gradient btn-generate mt-3">Save</button> --}}
    </div>
    

    <script>

        // Canvas

        let canvas = document.querySelector('#canvas');
        let ctx = canvas.getContext('2d');

        ctx.canvas.width = (window.innerWidth - 20);
        ctx.canvas.height = (window.innerHeight - 20);

        // Edit

        let editRadio = document.querySelector('#edit');
        let saveDiv = document.querySelector('#save');
        
        window.addEventListener('click', function(){
            if(editRadio == document.activeElement){
                saveDiv.innerHTML = `<button style="position: absolute; right: 20px;" class="btn-gradient btn-generate mt-3">Save</button>`;
            }
            else{
                saveDiv.innerHTML = ``;
            }
        });

        // Collapse

        let collapseWorldTrue = false;
        let collapseNodeTrue = false;
        let world_info = document.querySelector('#world_info');
        let node_info = document.querySelector('#node_info');

        function collapseWorld(){
           
           if(collapseWorldTrue == false){
                collapseWorldTrue = true;
                world_info.style.margin = '1.5rem';
                world_info.innerHTML = `    <div class="row">
                                                <div class="col-lg-6">
                                                    <h2>Description</h2>
                                                    <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor molestias recusandae soluta earum perspiciatis facere dicta dignissimos eum tempore corrupti!</p>
                                                </div>
                                                <div class="col-lg-6">
                                                    <h2>Worldinfo</h2>
                                                    <p>Name: </p>
                                                    <p>Type: </p>
                                                    <p>Number of nodes: </p>
                                                </div>
                                            </div>`;
           }
           else{
               collapseWorldTrue = false;
               world_info.style.margin = '0px';
               world_info.innerHTML = ``;
           }
        }

        function collapseNode(){
            if(collapseNodeTrue == false){
                collapseNodeTrue = true;
                node_info.style.margin = '1.5rem';
                node_info.style.marginRight = '3rem';
                node_info.style.marginLeft = '3rem';
                node_info.innerHTML = `<div class="row" >
                    <div class="col-lg-4">
                        <p >Name:</p>
                    </div>
                    <div class="col-lg-4">
                        <p>Id: </p>
                    </div>
                    <div class="col-lg-4">
                        <p>Exits:</p>
                    </div>
                </div>

                <div class="row" style="font-weight: 300;">
                    <div class="col-lg-4">
                        <p>nAMEoFtHEfIRSTnODE</p>
                    </div>
                    <div class="col-lg-4">
                        <p>1</p>
                    </div>
                    <div class="col-lg-4">
                        <p>4, 2</p>
                    </div>
                </div>

                <div class="row" style="font-weight: 300;">
                    <div class="col-lg-4">
                        <p>nAMEoFtHEsECONDnODE</p>
                    </div>
                    <div class="col-lg-4">
                        <p>2</p>
                    </div>
                    <div class="col-lg-4">
                        <p>1, 2</p>
                    </div>
                </div>

                <div class="row" style="font-weight: 300;">
                    <div class="col-lg-4">
                        <p>nAMEoFtHEtHIRDnODE</p>
                    </div>
                    <div class="col-lg-4">
                        <p>3</p>
                    </div>
                    <div class="col-lg-4">
                        <p>2, 4</p>
                    </div>
                </div>

                <div class="row" style="font-weight: 300;">
                    <div class="col-lg-4">
                        <p>nAMEoFtHEfOURTHnODE</p>
                    </div>
                    <div class="col-lg-4">
                        <p>4</p>
                    </div>
                    <div class="col-lg-4">
                        <p>3, 1</p>
                    </div>
                </div> `;
           }
           else{
               collapseNodeTrue = false;
               node_info.style.margin = '0px';
               node_info.innerHTML = ``;
           }
        }



    </script>


@endsection