@extends('layouts/app')

@section('content')

    <div class="index">

        <div class="container text-center" style="width: 100%; ">

            <div class="title">
                <h1 style="font-size: 100px;">Genealogy</h1>
            </div>
            <div class="subheading">
                <p>Create or load your world. Every world contains nodes structured as a circle, rectangle, or branch.</p>
            </div>
            <div class="buttons row">
                <div class="col-lg-6">
                    <a href="/create" class="btn btn-lg btn-gradient">Create</a>
                </div>
                <div class="col-lg-6">
                    <a href="/load/noOrder" class="btn btn-lg btn-outline-gradient"><span>Load</span></a>
                </div>
            </div>
            


        </div>

    </div>

@endsection