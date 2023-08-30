export const insertBefore = (newNode, existingNode) => {
  existingNode.parentNode.insertBefore(newNode, existingNode);
};
