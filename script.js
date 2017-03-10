function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(43.589778, -79.659516),
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.TERRAIN
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}