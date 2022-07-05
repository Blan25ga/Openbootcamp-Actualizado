let marker, map;

function initMap() {
    
    const posicion = { lat: -25.344, lng: 131.031 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: posicion,
    });
    // The marker, positioned at Uluru
    marker = new google.maps.Marker({
        position: posicion,
        map,
        title: "Uluru (Ayers Rock)",
    });


    // Obtener geolocalizacion
    function geoPosiciona() {
        if (navigator.geolocation) {
        const geoLoc = navigator.geolocation;
        const options = { timeout:60000}
        const watchPos = geoLoc.watchPosition(centrarMapa, onError, options)
            
        } else {
            alert("No soporta geolocalización");
        }
        
    }

    function centrarMapa(position) {
        const nuevaPos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        }
        marker.setPosition(nuevaPos);
        map.setCenter(nuevaPos);
    }

    function onError(error) {
        console.error(error);
    }
}
