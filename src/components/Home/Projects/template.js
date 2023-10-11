import { hoverCardTemplate } from "../../hoverCard/template";

const projectsTemplate = `
    <div>
        ${hoverCardTemplate({
          text: "this is test",
          imagePath: "../../../assets/images/JavaScript-logo.png",
          count: "01",
        })}
    </div>
    
`;

export default projectsTemplate;
