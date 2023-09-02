import "./style.css";

import { headerTemplate } from "./template";
import { insertElement } from "../../utils/insertElement";
import { navLinks } from "../../constants";
import { windowSizeTracker } from "../../utils/windowSizeTracker";
import { trackerActions } from "../../utils/trackerFunctions";

// ==== insert header
const headerNode = document.createElement("header");
headerNode.innerHTML = headerTemplate;
insertElement(document.getElementById("root"), headerNode, "before");

// ==== links
const linksContainer = document.getElementById("linksContainer");
navLinks.forEach((navLink) => {
  const linkEl = document.createElement("a");
  linkEl.setAttribute("href", navLink.route);
  linkEl.classList.add(
    "nav-link",
    window.location.pathname === navLink.route ? "active" : "notActive"
  );
  linkEl.innerText = navLink.label;

  linkEl.addEventListener("mouseenter", trackerActions.increaseScale);

  linkEl.addEventListener("mouseleave", trackerActions.decreaseScale);

  linksContainer.appendChild(linkEl);
});

const mobileLinksContainer = document.getElementById("mobileLinksContainer");
navLinks.forEach((navLink) => {
  const linkEl = `
    <li class="relative ${
      window.location.pathname === navLink.route ? "pl-5" : ""
    }">
      ${
        window.location.pathname === navLink.route
          ? `<span class="indicator"></span>`
          : ""
      }
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

windowSizeTracker(({ width }) => {
  if (width > 640) {
    menu.classList.remove("show");
    menu.classList.add("hide");
  }
});

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
