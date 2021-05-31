const videoElement = document.getElementById('video');
const buttonStart = document.getElementById('button');
const buttonChoose = document.getElementById('choose');

//

async function selectMediaStream() {
    try {
         const mediaStream = await navigator.mediaDevices.getDisplayMedia();
         videoElement.srcObject = mediaStream;
         videoElement.onloadedmetadata = () => {
             videoElement.play();
         }
    } catch(err) {

    }
}

buttonStart.addEventListener('click', async () => {
    //disable button
    buttonStart.disabled = true;
    //Start picture in picture
    await videoElement.requestPictureInPicture();
    //rest button
    buttonStart.disabled = false;
});
buttonChoose.addEventListener('click',selectMediaStream);
;