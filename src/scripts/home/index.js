import "./styles.css";
import HomeStartTemplate from "../../components/Home/Start/template";
import projectsTemplate from "../../components/Home/Projects/template";
import aboutTemplate from "../../components/Home/about/template";

const root = document.getElementById("root");

root.innerHTML += `
    <div class="home" id="home">
       <div class="time-line"></div>

       <div class="grow">
            ${HomeStartTemplate}
            ${projectsTemplate}
            ${aboutTemplate}
       </div>
    </div>
`;
