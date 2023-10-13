import "./style.css";
import { handleHoverCard } from ".";

export const hoverCardTemplate = ({
  text = "",
  className = "",
  imagePath = "",
  count = "01",
} = {}) => {
  handleHoverCard(count);

  return `
    <div class="card ${className}" id="card-${count}">
        <p class="border-b-4 border-white pr-8 pb-4">${text}</p>
        <span>${count}</span>
        <div class="glow"></div>
        <img alt="" src="${imagePath}" />
    </div>
`;
};
