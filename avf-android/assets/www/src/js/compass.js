// Wait for PhoneGap to load
    //
    document.addEventListener("deviceready", onDeviceReady, false);

    // PhoneGap is ready
    //
    function getMyHeading() {
        navigator.compass.getCurrentHeading(compassSuccess, compassError);
    }

    // onSuccess: Get the current heading
    //
    function compassSuccess(heading) {
        alert('Heading: ' + heading);
    }

    // onError: Failed to get the heading
    //
    function compassError() {
        alert('Compass Error!');
    }