var modal; 
var modalContent;
var shouldHide = false;

// create a SpringSystem and a Spring with a bouncy config.
var springSystem = new rebound.SpringSystem();
var spring = springSystem.createSpring(30, 5);

// Add a listener to the spring. Every time the physics
// solver updates the Spring's value onSpringUpdate will
// be called.
spring.addListener({
  onSpringUpdate: function(spring) {
    var val = spring.getCurrentValue();
    mappedVal = rebound.MathUtil.mapValueInRange(val, 0, 1, 1, 0.8);
    scale(modalContent, mappedVal);

    if (val >= 1 && shouldHide === true && modal.className === "show") {
      modal.className = ""
      shouldHide = false
    }
  }
});

// Helper for scaling an element with css transforms.
function scale(el, val) {
  el.style.mozTransform =
  el.style.msTransform =
  el.style.webkitTransform =
  el.style.transform = 'scale3d(' + val + ', ' + val + ', 1)';
}

function showModal() {
  modal.className = "show"
  spring.setEndValue(0);
}

function hideModal() {
  shouldHide = true;
  spring.setEndValue(1);
}

function preventClickthrough(event) {
  event.stopPropagation();
}

module.exports = {
  init: function() {
    modal = document.getElementById("modal");
    modalContent = document.getElementById("modal-content");
    document.getElementById("help-out-button").addEventListener("click", showModal);
    document.getElementById("modal-container").addEventListener("click", hideModal);
    modalContent.addEventListener("click", preventClickthrough);

    spring.setCurrentValue(1, true);
  }
};
