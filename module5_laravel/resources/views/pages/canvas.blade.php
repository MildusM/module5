@extends('layouts/app')

@section('content')

    <canvas id="canvas" class="viewCanvas"></canvas>
        
        <div class="gradient canvas-btn">
            <a href="/edit/{{$world_id}}"><button class="btn btn-light">Edit</button></a>

            {{-- <button class="btn btn-outline-light">Delete</button> --}}

            {{Form::open(array('action' => array('App\Http\Controllers\worldsController@delete',$world_id), 'method' => 'get', 'enctype' => 'multipart/form-data', 'class' => 'delete-btn'))}}
                {{-- {{Form::hidden('_method', 'DELETE')}}
                {{Form::text('test2', '', ['placeholder' => 'test2'])}} --}}
                {{Form::submit('Delete', ['class' => 'btn btn-outline-light'])}}
            {{Form::close()}}

            {{-- <form action="/load/noOrder" method="GET">
                <button type="submit" class="btn btn-outline-light">Delete</button>
            </form> --}}

            <a href="/load/noOrder"><button class="fs-4 go-back-c btn"><i class="fal fa-chevron-left mr-1"></i><span style="margin-left: 10px">Go back</span></button></a>
        </div>

    {{-- <script>


        let canvas = document.querySelector('#canvas');
        let ctx = canvas.getContext('2d');

        ctx.canvas.width = (window.innerWidth);
        ctx.canvas.height = (window.innerHeight);
        
    </script> --}}

@endsection