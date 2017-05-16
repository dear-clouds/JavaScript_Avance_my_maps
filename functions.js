var previousPosition = null;
var map;
var panel;
var direction;




function initialize() {
  map = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 19,
    center: new google.maps.LatLng(48.858565, 2.347198),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });  

  panel    = document.getElementById('panel');

  direction = new google.maps.DirectionsRenderer({
    map   : map,
    panel : panel
  });

}

  // Vérification de la présence de la géolocalisation sur le navigateur du mec
  if (navigator.geolocation)
    var watchId = navigator.geolocation.watchPosition(successCallback,
      null,
      {enableHighAccuracy:true});
  else
    alert("Votre navigateur ne prend pas en compte la géolocalisation HTML5");   

  function successCallback(position){
    map.panTo(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
      map: map
    });
    if (previousPosition){
      var newLineCoordinates =
      [
      new google.maps.LatLng(previousPosition.coords.latitude, previousPosition.coords.longitude),
      new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
      ];

      var newLine = new google.maps.Polyline({
        path: newLineCoordinates,       
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2
      });
      newLine.setMap(map);
    }
    previousPosition = position;
  }

  // On calcule l'itinéraire now
  function calculate() {
    origin      = document.getElementById('origin').value;
    destination = document.getElementById('destination').value;
    if(origin && destination)
    {
      var request = {
        origin      : origin,
        destination : destination,
        travelMode  : google.maps.DirectionsTravelMode.DRIVING // Type de transport
      }
        var directionsService = new google.maps.DirectionsService(); // Service de calcul d'itinéraire
        directionsService.route(request, function(response, status){ // Envoie de la requête pour calculer le parcours
          if(status == google.maps.DirectionsStatus.OK){
                direction.setDirections(response); // Trace l'itinéraire sur la carte et les différentes étapes du parcours
              }
            });
      }
    };

    function rezize(){
      var mapCanvas = document.getElementById("map-canvas");
      
      if (mapCanvas.style.height == "100%"){
          mapCanvas.style.height = "600px";
      }
      else {
        mapCanvas.style.height = "100%";
      }      
    }