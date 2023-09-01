export const windowSizeTracker = (callBack) => {
  const updateSize = () => {
    callBack({ height: window.innerHeight, width: window.innerWidth });
  };
  updateSize();
  window.addEventListener("resize", updateSize);
  window.addEventListener("popstate", () => {
    setTimeout(() => {
      updateSize();
    }, 500);
  });
};
