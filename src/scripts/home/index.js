import { glitchTextTemplate } from "../../components/glitchText/template";

const root = document.getElementById("root");

root.innerHTML += `
    <div>
        ${glitchTextTemplate({ text: "Home" })}
    </div>
`;
