function getImage() {
    navigator.device.capture.captureImage(onSuccess,
                                onFail,
                                { 
                                    limit: 1
                                });
}

function onSuccess(imageURI) {
    alert("Image taken");
}

function onFail(error) {
    alert("Fail when getting image. Code = " + error.code);
}

function getPhoto(source) {
      // Retrieve image file location from specified source
      navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50, 
        destinationType: destinationType.FILE_URI,
        sourceType: source });
    }

    // Called if something bad happens.
    // 
    function onFail(message) {
      alert('Failed because: ' + message);
    }