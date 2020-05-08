
/* Accordion slide */
const showElement = () => {
   let element = event.target;
   let display = element.style.display;
   element.style.display = display === 'none' ? 'block' : 'none';
};

const slideDownToggle = () => {
   let element = event.target;

   element.classList.toggle("slide-toggle");
}

const pgpKeyContainer = document.querySelector("#pgp-key-container");
pgpKeyContainer.addEventListener("click", slideDownToggle);

