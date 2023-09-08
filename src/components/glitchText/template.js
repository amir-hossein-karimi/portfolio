import "./style.css";

export const glitchTextTemplate = ({ text = "", textClassName = "" }) => `
    <span class="glitch ${textClassName} whitespace-nowrap" data-text="${text}">${text}</span>
`;
