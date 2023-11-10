var button = document.getElementById('start_btn');


var downloadButton = document.getElementById('download_btn');
downloadButton.innerHTML = "Download";
downloadButton.style.display = "none"; // Initially hide the download button
downloadButton.style.background = "green"; // Initially hide the download button

function videoRecorder(){
    let mediaStream;
    let recorder; 

    button.addEventListener("click", async () => {
    
        mediaStream = await navigator.mediaDevices.getDisplayMedia({ video: {facingMode:true}, audio: true });
        recorder = new MediaRecorder(mediaStream);
    
        recorder.start();
        console.log(recorder.state)
        const [videoTrack, audioTrack] = mediaStream.getTracks();
        videoTrack.addEventListener("ended", () => {
            recorder.stop();
            downloadButton.style.display = "block"; // Show the download button when recording ends
        });


    // when the recording stops, its listens to an event called dataavailable
        recorder.addEventListener("dataavailable", (evt) => {
            const a = document.createElement('a');
            a.href = URL.createObjectURL(evt.data);
            a.innerHTML = "Download";
            a.download = "capture.webm";
    
            // Attach a click event to the download button to trigger the download
            downloadButton.onclick = () => {
                a.click();
            };
        });
    });
}

videoRecorder()


