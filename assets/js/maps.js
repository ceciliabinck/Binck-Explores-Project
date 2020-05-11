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
    latitude: 51.607041,
    longitude: 4.806905,
    image:"assets/img/Gallery/netherlands/sunrise-waterfields.jpg",
    alt:"The sun coming up over the waterfields", 
},
{
    country: "Japan",
    latitude: 34.967155,
    longitude: 135.772675,
    image:"assets/img/Gallery/japan/fushimi-shrine.jpg",
    alt:"Thousands of shrines line the path up and down the a mountain", 
},
{
    country: "Australia",
    latitude: -37.917560,
    longitude: 144.986645,
    image:"assets/img/Gallery/australia/beach-houses.jpg",
    alt:"Some of the famouse beach houses", 
},
{
    country: "United States",
    latitude: 40.689461,
    longitude: -74.044511,
    image:"assets/img/Gallery/america/lady-liberty.jpg",
    alt:"View from the ferry of Lady of liberty", 
},
{
    country: "United States",
    latitude: 40.776732,
    longitude: -73.972616,
    image:"assets/img/Gallery/america/buildings-centralpark.jpg",
    alt:"Buildings at the lake in central Park", 
},
{
    country: "United States",
    latitude: 40.706272,
    longitude: -73.996853,
    image:"assets/img/Gallery/america/brooklyn-bridge.jpg",
    alt:"The famous Brooklyn bridge", 
},
{
    country: "Canada",
    latitude: 51.442101,
    longitude: -116.162161,
    image:"assets/img/Gallery/canada/view-ski-lakelouise.jpg",
    alt:"One of the many views while skiing at Lake Louise Ski Resort", 
},
{
    country: "Chili",
    latitude: -50.942461,
    longitude: -73.406777,
    image:"assets/img/Gallery/chili/torres-del-paine.jpg",
    alt:"View from the lake at Torres Del Paine", 
},
{
    country: "Fiji",
    latitude: -17.676188,
    longitude: 177.107665,
    image:"assets/img/Gallery/fiji/hammock-at-beach.jpg",
    alt:"Hammocks hanging on palmtrees at the beach", 
},
{
    country: "Cambodia",
    latitude: 11.484446,
    longitude: 104.901992,
    image:"assets/img/Gallery/cambodia/bracelet-memorial.jpg",
    alt:"A braclet memorial at one of the massgraves", 
},
{
    country: "Portugal",
    latitude: 37.020273,
    longitude: -7.934688,
    image:"assets/img/Gallery/",
    alt:"", 
},
{
    country: "Portugal",
    latitude: 37.011409,
    longitude: -7.934471,
    image:"assets/img/Gallery/portugal/train.jpg",
    alt:"A train that is passing by", 
}, 
{
    country: "Netherlands",
    latitude: 51.570160,
    longitude: 4.651572,
    image:"assets/img/Gallery/netherlands/water-lily.jpg",
    alt:"A water lily in the pound close to home", 
},
{
    country: "Japan",
    latitude: 35.710078,
    longitude: 139.810696,
    image:"assets/img/Gallery/japan/tokyo-skytree.jpg",
    alt:"a close view of the Tokyo Skytree at night", 
},
{
    country: "Japan",
    latitude: 35.027055,
    longitude: 135.798194,
    image:"assets/img/Gallery/japan/higashiyama-jisho-ji.jpg",
    alt:"View of the house from the other side of the pound", 
}
];

markers.map(visit => {
    marker = L.marker(L.latLng(visit.latitude, visit.longitude)).addTo(map).bindPopup(`<img class="img-fluid" src="${visit.image}" alt="${visit.alt}"/>`);
});

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