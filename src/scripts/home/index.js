import { linearText } from "../../components/linearText/template";

const root = document.getElementById("root");

root.innerHTML = `
    <div>
        <div class="h-96">
            ${linearText({ text: "this is test" })}
        </div>
        <div class="h-96">home2</div>
    </div>
`;
