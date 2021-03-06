---
---
var CURRENT_MARKER_COLOR = "#f86767";
$(document).ready(function(){
    L.mapbox.accessToken = "pk.eyJ1IjoiZGJvbmxpbmUiLCJhIjoiNmtQLUNuVSJ9.NH129qs3Mu-tWPspZuuOuQ"
    window.map = L.mapbox.map('current-location-map', 'dbonline.jf680m39', {
        zoom: 4,
        worldCopyJump: true,
        zoomControl: false
    });
    new L.Control.Zoom({ position: 'topright' }).addTo(window.map);
    window.featureLayer = L.mapbox.featureLayer()
        .addTo(map);

    featureLayer.on("layeradd", function(e) {
        try {
            var layer = e.layer;
            var props = e.layer.feature.properties;
            if (e.layer.feature.properties == undefined)
                return;
        } catch (err) {
            return;
        }
    });

    featureLayer.loadURL("{{site.url}}/assets/geo/current-location.geojson");
});
