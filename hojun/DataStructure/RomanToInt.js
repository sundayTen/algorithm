// https://leetcode.com/problems/roman-to-integer/

const converter = (romanNumber) => {
  switch (romanNumber) {
    case "I":
      return 1;
    case "V":
      return 5;
    case "X":
      return 10;
    case "L":
      return 50;
    case "C":
      return 100;
    case "D":
      return 500;
    case "M":
      return 1000;

    default:
      break;
  }
};

const complexConverter = (complex) => {
  switch (complex) {
    case "IV":
      return 4;
    case "IX":
      return 9;
    case "XL":
      return 40;
    case "XC":
      return 90;
    case "CD":
      return 400;
    case "CM":
      return 900;

    default:
      return 0;
  }
};

const romanToInt = (s) => {
  let passIndex = -1;
  return s
    .split("")
    .map((value, index, arr) => {
      if (passIndex === index) return 0;
      const v = complexConverter(arr[index] + arr[index + 1]);
      if (v > 0) {
        passIndex = index + 1;
        return v;
      }
      return converter(value);
    })
    .reduce((acc, cur) => acc + cur);
};
