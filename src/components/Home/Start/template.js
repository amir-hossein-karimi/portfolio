import "./styles.css";
import { glitchTextTemplate } from "../../glitchText/template";

const HomeStartTemplate = `
    <div class="start-container">
        <div class="start">&lt;Start /&gt; <span class="start-bullet"></span></div>

        <h1 class="heading">Hi, my name is <strong class="text-secondary-dark">Amir Hossein Karimi</strong></h1>
        <h1 class="heading">i am a ${glitchTextTemplate({
          text: "fullstack developer",
        })}</h1>
    </div>
`;

export default HomeStartTemplate;
