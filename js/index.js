"use strict";

$('.video-container img').on('click', function () {
  $('video').get(0).play();
});
$('video').on('play', function () {
  $('.video-container img').hide(500);
});
$('video').on('ended pause', function () {
  $('.video-container img').show(500);
});
$('video').on('click', function () {
  $('video').get(0).pause();
});