var modal; 
var modalContent;

function showModal() {
  modal.className = "show"
}

function hideModal() {
  modal.className = ""
}

function preventClickthrough(event) {
  event.stopPropagation();
}

modal = document.getElementById("modal");
modalContent = document.getElementById("modal-content");
document.getElementById("help-out-button").addEventListener("click", showModal);
document.getElementById("modal-container").addEventListener("click", hideModal);
modalContent.addEventListener("click", preventClickthrough);
