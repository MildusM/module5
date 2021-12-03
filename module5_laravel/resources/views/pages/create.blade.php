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

    <div class="mt-5 center section">

        <div class="container">
            <form action="#">
                <div class="row">
                    <div class="col-lg-4">
                        <input class="input" type="text" required placeholder="Name of your world...">
                    </div>
                    <div class="col-lg-4">
                        <select onchange="selected()" name="" id="options" class="input">
                            <option class="no_order" value="no_order" disabled selected>Type of world</option>
                            <option class="no_order" value="no_order">Rectangular</option>
                            <option class="popularity" value="popularity">Circular</option>
                            <option class="latest" value="latest">Branch</option>
                        </select>
                    </div>
                    <div class="col-lg-4 type-values">
                        {{-- <input type="text"> --}}
                    </div>
                </div>
                <br><br><br><br>
                <button class="btn-gradient">Generate</button>

            </form>
        </div>

    </div>




@endsection