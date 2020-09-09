$('.video-container img').on('click', () => {
    $('video').get(0).play();
})

$('video').on('play', () => {
    $('.video-container img').hide(500);
})

$('video').on('ended pause', () => {
    $('.video-container img').show(500);
})

$('video').on('click', () => {
    $('video').get(0).pause();
})