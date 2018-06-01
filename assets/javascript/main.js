$(document).ready(function(){

  function myMap() {
    var mapCanvas = document.getElementById("map");
    var myCenter = new google.maps.LatLng(38.923651, -77.052262);
    var mapOptions = {center: myCenter, zoom: 19};
    var map = new google.maps.Map(mapCanvas,mapOptions);
    var marker = new google.maps.Marker({
        position: myCenter,
        animation: google.maps.Animation.BOUNCE
        });
    marker.setMap(map);
}

myMap()




});
