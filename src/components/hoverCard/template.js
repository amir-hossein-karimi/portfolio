export const hoverCardTemplate = ({
  text = "",
  className = "",
  imagePath = "",
  count = "01",
} = {}) => `
    <div class="card ${className}">
        <p class="border-b-4 border-white pr-8 pb-4">${text}</p>
        <span>${count}</span>
        <div class="glow"></div>
        <img alt="" src="${imagePath}" />
    </div>
`;
