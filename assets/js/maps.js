var map = l.map("mapid").setView([0, 0], 1);

L.tilelayer("https://api.maptiler.com/maps/topo/{z}/{x}/{y}.png?key=XDLrWwttX86zuGfbH7sI", {
attribution: "<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>"
}).addTo(mapid);

var marker = L.marker([51.5, -0.09]).addTo(mapid);