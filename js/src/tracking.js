var downloadButton = document.getElementById('download-button');

downloadButton.addEventListener('click', function() {
  ga('send', 'event', 'button', 'click', 'download-button');
}, false);
