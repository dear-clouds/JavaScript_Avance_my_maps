<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
  <meta charset="UTF-8">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css">

  <!-- Optional theme -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap-theme.min.css">

  <!-- Latest compiled and minified JavaScript -->
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
  <style type="text/css">
  html, body { margin: 0; padding: 0; background: black; width:100%; height: auto; color: gray;}
  #map-canvas { 
    width: 100%; height:600px;
    border-top: 5px solid #cca904;
    border-bottom: 5px solid #cca904;
  }

  #destinationForm {
    margin-top: 20px;
  }

  h1 {
    color: #cca904;
  }

  #full_screen_part {
    position: absolute;
    right: 0;
    margin-top: -40px;
    z-index: 999999;
  }

  #full_screen_part:hover {
    cursor: help;
  }

    #panel, .adp-directions, .adp-summary, .adp {
      color: white !important;
      text-align: center;
    }

   /* #panel {
      position: absolute;
      width: 400px;
      top: 0;
      background: black;
      height: 600px;
      overflow: scroll;
    }*/
  </style>


<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js"></script>
<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCnsqm-Fomx4lTBRZCVlBE3WG8xv5PT8nI&sensor=TRUE"></script>
<script type="text/javascript" src="functions.js"></script>
<script type="text/javascript" src="fullscreen.js"></script>
<script type="text/javascript" src="screenfull.js"></script>

</head>
<body onload="initialize()">
      

    <div id="destinationForm">
      <center><h1>_Trouve ton chemin_</h1>

     <form action="" method="get" name="direction" id="direction">
       <label>Point de départ :</label>
       <input type="text" name="origin" id="origin">
       <label>Destination :</label>
       <input type="text" name="destination" id="destination">
       <input type="button" value="Calculer l'itinéraire" onclick="javascript:calculate()">
     </form>
   </div>

    <div id="map-canvas" ></div>
   <img src="fullscreen.png" name="full_screen_part" id="full_screen_part" onclick="rezize()">


  
  
   

   

   <div id="panel"></div>

 </center>
</body>
</html>