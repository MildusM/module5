@extends('layouts/app')

@section('content')

    {{-- Page intro --}}
    <div style="height: 350px;" class="gradient">
        <a href="/index"><button class="fs-4 go-back"><i class="fal fa-chevron-left mr-1"></i><span style="margin-left: 10px">Go back</span></button></a>

        <div class="page-intro">
            <h1 style="font-size: 100px;">Load</h1>
            <p style="font-size: large;">Here you can load the existent worlds that you can edit, delete or view.</p>
        </div>

    </div>

    {{-- Worlds --}}

    <div class="container load">

        <select onchange="selected()" name="orderByWorld" id="orderByWorld" class="input orderBy">
            <option value="" disabled selected>Order By</option>
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
            <option value="az">A-Z</option>
            <option value="za">Z-A</option>
            <option value="type">World Type</option>
        </select>

        <div class="loadWorlds">

            <div class="row listTitles">
                <div class="col-lg-3 col-sm-3"></div>
                <div class="col-lg-3 col-sm-3">name</div>
                <div class="col-lg-3 col-sm-3">type</div>
                <div class="col-lg-3 col-sm-3">number of nodes</div>
            </div>

            @foreach ($data as $world)
            <div class="row worldValues">

                <div class="col-lg-3 col-sm-3 radioInput radio-toolbar">
                        <input type="radio"  name="radioBtn" id="{{$world->id}}" class="loadRadio" value="{{$world->id}}">
                        <label for="{{$world->id}}"><i class="fas fa-check"></i></label>
                </div>
                <div class="col-lg-3 col-sm-3">
                    <p>{{$world->world_name}}</p>
                </div>
                <div class="col-lg-3 col-sm-3">
                    <p>{{$world->world_type}}</p>
                </div>
                <div class="col-lg-3 col-sm-3">
                    <p>{{$world->join('nodes', 'nodes.world_id', '=', 'worlds.id')->where('nodes.world_id', '=', $world->id)->count()}}</p>
                </div>

            </div>
            @endforeach

            <button class="btn-gradient load-btn" onclick="loadCanvas()">Load</button>

        </div>

        

        

    </div>

    <script>
        function selected() {
            let order = document.querySelector('#orderByWorld').value;
            window.location.href = `/load/${order}`;
        }

        function loadCanvas() {
            let id = document.querySelector('input[name = "radioBtn"]:checked').id;
            window.location.href = `/canvas/${id}`;
        }
    </script>
    

@endsection