
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



const tabSwitch = () => {

   const tabs = document.querySelectorAll("#portfolio-selector-buttons button a");

   for (tab of tabs) {
      tab.classList.remove("activeTab");
      console.log(tab);
   }
   
   const currentClickedTab = event.currentTarget;
   currentClickedTab.classList.add("activeTab");
   event.preventDefault();

   const tabList = document.querySelectorAll(".section-container-content");
   for (tab of tabList) {
      tab.classList.remove("activeContent");
   }

   let clickedTab = event.target;
   let clickedTabContent = clickedTab.getAttribute("href");
   let activeTabContent = document.querySelector(clickedTabContent);

   activeTabContent.classList.add("activeContent");

}

const tabSwitchEventHandler = (event, tabQuerySelectorAll, contentQuerySelectorAll) => {
   const tabs = document.querySelectorAll(tabQuerySelectorAll);

   for (tab of tabs) {
      tab.classList.remove("activeTab");
      console.log(tab);
   }
   
   const currentClickedTab = event.currentTarget;
   currentClickedTab.classList.add("activeTab");
   event.preventDefault();

   const tabContent = document.querySelectorAll(contentQuerySelectorAll);
   for (tab of tabContent) {
      tab.classList.remove("activeContent");
   }

   let clickedTab = event.target;
   let clickedTabContent = clickedTab.getAttribute("href");
   let activeTabContent = document.querySelector(clickedTabContent);

   activeTabContent.classList.add("activeContent");

}

/* PGP Key container slide */
const pgpKeyContainer = document.querySelector("#pgp-key-container");
pgpKeyContainer.addEventListener("click", slideDownToggle);

/* Tab clicks */

// let tabList = document.querySelectorAll("#portfolio-selector-buttons button a");
// for (tab of tabList) {
//    tab.addEventListener("click", tabSwitch);
// };


let portfolioTabList = document.querySelectorAll("#portfolio-selector-buttons button a");
for (tab of portfolioTabList) {
   tab.addEventListener("click", 
   (event) => tabSwitchEventHandler(event, "#portfolio-selector-buttons button a", ".section-container-content"));
};