/* Toggle element show/hide */
const showElementFlex = () => {
	let element = event.target;
	let display = element.style.display;
	element.style.display = display === "none" ? "block" : "none";
};

const slideDownToggle = () => {
	let element = event.target;

	element.classList.toggle("slide-toggle");
};

/* Tabs */

const tabSwitchEventHandler = (
	event,
	tabQuerySelectorAll,
	contentQuerySelectorAll
) => {
	const tabs = document.querySelectorAll(tabQuerySelectorAll);

	for (tab of tabs) {
		tab.classList.remove("activeTab");
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
};

/* PGP Key container slide */
const pgpKeyContainer = document.querySelector("#pgp-key-container");
pgpKeyContainer.addEventListener("click", slideDownToggle);

/* Tab clicks */

// let tabList = document.querySelectorAll("#portfolio-selector-buttons button a");
// for (tab of tabList) {
//    tab.addEventListener("click", tabSwitch);
// };

const portfolioTabList = document.querySelectorAll(
	"#portfolio-selector-buttons button a"
);
for (tab of portfolioTabList) {
	tab.addEventListener("click", (event) =>
		tabSwitchEventHandler(
			event,
			"#portfolio-selector-buttons button a",
			".tabbed-container-content"
		)
	);
}

const aboutTabList = document.querySelectorAll(
	".about-container .left-sidebar-menu .left-sidebar-item .left-sidebar-link"
);
for (tab of aboutTabList) {
	tab.addEventListener("click", (event) =>
		tabSwitchEventHandler(
			event,
			".about-container .left-sidebar-menu .left-sidebar-item .left-sidebar-link",
			".about-content"
		)
	);
	console.log(tab);
}
