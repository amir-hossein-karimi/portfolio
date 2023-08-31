export const insertBefore = (newNode, existingNode) => {
  existingNode.parentNode.insertBefore(newNode, existingNode);
};

export const insertAfter = (newNode, existingNode) => {
  existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
};

// position => after, before, none
export const insertElement = (oldEl, newEl, position = "none") => {
  switch (position) {
    case "after":
      insertAfter(newEl, oldEl);
      break;
    case "before":
      insertBefore(newEl, oldEl);
      break;
    default:
      oldEl.appendChild(newEl);
  }
};
