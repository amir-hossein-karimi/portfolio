export const linearText = ({
  text,
  containerClassName = "",
  textClassName = "",
}) => `
    <div class="linear-text-container ${containerClassName}">
        <p class="linear-text ${textClassName}">${text}</p>
    </div>
`;
