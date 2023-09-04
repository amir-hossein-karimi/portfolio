export const sleep = (timer = 1_000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, timer);
  });
};

export const isPostalCodeValid = (postalCode = "") => {
  const pc = postalCode.toString();
  if (!isNumeric(pc)) return false;

  return (
    pc.length === 10 &&
    !pc.slice(0, 5).includes("2") &&
    !pc.slice(0, 5).includes("0") &&
    pc[4] !== "5" &&
    pc[5] !== "0" &&
    pc.slice(-4) !== "0000" &&
    !pc.split("").every((char) => char === pc[0])
  );
};
