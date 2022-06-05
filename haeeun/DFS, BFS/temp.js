var createGraphArray = function (input) {
  let arr = [...input];
  let str = "";
  let tCount = 0;
  let graph = [];
  let answer = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "\n") {
      if (graph[tCount]) {
        graph[tCount].push(str);
      } else {
        graph[tCount] = new Array();
        graph[tCount].push(str);
      }

      str = "";
      tCount = 0;
      continue;
    } else if (arr[i] === "\t") {
      tCount += 1;
      continue;
    } else {
      str = str + arr[i];
    }

    if (i === arr.length - 1) {
      if (graph[tCount]) {
        graph[tCount].push(str);
      } else {
        graph[tCount] = new Array();
        graph[tCount].push(str);
      }
    }
  }

  return graph;
};

var lengthLongestPath = function (input) {
  if (input.slice(0, 3) !== "dir") return 0;

  let arr = [...input];
  let str = "";
  let tCount = 0;
  let graph = [];
  let answer = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "\n") {
      if (graph[tCount]) {
        graph[tCount].push(str);
      } else {
        graph[tCount] = new Array();
        graph[tCount].push(str);
      }

      str = "";
      tCount = 0;
      continue;
    } else if (arr[i] === "\t") {
      tCount += 1;
      continue;
    } else {
      str = str + arr[i];
    }

    if (i === arr.length - 1) {
      if (graph[tCount]) {
        graph[tCount].push(str);
      } else {
        graph[tCount] = new Array();
        graph[tCount].push(str);
      }
    }
  }
};
