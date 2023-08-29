import "./assets/styles/global.css";
import style from "./assets/styles/style.scss";

const listEl = document.getElementById("list");

const listItems = ["item1", "item2", "item3", "item4"];

listItems.forEach((item) => {
  const listItem = document.createElement("ol");
  listItem.classList.add(style.redBackground);
  listItem.innerText = item;
  listEl.appendChild(listItem);
});
