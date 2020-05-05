
/* Accordion slide */
const slideDown = () => {
   event.target.style.maxHeight = "100vh";
}

const pgpKeyContainer = document.querySelector("#pgp-key-container");

pgpKeyContainer.addEventListener("click", slideDown);