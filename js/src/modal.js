var modal = document.getElementById("modal");

function showModal() {
  modal.className = "show"
}

function hideModal() {
  modal.className = ""
}

function preventClickthrough(event) {
  event.stopPropagation();
}

module.exports = {
  init: function() {
    document.getElementById("help-out-button").addEventListener("click", showModal);
    document.getElementById("modal-container").addEventListener("click", hideModal);
    document.getElementById("modal-content").addEventListener("click", preventClickthrough);
  }
};
