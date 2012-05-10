
function checkLocation() {
    var win = function(position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        var myLatlng = new google.maps.LatLng(lat, long);

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

/*
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
*/


/*
   function preventBehavior(e)
        {
      e.preventDefault();
    };
        document.addEventListener("touchmove", preventBehavior, false);

        function onBodyLoad()
        {
                document.addEventListener("deviceready", onDeviceReady, false);
        }

        function onDeviceReady()
        {
                // do your thing!

        var onSuccess = function(position) {

    document.getElementById('map').src="http://maps.googleapis.com/maps/api/staticmap?center="+ position.coords.latitude +","+ position.coords.longitude +"&amp;zoom=20&amp;size=300x300&amp;sensor=true";

        };

        // onError Callback receives a PositionError object

        function onError(error) {
        alert('code: '    + error.code    + 'n' +
          'message: ' + error.message + 'n');
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError);

        }
*/