import { handleHoverCard } from "../../components/hoverCard";
import { hoverCardTemplate } from "../../components/hoverCard/template";

const root = document.getElementById("root");

root.innerHTML += `
    <div class="py-10">
        <div id="cardContainer">
            ${hoverCardTemplate({
              count: "01",
              imagePath: "../../assets/images/JavaScript-logo.png",
              text: "3D text",
            })}
        </div>
    </div>
`;

handleHoverCard();
