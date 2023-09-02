export const trackerActions = {
  increaseTimer: undefined,
  decreaseTimer: undefined,
  increaseScale() {
    if (this.decreaseTimer) {
      clearInterval(this.decreaseTimer);
      this.decreaseTimer = undefined;
    }

    if (this.increaseTimer) return;
    const tracker = document.getElementById("mouseTracker");
    this.increaseTimer = setInterval(() => {
      const transforms = tracker.style.transform
        .split(" ")
        .map((item) => {
          if (item.includes("scale")) {
            if (
              +item.substring(item.indexOf("(") + 1, item.lastIndexOf(")")) >=
              2.9
            ) {
              clearInterval(this.increaseTimer);
              this.increaseTimer = undefined;
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
    }, 10);
  },
  decreaseScale() {
    if (this.increaseTimer) {
      clearInterval(this.increaseTimer);
      this.increaseTimer = undefined;
    }

    if (this.decreaseTimer) return;
    const tracker = document.getElementById("mouseTracker");

    this.decreaseTimer = setInterval(() => {
      const transforms = tracker.style.transform
        .split(" ")
        .map((item) => {
          if (item.includes("scale")) {
            if (
              +item.substring(item.indexOf("(") + 1, item.lastIndexOf(")")) <=
              1.1
            ) {
              clearInterval(this.decreaseTimer);
              this.decreaseTimer = undefined;
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
    }, 10);
  },
};
