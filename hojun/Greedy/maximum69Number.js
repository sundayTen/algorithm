const maximum69Number = (num) => {
  const digits = num.toString().split("");
  const changingIndex = digits.findIndex((digit) => digit === "6");
  digits[changingIndex] = "9";

  return Number(digits.join(""));
};
