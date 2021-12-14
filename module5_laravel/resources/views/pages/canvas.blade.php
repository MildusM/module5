@extends('layouts/app')

@section('content')

    <canvas id="canvas"></canvas> 
        
    <div class="gradient canvas-btn">
        <a href="/edit/{{$world_id}}"><button class="btn btn-light">Edit</button></a>
        <button class="btn btn-outline-light">Delete</button>
    </div>

    <a href="/load/noOrder"><button class="fs-4 go-back-c btn"><i class="fal fa-chevron-left mr-1"></i><span style="margin-left: 10px">Go back</span></button></a>

        

    
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
        <script src="{{asset('js/canvasScript.js')}}"></script>

@endsection