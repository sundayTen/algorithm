/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function (s) {
  const arr = [...s];
  let stack = [];
  let answer = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(") {
      stack.push(0);
    } else {
      let num = stack.pop();

      if (num === 0) num = 1;

      if (stack.length >= 1) {
        stack[stack.length - 1] += 2 * num;
      } else {
        answer += num;
      }
    }
  }

  return answer;
};
