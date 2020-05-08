mymap = L.map('mapid').setView([25, 15], 2);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 13,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiY2VjaWxpYS04NiIsImEiOiJjazl3eDdoZ3cwNXViM2dsaXR4NWF2cmVyIn0.0NitNMOdk7g1iy_6M1Ce2g'
}).addTo(mymap);



var Marker = L.marker([-22.951993, -43.210439]).addTo(mymap);
var marker = L.marker([51.607041, 4.806905]).addTo(mymap);
var marker = L.marker([34.967272, 135.772833]).addTo(mymap);
var marker = L.marker([-37.917560, 144.986645]).addTo(mymap);

var marker = L.marker([40.776732, -73.972616]).addTo(mymap);
var marker = L.marker([40.706272, -73.996853]).addTo(mymap);
var marker = L.marker([51.442101, -116.162161]).addTo(mymap);
var marker = L.marker([-50.942461, -73.406777]).addTo(mymap);
var marker = L.marker([-17.676188, 177.107665]).addTo(mymap);
var marker = L.marker([37.020273, -7.934688]).addTo(mymap);
var marker = L.marker([11.484446, 104.901992]).addTo(mymap);
var marker = L.marker([40.689461, -74.044511]).addTo(mymap);
var marker = L.marker([37.011409, -7.934471]).addTo(mymap);

