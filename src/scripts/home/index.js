import { glitchTextTemplate } from "../../components/glitchText/template";
import "./styles.css";

const root = document.getElementById("root");

root.innerHTML += `
    <div class="home">
       <div class="time-line"></div>

       <div class="grow">
            <div class="start-container">
                <div class="start">&lt;Start /&gt; <span class="start-bullet"></span></div>

                <h1 class="font-bold text-xl sm:text-2xl md:text-3xl">Hi, my name is <strong class="text-secondary-dark">Amir Hossein Karimi</strong></h1>
                <h1 class="font-bold text-xl sm:text-2xl md:text-3xl">i am a ${glitchTextTemplate(
                  {
                    text: "fullstack developer",
                  }
                )}</h1>
            </div>
       </div>
    </div>
`;
