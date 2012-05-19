

function getVideo() {
    navigator.device.capture.captureVideo(onSuccess,
                                onFail,
                                { 
                                    limit: 1
                                });
}

function onSuccess(videoURI) {
    alert("Video Recorded");
}

function onFail(error) {
    alert("Fail when getting video. Code = " + error.code);
}
