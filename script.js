const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiZGF2ZS1odWdoZXMiLCJhIjoiY2t3Z3BkZWV6MHFsNzJvcDk5aGhycm1jYyJ9.8NwpLaFMjlM2xj0tqP9nWw'

var map = new mapboxgl.Map({
    accessToken : MAPBOX_ACCESS_TOKEN,
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL

});

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { enableHighAccuracy: true})

function setupMap(centerPosition) {
    var map = new mapboxgl.Map({
    accessToken : MAPBOX_ACCESS_TOKEN,
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: centerPosition,
    zoom: 15
});
const navigationControls = new mapboxgl.NavigationControl()
map.addControl(navigationControls)

const directionControls = new MapboxDirections({
    accessToken: MAPBOX_ACCESS_TOKEN
})
map.addControl(directionControls, 'top-left')

}

const directionControls = new MapboxDirections({
    accessToken: MAPBOX_ACCESS_TOKEN
})

function successLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
    setupMap([-157.86, 21.30])
    console.log('Could not find your location. Check out Honolulu.')
}