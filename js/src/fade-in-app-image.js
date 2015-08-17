var appImage = document.getElementById("app");
var loaded = false;

function imageLoaded() {
  if (!loaded) {
    appImage.className = "fade-in";
  }
  loaded = true;
}

module.exports = {
  init: function() {
    if (appImage.naturalWidth !== 0) {
      imageLoaded();
    } else {
      appImage.onload = imageLoaded;
    }
  }
};
