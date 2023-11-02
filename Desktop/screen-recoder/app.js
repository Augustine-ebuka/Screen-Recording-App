const button = document.createElement('button');
button.innerHTML = "Start Recording";
document.body.append(button);

const downloadButton = document.createElement('button');
downloadButton.innerHTML = "Download";
downloadButton.style.display = "none"; // Initially hide the download button
document.body.append(downloadButton);

let mediaStream; // Declare mediaStream outside of the event listener
let recorder; // Declare recorder outside of the event listener

button.addEventListener("click", async () => {
    mediaStream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: true });
    recorder = new MediaRecorder(mediaStream);

    recorder.start();

    const [videoTrack, audioTrack] = mediaStream.getTracks();
    videoTrack.addEventListener("ended", () => {
        recorder.stop();
        downloadButton.style.display = "block"; // Show the download button when recording ends
    });

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
