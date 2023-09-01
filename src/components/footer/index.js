import "./style.css";

import { insertElement } from "../../utils/insertElement";
import { footerTemplate } from "./template";

// ==== insert footer
const footerNode = document.createElement("footer");
footerNode.innerHTML = footerTemplate;
insertElement(document.getElementById("root"), footerNode, "after");
