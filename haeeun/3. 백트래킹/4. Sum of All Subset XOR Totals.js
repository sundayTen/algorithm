//이차원 배열은 깊은 복사가 안된다는 것을 처음 앎
var subsetXORSum = function (nums) {
  let all = [];
  let answer = 0;

  nums.forEach((num) => {
    let currentAnswer = [...all];
    let addArray = currentAnswer.map((element) => element + " " + String(num));
    addArray.push(String(num));
    all = all.concat(addArray);
  });

  all.forEach((element) => {
    let XORArray = element.split(" ");
    answer += XORArray.reduce((pre, cur) => pre ^ cur, 0);
  });

  return answer;
};
