document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('background-video');
    video.addEventListener('canplaythrough', function() {
        video.classList.add('fade-in');
    }, false);
});
