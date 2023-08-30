import "../assets/styles/global.css";
// import style from "./assets/styles/style.scss";

const btn = document.querySelector("button.menu-button");
const menu = document.querySelector(".mobile-menu");

const menuAnchTexts = document.querySelectorAll(".mobile-menu a");
menuAnchTexts.forEach((item) => {
  if (!item.textContent.trim()) {
    item.classList.add("hidden");
  }
});

btn.addEventListener("click", () => {
  if (menu.classList.contains("scale-y-0")) {
    menu.classList.add("scale-y-100");
    menu.classList.add("max-h-96");
    menu.classList.remove("scale-y-0");
    menu.classList.remove("max-h-0");
  } else {
    menu.classList.remove("scale-y-100");
    menu.classList.add("max-h-0");
    menu.classList.add("scale-y-0");
    menu.classList.remove("max-h-96");
  }
});

const listEl = document.getElementById("list");

const listItems = ["item1", "item2", "item3", "item4"];

listItems.forEach((item) => {
  const listItem = document.createElement("ol");
  listItem.classList.add("p-2", "dark:text-white");
  listItem.innerText = item;
  listEl.appendChild(listItem);
});

const toggleMode = {
  dark: "light",
  light: "dark",
};

let mode = localStorage.getItem("theme") || "light";
const darkModeButtonContainer = document.getElementById("darkMode");
const button = document.createElement("button");
const html = document.getElementsByTagName("html");
html[0].className = mode;

button.innerText = toggleMode[mode];
button.className =
  "p-4 text-white bg-slate-700 dark:text-slate-800 dark:bg-white";

button.onclick = () => {
  html[0].className = toggleMode[mode];
  localStorage.setItem("theme", toggleMode[mode]);
  mode = toggleMode[mode];
  button.innerText = toggleMode[mode];
};
darkModeButtonContainer.appendChild(button);
