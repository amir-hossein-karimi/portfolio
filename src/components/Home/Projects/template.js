import { projects } from "../../../constants/projects";
import { hoverCardTemplate } from "../../hoverCard/template";

const projectsTemplate = () => {
  return `
    <div>
        ${projects.map((project) => `${hoverCardTemplate(project)}`).join("")}
    </div>
`;
};

export default projectsTemplate();
