const listEl = document.getElementById("list");

console.log("test");

const listItems = ["item1", "item2", "item3", "item4"];

listItems.forEach((item) => {
  const listItem = document.createElement("ol");
  listItem.innerText = item;
  listEl.appendChild(listItem);
});
