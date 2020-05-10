map = L.map('mapid').setView([25, 15], 2);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 13,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiY2VjaWxpYS04NiIsImEiOiJjazl3eDdoZ3cwNXViM2dsaXR4NWF2cmVyIn0.0NitNMOdk7g1iy_6M1Ce2g'
}).addTo(map);


let markers = [{
    country: "Netherlands",
    coordinates: "[51.607041, 4.806905]",
    image:"assets/img/Gallery/netherlands/sunrise-waterfields.jpg",
    alt:"The sun coming up over the waterfields", 
},
{
    country: "Japan",
    coordinates: "[34.967155, 135.772675]",
    image:"assets/img/Gallery/japan/fushimi-shrine.jpg",
    alt:"Thousands of shrines line the path up and down the a mountain", 
},
{
    country: "Australia",
    coordinates: "[-37.917560, 144.986645]",
    image:"assets/img/Gallery/australia/beach-houses.jpg",
    alt:"Some of the famouse beach houses", 
},
{
    country: "United States",
    coordinates: "[40.689461, -74.044511]",
    image:"assets/img/Gallery/america/lady-liberty.jpg",
    alt:"View from the ferry of Lady of liberty", 
},
{
    country: "United States",
    coordinates: "[40.776732, -73.972616]",
    image:"assets/img/Gallery/america/buildings-centralpark.jpg",
    alt:"Buildings at the lake in central Park", 
},
{
    country: "United States",
    coordinates: "[40.706272, -73.996853]",
    image:"assets/img/Gallery/america/brooklyn-bridge.jpg",
    alt:"The famous Brooklyn bridge", 
},
{
    country: "Canada",
    coordinates: "[51.442101, -116.162161]",
    image:"assets/img/Gallery/canada/view-ski-lakelouise.jpg",
    alt:"One of the many views while skiing at Lake Louise Ski Resort", 
},
{
    country: "Chili",
    coordinates: "[-50.942461, -73.406777]",
    image:"assets/img/Gallery/chili/torres-del-paine.jpg",
    alt:"View from the lake at Torres Del Paine", 
},
{
    country: "Fiji",
    coordinates: "[-17.676188, 177.107665]",
    image:"assets/img/Gallery/fiji/hammock-at-beach.jpg",
    alt:"Hammocks hanging on palmtrees at the beach", 
},
{
    country: "Cambodia",
    coordinates: "[11.484446, 104.901992]",
    image:"assets/img/Gallery/cambodia/bracelet-memorial.jpg",
    alt:"A braclet memorial at one of the massgraves", 
},
{
    country: "Portugal",
    coordinates: "[37.020273, -7.934688]",
    image:"assets/img/Gallery/",
    alt:"", 
},
{
    country: "Portugal",
    coordinates: "[37.011409, -7.934471]",
    image:"assets/img/Gallery/portugal/train.jpg",
    alt:"A train that is passing by", 
}
];

let marker = L.marker(markers.coordinates).addTo(map).bindPopup(`<img class="img-fluid" src="${markers.image}" alt="${markers.alt}">`);

/*markers.map(visit => {
    marker = L.marker(visit.coordinates).addTo(map).bindPopup(`<img class="img-fluid" src="${visit.image}" alt="${visit.alt}">`);
    marker = "";
});*/

