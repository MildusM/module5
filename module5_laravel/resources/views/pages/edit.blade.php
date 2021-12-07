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

            <div class="container" id="node_info">
                

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
    {{-- <canvas id="canvas"></canvas><br><br> --}}
    <canvas id="canvas" class="" style="border: 1px solid #333;"></canvas> 

    <img src="./module5_laravel/media" alt="" id="source">

    <div style="position: absolute; left: 50px;">
        <button id="edit" class="labelRadio mr-3"><i class="fas fa-check"></i></button><span style="font-weight:200; font-size: large;"> Edit</span> <br><br>
        <button class="labelRadio mr-3"><i class="fas fa-check"></i></button><span style="font-weight:200; font-size: large;"> Find path</span><br><br>
    </div>
    <div id="save">
        {{-- <button style="position: absolute; right: 20px;" class="btn-gradient btn-generate mt-3 btn-save">Save</button> --}}
    </div>
    

    <script>

        // Canvas 

        let canvas = document.querySelector('#canvas');
        let ctx = canvas.getContext('2d');

        ctx.canvas.width = (window.innerWidth - 20);
        ctx.canvas.height = (window.innerHeight - 20);

        // Shapes

        // // fillRect
        // ctx.fillStyle = 'red';
        // ctx.fillRect(50, 50, 150, 100);

        // ctx.fillStyle = 'blue';
        // ctx.fillRect(300, 50, 150, 100);

        // // strokeRect
        // ctx.strokeStyle = 'green';
        // ctx.lineWidth = 5;
        // ctx.strokeRect(100, 200, 150, 100);

        // // clearReact
        // ctx.clearRect(55, 55, 140, 90);

        // // fillText
        // ctx.fillStyle = 'purple';
        // ctx.font = '30px Arial';
        // ctx.fillText('Hello World', 400, 50);

        // // strokeText
        // ctx.lineWidth = 1;
        // ctx.strokeStyle = 'orange';
        // ctx.strokeText('Hello World', 400, 100);


        // Paths

        // // Triangle
        // ctx.beginPath();
        // ctx.moveTo(50, 50);

        // ctx.lineTo(150, 50);

        // ctx.lineTo(100, 200);

        // // ctx.lineTo(50, 50);
        // ctx.closePath();

        // ctx.fillStyle = 'coral';
        // ctx.fill();
        // // ctx.stroke();


        // ctx.beginPath();
        // ctx.moveTo(200, 50);

        // ctx.lineTo(150, 200);

        // ctx.lineTo(250, 200);

        // ctx.closePath();

        // ctx.stroke();


        // // Rectangle
        // ctx.beginPath();
        // ctx.rect(300, 50, 150, 100);
        // ctx.fillStyle = 'teal';
        // ctx.fill();

        // Arc (circles)

        // const centerX = canvas.width/2;
        // const centerY = canvas.height/2;

        // ctx.beginPath();
        
        // // Draw head
        // ctx.arc(centerX, centerY, 200, 0, Math.PI * 2);

        // // Move to Mouth
        // ctx.moveTo(centerX + 100, centerY);

        // // Draw Mouth
        // ctx.arc(centerX, centerY, 100, 0, Math.PI, false);

        // // Move to Left Eye
        // ctx.moveTo(centerX - 60, centerY - 80);

        // // Draw Left Eye
        // ctx.arc(centerX - 80, centerY - 80, 20, 0, Math.PI * 2);

        // // Move To Right Eye
        // ctx.moveTo(centerX + 100, centerY - 80);

        // // Draw Right Eye
        // ctx.arc(centerX + 80, centerY - 80, 20, 0 , Math.PI * 2);

        // ctx.stroke();


        // // Animation 1

        // const circle = {
        //     x: 200,
        //     y: 200,
        //     size: 30,
        //     dx: 5,
        //     dy: 4
        // }

        // function drawCircle(){
        //     ctx.beginPath();
        //     ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
        //     ctx.fillStyle = 'purple';
        //     ctx.fill();
        // }

        // function update(){
        //     ctx.clearRect(0, 0, canvas.width, canvas.height);

        //     drawCircle();

        //     // change position
        //     circle.x += circle.dx;
        //     circle.y += circle.dy;

        //     // detect sidewalls
        //     if(circle.x + circle.size > canvas.width || circle.x - circle.size < 0){
        //         circle.dx *= -1; 
        //         // circle.dy *= -1; 
        //     }

        //     // detect top and bottom walls
        //     if(circle.y + circle.size > canvas.height || circle.y - circle.size < 0){
        //         circle.dy *= -1;
        //     }

        //     requestAnimationFrame(update);
        // }

        // update();





        // Animation 2 - Character

        const image = document.querySelector('source');

        const player = {
            w: 50,
            h: 70,
            x: 20,
            y: 200,
            speed: 5,
            dx: 0,
            dy: 0
        };

        function drawPlayer(){

        }

        








        // ctx.beginPath();
        // ctx.strokeStyle = 'red';
        // ctx.arc(100, 75, 50, 0, 2 *Math.PI);
        // ctx.stroke();
        // ctx.fill();
        // ctx.fillRect(25,25,100,100)

        // ctx.fillRect(25, 25, 100, 100);
        // ctx.clearRect(45, 45, 60, 60);

        

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

        let world_data_info = {!! json_encode($world_data) !!};
         console.log(world_data_info);
         
         let node_data_info = {!! json_encode($node_data) !!};
         console.log(node_data_info);
         
        let node_number = {!! json_encode($test) !!};
         console.log(node_number[0]['COUNT(*)']);

        function collapseWorld(){

            // let blabla = world_data_info['world_description'];
           
           if(collapseWorldTrue == false){
                collapseWorldTrue = true;
                world_info.style.margin = '1.5rem';
                world_info.innerHTML = `    <div class="row">
                                                <div class="col-lg-6">
                                                    <h2>Description</h2>
                                                    <p class="">${world_data_info['world_description']}</p>
                                                </div>
                                                <div class="col-lg-6">
                                                    <h2>Worldinfo</h2>
                                                    <p>Name: ${world_data_info['world_name']}</p>
                                                    <p>Type: ${world_data_info['world_type']}</p>
                                                    <p>Number of nodes: ${node_number[0]['COUNT(*)']}</p>
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
                        <p >Name: </p>
                    </div>
                    <div class="col-lg-4">
                        <p>Id: </p>
                    </div>
                    <div class="col-lg-4">
                        <p>Exits:</p>
                    </div>
                </div>`;
                for(let i = 0; i < 3; i++){

                
                node_info.innerHTML += `

                <div class="row" style="font-weight: 300;">
                    <div class="col-lg-4">
                        <p>${node_data_info[i]['node_name']}</p>
                    </div>
                    <div class="col-lg-4">
                        <p>${node_data_info[i]['id']}</p>
                    </div>
                    <div class="col-lg-4">
                        <p>${node_data_info[i]['node_exits']}</p>
                    </div>
                </div>`;
           }}
           else{
               collapseNodeTrue = false;
               node_info.style.margin = '0px';
               node_info.innerHTML = ``;
           }
        }



    </script>


@endsection