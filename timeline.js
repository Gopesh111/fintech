document.addEventListener('DOMContentLoaded', function () {
    const videos = document.querySelectorAll('video');

    function playAllVideos() {
        videos.forEach(video => {
            video.play();
        });
    }

    // Ensure all videos play on load
    playAllVideos();

    // Play videos during scrolling
    window.addEventListener('scroll', playAllVideos);
});