/**
 * Netherlands
 
var marker = L.marker([51.607041, 4.806905]).addTo(map).bindPopup(`<img class="img-fluid" src="assets/img/Gallery/netherlands/sunrise-waterfields.jpg" alt="The sun coming up over the waterfields"/>`).openPopup();

/**
 * Japan
 
var marker = L.marker([34.967155, 135.772675]).addTo(map).bindPopup(`<img class="img-fluid" src="assets/img/Gallery/japan/fushimi-shrine.jpg" alt="Thousands of shrines line the path up and down the a mountain"/>`).openPopup();

/**
 * Australia
 
var marker = L.marker([-37.917560, 144.986645]).addTo(map).bindPopup(`<img class="img-fluid" src="assets/img/Gallery/australia/beach-houses.jpg" alt="Some of the famouse beach houses"/>`).openPopup();
/**
 * United States
 
var marker = L.marker([40.689461, -74.044511]).addTo(map).bindPopup(`<img class="img-fluid" src="assets/img/Gallery/america/lady-liberty.jpg" alt="View from the ferry of Lady of liberty"/>`).openPopup();
var marker = L.marker([40.776732, -73.972616]).addTo(map).bindPopup(`<img class="img-fluid" src="assets/img/Gallery/america/buildings-centralpark.jpg" alt="Buildings at the lake in central Park"/>`).openPopup();
var marker = L.marker([40.706272, -73.996853]).addTo(map).bindPopup(`<img class="img-fluid" src="assets/img/Gallery/america/brooklyn-bridge.jpg" alt="The famous Brooklyn bridge"/>`).openPopup();
/**
 * Canada
 
var marker = L.marker([51.442101, -116.162161]).addTo(map).bindPopup(`<img class="img-fluid" src="assets/img/Gallery/canada/view-ski-lakelouise.jpg" alt="One of the many views while skiing at Lake Louise Ski Resort"/>`).openPopup();

/**
 * Chili
 
var marker = L.marker([-50.942461, -73.406777]).addTo(map).bindPopup(`<img class="img-fluid" src="assets/img/Gallery/chili/torres-del-paine.jpg" alt="View from the lake at Torres Del Paine"/>`).openPopup();
/**
 * Fiji
 
var marker = L.marker([-17.676188, 177.107665]).addTo(map).bindPopup(`<img class="img-fluid" src="assets/img/Gallery/fiji/hammock-at-beach.jpg" alt="Hammocks hanging on palmtrees at the beach"/>`).openPopup();

/**
 * Cambodia
 
var marker = L.marker([11.484446, 104.901992]).addTo(map).bindPopup(`<a id="bracelet"><img class="img-fluid" src="assets/img/Gallery/cambodia/bracelet-memorial.jpg" alt="A braclet memorial at one of the massgraves"/></a>`).openPopup();
/**
 * Portugal
 
var marker = L.marker([37.020273, -7.934688]).addTo(map).bindPopup(`<img class="img-fluid" src="assets/img/Gallery/" alt=""/>`).openPopup();
var marker = L.marker([37.011409, -7.934471]).addTo(map).bindPopup(`<img class="img-fluid" src="assets/img/Gallery/portugal/train.jpg" alt="An passing train"/>`).openPopup();
*/

var searchControl = L.esri.Geocoding.geosearch().addTo(map);

var results = L.layerGroup().addTo(map);
searchControl.on("results", function (data) {
    results.clearLayers();
    for (var i = data.results.length - 1; i >= 0; i--) {
        results.addLayer(L.marker(data.results[i].latlng)
        .bindPopup(data.results[0].text)
        .bindTooltip(data.results[0].text));

        // code by: Tim Nelson (https://github.com/TravelTimN)
        $(".geocoder-control-input").on("click", function () {
            currentZoom = map.getZoom();
            if (currentZoom > 7) {
                newZoom = 7;
                currentBounds = map.getBounds();
                centLat = (Math.floor(currentBounds._northEast.lat)
                + Math.floor(currentBounds._southWest.lat)) / 2;
                centLng = (Math.floor(currentBounds._northEast.lng)
                + Math.floor(currentBounds._southWest.lng)) / 2;
                map.flyTo([centLat, centLng], newZoom);
            }
        });
    }
});

map.fitBounds([
    [80.198051, -169.183732],
    [-57.050779, 178.104246]
]);

$(".img-fluid").click(function() {
    /**
     * Makes sure the id is empty before beginning
     */

    $('#modal-img').empty();
    $("#descript").empty();
    /**
     * The path to get the data
     */

    let imageSource = $(this).attr("src");
    let imageDescription = $(this).attr("alt")

    /**
     * putting the data in the modal
     */

    $("#modal-img").append(`<img class="img-fluid" src="${imageSource}"/>`);
    $("#descript").append(`<p>${imageDescription}</p>`);
})

