import { glitchTextTemplate } from "../../components/glitchText/template";
import { handleHoverCard } from "../../components/hoverCard";
import { hoverCardTemplate } from "../../components/hoverCard/template";

const root = document.getElementById("root");

root.innerHTML += `
    <div id="home">
        ${glitchTextTemplate({ text: "Home" })}

        <div id="cardContainer">
            ${hoverCardTemplate()}
        </div>
    </div>
`;

handleHoverCard();
