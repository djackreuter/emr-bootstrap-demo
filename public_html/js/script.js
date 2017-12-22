$(function() {
    $('body').scrollspy({
        target: '#navbar'
    });
});


function initMap() {
    var emrBear = {
        lat: 35.675110,
        lng: -105.962104
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: emrBear
    });

    var infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);

    service.getDetails({
        placeId: 'ChIJoRoGb3pQGIcRFp_otOPZtE0'
    }, function(place, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            var marker = new google.maps.Marker({
                map: map,
                position: place.geometry.location
            });
            google.maps.event.addListener(marker, 'click', function() {
                infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
                    place.formatted_address + '</div>');
                infowindow.open(map, this);
            });
        }
    });
}