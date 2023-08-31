import "./header.css";

import { headerTemplate } from "./template";
import { insertElement } from "../../utils/insertElement";

// ==== insert header
const headerNode = document.createElement("header");
headerNode.innerHTML = headerTemplate;
insertElement(document.getElementById("root"), headerNode, "before");

// ==== mobile header menu
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

// ===== dark mode
// const toggleMode = {
//   dark: "light",
//   light: "dark",
// };

// let mode = localStorage.getItem("theme") || "light";
// const darkModeButton = document.getElementById("darkModeButton");
// const html = document.getElementsByTagName("html");
// html[0].className = mode;

// darkModeButton.innerText = toggleMode[mode];

// darkModeButton.onclick = () => {
//   html[0].className = toggleMode[mode];
//   localStorage.setItem("theme", toggleMode[mode]);
//   mode = toggleMode[mode];
//   darkModeButton.innerText = toggleMode[mode];
// };
