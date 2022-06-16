//첫번쨰 풀이
var calPoints = function (ops) {
  let answer = [];
  let score;

  while (ops.length !== 0) {
    score = ops.shift();

    if (score === "+") {
      answer.push(answer[answer.length - 1] + answer[answer.length - 2]);
    } else if (score === "D") {
      answer.push(answer[answer.length - 1] * 2);
    } else if (score === "C") {
      answer.pop();
    } else {
      answer.push(Number(score));
    }
  }

  return answer.length === 0 ? 0 : answer.reduce((a, b) => a + b);
};

//simple answer
var calPoints = function (ops) {
  const arr = [];
  const actions = {
    C: () => arr.pop(),
    D: () => arr.push(arr[arr.length - 1] * 2),
    "+": () => arr.push(arr[arr.length - 1] + arr[arr.length - 2]),
  };
  for (let a of ops) {
    a in actions ? actions[a]() : arr.push(+a);
  }
  return arr.length === 0 ? 0 : arr.reduce((sum, num) => sum + num);
};
