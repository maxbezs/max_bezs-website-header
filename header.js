const modal = document.querySelector(".header-modal");
const trigger = document.querySelector(".header-trigger");
const closeButton = document.querySelector(".header-close");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);


function disableScroll() {
   document.body.classList.add("stop-scrolling");
}
 
function enableScroll() {
   document.body.classList.remove("stop-scrolling");
}
