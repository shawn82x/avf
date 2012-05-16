// Recorder.js

// Creates a small Audio recorder

function record()
    {        
        if($('#record-button').attr('src') == 'images/stop.png')
        {
            stopRecord();
        }
        else
        {
            startRecord();
        }
    }
    
    function play()
    {
        if($('#play-button').attr('src') == 'images/play.png')
        {
            playRecord();
        }
        else
        {
            stopPlayback();
        }
    }
    
    function deleteAudio()
    {
        if($('#cd-button').attr('src') == 'help.png')
        {
            alert("Touch the record button to record a voice memo.");
        }
        else
        {
            if(confirm("Really delete audio recording?"))
            {
                deleteRecording();
            }
        }
    }
 
    function deleteRecording()
    {
        if(navigator.audio)
        {
            debug.log("resetting audio");
            debug.log("removing old file at url " + navigator.audio.src);
            var path = navigator.audio.src.substr('documents://'.length);
            debug.log("Deleting audio file at path: " + path + " from url: "+navigator.audio.src);
            navigator.fileMgr.deleteFile(path,file_success,file_failed);
            navigator.audio = null;
            $('#cd-button').attr('src','help.png');
        }
        else
        {
            alert("Touch the record button to record a voice memo.");
        }
    }
 
function startRecord()
{
        debug.log("start record...");
        if(navigator.audio && confirm("Delete existing recording?"))
        {
            deleteRecording();
        }
 
        debug.log("Initializing audio");
        navigator.audio = new Media(null,recording_success,recording_failure);
        $('#cd-button').attr('src','cd.png');
        debug.log("Starting recording...");
        navigator.audio.startAudioRecord();
        navigator.notification.activityStart();
        $('#record-button').attr('src','stop.png');
navigator.audio.startAudioRecord();
}
function stopRecord()
{
        debug.log("Stopping recording...");
        $('#record-button').attr('src','record.png');
        navigator.notification.activityStop();
        $('#cd-button').attr('src','cd_remove.png');
navigator.audio.stopAudioRecord();
}
 
function playRecord()
{
        debug.log("Playing recording...");
        if(navigator.audio)
        {
            $('#play-button').attr('src','stop.png');
            navigator.notification.activityStart();
            navigator.audio.play();
        }
        else
        {
            alert("No audio. Touch the record button to record some.");
        }
}
    
    function stopPlayback()
    {
        debug.log("Stopping playback...");
        $('#play-button').attr('src','play.png');
        navigator.notification.activityStop();
navigator.audio.stop();
    }
 
    function file_success()
    {
        debug.log("file deleted");
        $('#cd-button').attr('src','help.png');
    }
    
    function file_failed()
    {
        debug.log("file not deleted");
    }
    
    function recording_success(url)
    {
        debug.log("Recording success callback");
        navigator.notification.activityStop();  
        $('#record-button').attr('src','record.png');
        $('#play-button').attr('src','play.png');
        $('#cd-button').attr('src','cd_remove.png');
    }
    
    function recording_failure(error)
    {
        navigator.notification.activityStop();  
        alert("Recording failed: " + error);
        debug.log("Recording failed: " + error);
    }
 
 