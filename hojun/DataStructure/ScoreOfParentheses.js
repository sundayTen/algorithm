// https://leetcode.com/problems/score-of-parentheses/
function scoreOfParentheses(s) {
  const chunks = s.split("");
  return extract(executeRuleOneAndTwo(chunks));
}

const executeRuleOneAndTwo = (chunks) => {
  let passIndex = -1;
  return chunks
    .map((item, index) => {
      if (index === passIndex) return null;
      if (item + chunks[index + 1] === "()") {
        passIndex = index + 1;
        return 1;
      }
      return item;
    })
    .filter((item) => item !== null);
};

const extract = (arr) => {
  console.log("🚀 DATA :  ~ arr", arr);
  let sum = 0;
  let acc = 0;
  let mul = 1;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" && arr[i] >= 1) {
      acc += arr[i];
    }
    if (arr[i] === "(") {
      mul *= 2;
      sum += acc;
      acc = 0;
    }
    if (arr[i] === ")") {
      sum += mul * acc;
      mul = 1;
      acc = 0;
    }
  }
  return sum + acc;
};

// console.log(scoreOfParentheses("()"));
// console.log(scoreOfParentheses("((((()))))()(()())()"));
// console.log(scoreOfParentheses("(()(()))"));

console.log("((((()))))()(()())()".replaceAll("()", 1));
console.log("(()(()))".replaceAll("()", 1));

const convertNumber = (arr) => {
  console.log("🚀 DATA :  ~ arr", arr);
  const numMap = arr.map((d) => !(d === "(" || d === ")"));
  const result = [];
  let acc = 0;
  numMap.forEach((d, index) => {
    if (d) {
      acc += Number(arr[index]);
      return;
    }
    if (acc > 0 || index === arr.length) {
      result.push(acc);
    }
    acc = 0;
    result.push(arr[index]);
  });
  return result.join("");
};

console.log(convertNumber("((((1))))1(11)1".split("")));
