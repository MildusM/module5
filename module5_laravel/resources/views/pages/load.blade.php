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
        
        <select name="orderBy" id="orderByWorld" class="input orderBy">
            <option value="" disabled selected>Order By</option>
            <option value="">Latest</option>
            <option value="">A-Z</option>
            <option value="">Z-A</option>
        </select>

        <div class="loadWorlds">

            <div class="row listTitles">
                <div class="col-lg-3"></div>
                <div class="col-lg-3">name</div>
                <div class="col-lg-3">type</div>
                <div class="col-lg-3">number of nodes</div>
            </div>
            
        
            <div class="row worldValues">

                <div class="col-lg-3 radioInput">
                    <button class="labelRadio"><i class="fas fa-check"></i></button>
                </div>
                <div class="col-lg-3">
                    <p>nAMEoFtHEwORLD</p>
                </div>
                <div class="col-lg-3">
                    <p>Branch</p>
                </div>
                <div class="col-lg-3">
                    <p>15</p>
                </div>

            </div>

            <div class="row worldValues">
                
                <div class="col-lg-3 radioInput">
                    <button class="labelRadio"><i class="fas fa-check"></i></button>
                </div>
                <div class="col-lg-3">
                    <p>nAMEoFtHEwORLD2</p>
                </div>
                <div class="col-lg-3">
                    <p>Circular</p>
                </div>
                <div class="col-lg-3">
                    <p>4</p>
                </div>

            </div>

            <a href="/canvas"><button class="btn-gradient load-btn">Load</button></a>

        </div>

        

        

    </div>

    

@endsection