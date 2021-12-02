<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Genealogy</title>

    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="{{asset('css/app.css')}}">

    <link rel="stylesheet" href="https://rsms.me/inter/inter.css">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v6.0.0-beta2/css/all.css">
</head>
<body class="min-h-screen flex flex-col">

    {{-- @include('./inc/header')

    @include('./inc/error') --}}

    @yield('content')

    {{-- @include('./inc/footer') --}}

</body>
</html>