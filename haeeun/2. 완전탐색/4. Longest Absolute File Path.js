/**
 * @param {string} input
 * @return {number}
 */
var pathLength = function (path) {
  let length = 0;
  for (let i = 0; i < path.length; i++) {
    length += path[i].length;
  }
  return length;
};

var lengthLongestPath = function (input) {
  let arr = [...input];
  let path = [];
  let str = "";
  let count = 0;
  let answer = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "\n") {
      if (path[count]) {
        path[count] = str + "/";
        path = path.splice(0, count + 1);
        count = 0;
        if (str.indexOf(".") !== -1) {
          answer =
            answer >= pathLength(path) - 1 ? answer : pathLength(path) - 1;
        }
      } else {
        path.push(str + "/");
        count = 0;
        if (str.indexOf(".") !== -1) {
          answer =
            answer >= pathLength(path) - 1 ? answer : pathLength(path) - 1;
        }
      }
      str = "";
    } else if (arr[i] === "\t") {
      count++;
    } else {
      str = str + arr[i];
    }

    if (i === arr.length - 1) {
      if (path[count]) {
        path[count] = str;
        path = path.splice(0, count + 1);
        if (str.indexOf(".") !== -1) {
          answer = answer >= pathLength(path) ? answer : pathLength(path);
        }
      } else {
        path.push(str);
        if (str.indexOf(".") !== -1) {
          answer = answer >= pathLength(path) ? answer : pathLength(path);
        }
      }
    }
  }

  return answer;
};
