import "./styles.css";
import { projects } from "../../../constants/projects";
import { hoverCardTemplate } from "../../hoverCard/template";

const projectsTemplate = () => {
  return `
    <div class="relative">
        <div class="projects-title">&lt;Projects /&gt; <span class="projects-bullet"></span></div>

        ${projects.map((project) => `${hoverCardTemplate(project)}`).join("")}
    </div>
`;
};

export default projectsTemplate();
