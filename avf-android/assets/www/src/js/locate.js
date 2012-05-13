
function getMyLoc() {
  navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

function onSuccess(position) {
  var element = document.getElementById('geolocation');
  element.innerHTML = 
  'Latitude: '           + position.coords.latitude              + '<br />' +
  'Longitude: '          + position.coords.longitude             + '<br />' +
  'Altitude: '           + position.coords.altitude              + '<br />' +
  'Accuracy: '           + position.coords.accuracy              + '<br />' +
  'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />';
  $("#map").attr("src","http://maps.googleapis.com/maps/api/staticmap?center="+position.coords.latitude+","+position.coords.longitude+"&zoom=18&size=400x400&sensor=true");
}

function onError(error) {
  alert('code: '    + error.code    + '\n' +
        'message: ' + error.message + '\n');
}

