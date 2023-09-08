import "./styles.css";
import HomeStartTemplate from "../../components/Home/Start/template";

const root = document.getElementById("root");

root.innerHTML += `
    <div class="home">
       <div class="time-line"></div>

       <div class="grow">
            ${HomeStartTemplate}
       </div>
    </div>
`;
