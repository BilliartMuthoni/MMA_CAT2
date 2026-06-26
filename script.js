const video = document.getElementById("wildlifeVideo");
const btn = document.getElementById("toggleBtn");

function toggleVideo() {
    if (video.paused) {
        video.classList.remove("hidden");
        video.play();
        btn.textContent = "Hide Video";
    } else {
        video.pause();
        video.classList.add("hidden");
        btn.textContent = "Play Video";
    }
}

btn.addEventListener("click", toggleVideo);