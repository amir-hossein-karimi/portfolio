import "./style.css";

export const glitchTextTemplate = ({ text = "", textClassName = "" }) => `
    <p class="glitch ${textClassName}" data-text="${text}">${text}</p>
`;
