import { sleep } from "./sleep";

export const trackerActions = {
  increaseCall: false,
  decreaseCall: false,
  async increaseScale() {
    this.decreaseCall = false;
    this.increaseCall = true;

    if (this.increaseTimer) return;
    const tracker = document.getElementById("mouseTracker");
    if (!tracker) return;
    while (this.increaseCall) {
      await sleep(10);
      const transforms = tracker.style.transform
        .split(" ")
        .map((item) => {
          if (item.includes("scale")) {
            if (
              +item.substring(item.indexOf("(") + 1, item.lastIndexOf(")")) >=
              2.9
            ) {
              this.increaseCall = false;
            }
            return `scale(${
              +item.substring(item.indexOf("(") + 1, item.lastIndexOf(")")) +
              0.1
            })`;
          }
          return item;
        })
        .join(" ");

      tracker.style.transform = transforms;
    }
  },
  async decreaseScale() {
    this.increaseCall = false;
    this.decreaseCall = true;

    if (this.decreaseTimer) return;
    const tracker = document.getElementById("mouseTracker");
    if (!tracker) return;
    while (this.decreaseCall) {
      await sleep(10);
      const transforms = tracker.style.transform
        .split(" ")
        .map((item) => {
          if (item.includes("scale")) {
            if (
              +item.substring(item.indexOf("(") + 1, item.lastIndexOf(")")) <=
              1.1
            ) {
              this.decreaseCall = false;
            }
            return `scale(${
              +item.substring(item.indexOf("(") + 1, item.lastIndexOf(")")) -
              0.1
            })`;
          }
          return item;
        })
        .join(" ");

      tracker.style.transform = transforms;
    }
  },
};
