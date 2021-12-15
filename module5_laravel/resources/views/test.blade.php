<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Genealogy</title>

    <script src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>

    {{-- <script>

        
    </script> --}}

    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
    <link rel="stylesheet" href="{{asset('css/style.css')}}">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100;200;500&family=Red+Hat+Mono:wght@300&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="https://rsms.me/inter/inter.css">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v6.0.0-beta2/css/all.css">
</head>
<body class="min-h-screen flex flex-col">
    <div id="msg">This message</div>

    <?php
         echo Form::button('Replace Message',['onClick'=>'getMessage()']);
      ?>


    <script>
        function getMessage(){  
            $.ajax({
                type: 'POST',
                url: '/getmsg',
                data: '_token = <?php echo csrf_token() ?>',
                success:function(data){
                    $("#msg").html(data.msg);
                }
            });
        }
    </script>
</body>
</html>