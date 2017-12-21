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
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 14,
      center: emrBear
    });
    var marker = new google.maps.Marker({
      position: emrBear,
      map: map
    });
  }
