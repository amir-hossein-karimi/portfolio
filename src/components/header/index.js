import "./header.css";

import { headerTemplate } from "./template";
import { insertElement } from "../../utils/insertElement";
import { navLinks } from "../../constants";

// ==== insert header
const headerNode = document.createElement("header");
headerNode.innerHTML = headerTemplate;
insertElement(document.getElementById("root"), headerNode, "before");

// ==== links
const linksContainer = document.getElementById("linksContainer");
navLinks.forEach((navLink) => {
  const linkEl = `
    <a href="${navLink.route}" class="nav-link ${
    window.location.pathname === navLink.route ? "active" : "notActive"
  }">
      ${navLink.label}
    </a>
  `;

  linksContainer.innerHTML += linkEl;
});

const mobileLinksContainer = document.getElementById("mobileLinksContainer");
navLinks.forEach((navLink) => {
  const linkEl = `
    <li>
      <a href="${navLink.route}" class="mobile-nav-link ${
    window.location.pathname === navLink.route ? "active" : "notActive"
  }">
        ${navLink.label}
      </a>
    </li>
  `;

  mobileLinksContainer.innerHTML += linkEl;
});

// ==== mobile header menu
const btn = document.querySelector("button.menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("show");
  menu.classList.toggle("hide");
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
