let marker, map;

function initMap() {
    const posicion = {
    lat: -25.363,
    lng: 131.044,
    };

    map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: posicion,
    });
    
    const chinchetas = [
        {lat: -25.363, lng: 131.044},
        { lat: 17.986425400, lng: -66.830322270}, 
        { lat: 48.858296, lng: 2.294479},
        { lat: -34.600551, lng: -58.377518},
    ];
    for (let i = 0; i < chinchetas.length; i++) {
        const marker = new google.maps.Marker({
        position: chinchetas[i],
        map,
        title: "Chincheta " + i,
        });
    }
    //Obtener geolocalizacion


}


//     marker.push(
//     new google.maps.Marker({
//         position: {
//         lat: 43.288773445332524,
//         lng: -2.163845628766325,
//         },
//         map,
//         title: "Zarautz",
//     })
//     );
//     marker.push(
//     new google.maps.Marker({
//         position: {
//         lat: 36.164983935422484,
//         lng: -86.78260332112534,
//         },
//         map,
//         title: "Nashville",
//     })
//     );
//     marker.push(
//     new google.maps.Marker({
//         position: {
//         lat: 36.242150706885596,
//         lng: -6.0775131009957715,
//         },
//         map,
//         title: "El Palmar",
//     })
//     );
// }