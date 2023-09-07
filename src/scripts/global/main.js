import "../../assets/styles/global.css";
import { trackerActions } from "../../utils/trackerFunctions";

(function () {
  const mainTag = document.createElement("main");
  mainTag.setAttribute("id", "root");
  document.body.appendChild(mainTag);

  document.onmousemove = handleMouseMove;
  function handleMouseMove(event) {
    var eventDoc, doc, body;

    event = event || window.event;

    if (event.pageX == null && event.clientX != null) {
      eventDoc = (event.target && event.target.ownerDocument) || document;
      doc = eventDoc.documentElement;
      body = eventDoc.body;

      event.pageX =
        event.clientX +
        ((doc && doc.scrollLeft) || (body && body.scrollLeft) || 0) -
        ((doc && doc.clientLeft) || (body && body.clientLeft) || 0);
      event.pageY =
        event.clientY +
        ((doc && doc.scrollTop) || (body && body.scrollTop) || 0) -
        ((doc && doc.clientTop) || (body && body.clientTop) || 0);
    }

    const tracker = document.getElementById("mouseTracker");
    const trackerInner = document.getElementById("trackerInner");

    if (tracker && trackerInner) {
      if (!tracker.style.transform.includes("translate(-50%, -50%)"))
        tracker.style.transform = "translate(-50%, -50%) scale(1)";
      if (!trackerInner.style.transform.includes("translate(-50%, -50%)"))
        trackerInner.style.transform = "translate(-50%, -50%) scale(1)";

      trackerInner.style.top = `${event.pageY}px`;
      trackerInner.style.left = `${event.pageX}px`;

      setTimeout(() => {
        tracker.style.top = `${event.pageY}px`;
        tracker.style.left = `${event.pageX}px`;
      }, 150);
    } else {
      mainTag.innerHTML += `
            <div id="mouseTracker"></div>
            <div id="trackerInner"></div>
        `;
    }
  }
})();
