//Recorder.js

// Wait for PhoneGap to load
    //
    document.addEventListener("deviceready", onDeviceReady, false);
    
     // PhoneGap is ready
    //
    function onDeviceReady() {
        recordAudio();
        
    }

    // Record audio
    // 
    function recordAudio() {
        var src = "../myrecording.mp3";
        var mediaRec = new Media(src, onSuccess, onError);

        // Record audio
        mediaRec.startRecord();

        // Stop recording after 60 sec
        var recTime = 0;
        var recInterval = setInterval(function() {
            recTime = recTime + 1;
            setAudioPosition(recTime + " sec");
            if (recTime >= 60) {
                clearInterval(recInterval);
                mediaRec.stopRecord();
            }
        }, 1000);
    }

    // onSuccess Callback
    //
    function onSuccess() {
        console.log("recordAudio():Audio Success");
    }

    // onError Callback 
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' + 
              'message: ' + error.message + '\n');
    }

    // Set audio position
    // 
    function setAudioPosition(position) {
        document.getElementById('audio_position').innerHTML = position;
    }