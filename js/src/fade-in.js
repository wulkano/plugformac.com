var appImage = document.getElementById('app');
var header = document.querySelector('header');
var loaded = false;

function imageLoaded() {
  if (!loaded) {
    fadeInElement(appImage);
  }
  loaded = true;
}

function fadeInElement(el) {
  el.className += ' fade-in';
}

// We set the time out so that the background image settles before throwing elements at the user
setTimeout(function(){
  if (appImage.naturalWidth !== 0) {
    imageLoaded();
  } else {
    appImage.onload = imageLoaded;
  }

  fadeInElement(header);
}, 350);
