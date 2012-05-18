

function onBodyLoad(){
    document.addEventListener("deviceready",onDeviceReady,false);
}

// PhoneGap is ready

function onDeviceReady(){

    function getCurrentAcceleration() {
        navigator.accelerometer.getCurrentAcceleration(onAccelerationSuccess, onError);
    };
    
    // onSuccess: Get current acceleration
    
    function onAccelerationSuccess(acceleration) {
        
        alert( 'Acceleration X: ' + acceleration.x + '<BR>' + 'Acceleration Y: ' + acceleration.y + '<BR>'
              
              + 'Acceleration Z: ' + acceleration.z + '<BR>');
        
    };
    
    // onError: Failed to get the acceleration
    
    function onError() {
        
        alert ("onError");
    };
}