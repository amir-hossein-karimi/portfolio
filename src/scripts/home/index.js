import { glitchTextTemplate } from "../../components/glitchText/template";
import { handleHoverCard } from "../../components/hoverCard";
import { hoverCardTemplate } from "../../components/hoverCard/template";

const root = document.getElementById("root");

root.innerHTML += `
    <div id="home">
        <div id="cardContainer" class="pt-10">
            ${hoverCardTemplate({
              text: "3d text",
              imagePath: "../../assets/images/JavaScript-logo.png",
            })}
        </div>
    </div>
`;

handleHoverCard();
