import "./style.css";

import { insertElement } from "../../utils/insertElement";
import { footerTemplate } from "./template";
import { footerItems } from "../../constants";
import { trackerActions } from "../../utils/trackerFunctions";

// ==== insert footer
const footerNode = document.createElement("footer");
footerNode.innerHTML = footerTemplate;
insertElement(document.getElementById("root"), footerNode, "after");

// ==== footer items
const createPageItem = ({ label, src, alt, size }) => `
    <a class="flex items-center sm:gap-2 gap-1">
        <img src="${src}" alt="${alt}" width="${size}" height="${size}">
        <p class="text-sm">${label}</p>
    </a>
`;
const createLinkItem = ({ href, src, alt, size }) => `
    <a href="${href}" target="_blank" class="w-8 h-8 bg-gray-700 rounded-[50%] flex justify-center items-center">
        <img src="${src}" alt="${alt}" width="${size}" height="${size}">
    </a>
`;

Object.entries(footerItems).forEach(([type, data]) => {
  const container = document.getElementById(`footer-${type}`);
  const createItem = type === "pages" ? createPageItem : createLinkItem;
  data.forEach((item) => {
    container.innerHTML += createItem({ ...item, ...item.logo });
  });

  container.childNodes.forEach((node) => {
    node.addEventListener("mouseenter", () => {
      trackerActions.increaseScale();
    });

    node.addEventListener("mouseleave", () => {
      trackerActions.decreaseScale();
    });
  });
});
