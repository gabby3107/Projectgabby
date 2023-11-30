let currentIndex = 0;
const gameImages = ["genshinlogo.jpeg", "honkaistarraillogo.jpeg", "Honkailogo.jpeg"];
const gameVideos = document.querySelectorAll('.background-video source');
const gameImage = document.getElementById("gameImage");
const tryGameBtn = document.getElementById("tryGameBtn");

function tryGame() {
    // Add logic to handle the "Try the Game" button click
    // For example, you can show a loading bar and navigate to the respective game link
    tryGameBtn.innerHTML = '<div class="loading-bar"></div>';
    // Simulate loading for 3 seconds (adjust as needed)
    setTimeout(() => {
        window.location.href = getGameLink();
    }, 3000);
}

function changeGame(delta) {
    currentIndex = (currentIndex + delta + gameImages.length) % gameImages.length;
    gameImage.src = gameImages[currentIndex];
    // Change the video source based on the current game
    gameVideos.forEach(video => video.classList.remove('active'));
    gameVideos[currentIndex].classList.add('active');
    updateBackground();
}


function changeGame(delta) {
    currentIndex = (currentIndex + delta + gameImages.length) % gameImages.length;
    gameImage.src = gameImages[currentIndex];
    updateBackground();
}

function updateBackground() {
    const body = document.querySelector("body");
    body.className = gameImages[currentIndex].replace('.jpeg', '');

    const gameVideo = document.getElementById("gameVideo");
    const sources = gameVideo.querySelectorAll('source');

    // Update the background video source based on the current game
    sources.forEach((source, index) => {
        if (index === currentIndex) {
            source.src = gameVideos[index].src;
            source.setAttribute('src', gameVideos[index].src);
        } else {
            source.removeAttribute('src');
        }
    });

    // Reload the video to apply the changes
    gameVideo.load();
}

function getGameLink() {
    switch (currentIndex) {
        case 0:
            return "https://genshin.hoyoverse.com/pc-launcher/?utm_source=SEA_google_SEAT2_performancemax_20220626&mhy_trace_channel=ga_channel&new=1&gad_source=1&gclid=CjwKCAiAgeeqBhBAEiwAoDDhn672geGT4-xQbBaSZWzuoSV8UnfNMizgmpHZFjEZEAlBfDI3x530bhoC8Y8QAvD_BwE#/GI008";
        case 1:
            return "https://hsr.hoyoverse.com/ua2?lp=sr03&utm_source=SEA_google_SEA_search_UA2_Brand&hoyotrace_channel=ga_channel&gclid=CjwKCAiAgeeqBhBAEiwAoDDhn6DIYUVGkN6MfgBfiijMusCMlIppoVd4GBkzlP6YanjxtSO6-sk7YBoCaWIQAvD_BwE";
        case 2:
            return "https://honkaiimpact3.hoyoverse.com/asia/en-us/home";
        default:
            return "#";
    }
}
