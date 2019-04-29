<!DOCTYPE html>
<html lang="en">
<head>
  <base href="{{ url('/') }}">
  <meta charset="UTF-8">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">

  <link rel="stylesheet" href="{{ mix('css/app.css') }}">
</head>
<body>
  <div id="app"></div>

  <script>
    window.config=@json($config)
  </script>
  <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
