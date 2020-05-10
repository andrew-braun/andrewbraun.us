
/* Toggle element show/hide */
const showElementFlex = () => {
   let element = event.target;
   let display = element.style.display;
   element.style.display = display === 'none' ? 'block' : 'none';
};

const slideDownToggle = () => {
   let element = event.target;

   element.classList.toggle("slide-toggle");
}

/* Tabs */



const tabSwitch = (tabClickEvent) => {

   const tabs = document.querySelectorAll("#portfolio-selector-buttons button a");

   for (tab of tabs) {
      tab.classList.remove("activeTab");
      console.log(tab);
   }
   
   let currentClickedTab = tabClickEvent.currentTarget;
   currentClickedTab.classList.add("activeTab");
   tabClickEvent.preventDefault();


   let tabList = document.querySelectorAll(".section-container-content");
   for (i = 0; i < tabList.length; i++) {
      tabList[i].classList.remove("activeContent");
   }

   let clickedTab = tabClickEvent.target;
   let clickedTabContent = clickedTab.getAttribute("href");
   let activeTabContent = document.querySelector(clickedTabContent);
   console.log(activeTabContent);

   activeTabContent.classList.add("activeContent");

}

/* PGP Key container slide */
const pgpKeyContainer = document.querySelector("#pgp-key-container");
pgpKeyContainer.addEventListener("click", slideDownToggle);

/* Tab clicks */

let tabList = document.querySelectorAll("#portfolio-selector-buttons button a");
for (tab of tabList) {
   tab.addEventListener("click", tabSwitch);
};