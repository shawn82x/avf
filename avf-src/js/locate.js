
/*
var watchID = null;
    // Wait for Cordova to load
    //
    document.addEventListener("deviceready", onDeviceReady, false);

    // Cordova is ready
    //
    function onDeviceReady() {
        navigator.alert('Cordova is ready');
    }

    function getCurrentPosition() {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);    
    }
        
    function watchPosition() {
        // Update every 3 seconds
        var options = { frequency: 3000 };
        watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);        
    }
    // onSuccess Geolocation
    //
    function onSuccess(position) {
        var element = document.getElementById('geolocation');
        element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
                            'Longitude: '          + position.coords.longitude             + '<br />' +
                            'Altitude: '           + position.coords.altitude              + '<br />' +
                            'Accuracy: '           + position.coords.accuracy              + '<br />' +
                            'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
                            'Heading: '            + position.coords.heading               + '<br />' +
                            'Speed: '              + position.coords.speed                 + '<br />' +
                            'Timestamp: '          + new Date(position.timestamp)          + '<br />';
    }

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
*/



/*
function checkLocation() {
    var win = function(position) {
        var lat = position.coords.latitude;
        var longi = position.coords.longitude;
        var myLatlng = new google.maps.LatLng(lat, longi);

        var myOptions = {
            center: myLatlng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.HYBRID
        };
        map_element = document.getElementById("map_canvas");
        map = new google.maps.Map(map_element, myOptions);
    };

    var fail = function(e) {
        $.mobile.hidePageLoadingMsg();
        alert('Can\'t retrieve position.\nError: ' + e);
    };

    watchID = navigator.geolocation.getCurrentPosition(win, fail);
}
*/


function loader() {
        var state = document.readyState;
        if (state == 'loaded' || state == 'complete') {
                run();
        } else {
                if (navigator.userAgent.indexOf('Browzr') > -1) {
                setTimeout(run, 250);
                } else {
                document.addEventListener('deviceready',run,false);
                }
        }
}

function run() {
        var win = function(position) {                          // Grab coordinates object from the Position object passed into success callback.
                var coords = position.coords;
                // Call for static google maps data - make sure you use your own Google Maps API key!
                var url = "http://maps.google.com/maps/api/staticmap?center=" + coords.latitude + "," + coords.longitude + "&zoom=11&size=200x200&maptype=roadmap&key=MyGoogleMapsAPIKey&sensor=true";
                document.getElementById('map').setAttribute('src',url);
        };
        var fail = function(e) {
                alert('Can\'t retrieve position.\nError: ' + e);
        };
        navigator.geolocation.getCurrentPosition(win, fail);
        } 

