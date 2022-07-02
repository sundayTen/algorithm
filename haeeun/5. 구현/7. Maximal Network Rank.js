var maximalNetworkRank = function (n, roads) {
  let count = Array(n).fill(0);

  //각 도시에 연결된 도시의 수 카운트
  roads.forEach((element) => {
    count[element[0]]++;
    count[element[1]]++;
  });

  //가장 연결이 많이 된 도시의 수와 인덱스 배열 반환
  let max = findMaxRoads(count);
  let second = {};

  //max 배열이 한개인 경우 그 다음으로 많은 도시 찾기
  if (max.roads.length === 1) {
    count = count.map((element) => {
      return element === max.count ? -1 : element;
    });
    second = findMaxRoads(count);
  } else {
    second = max;
  }

  let answer = max.count + second.count;
  //인접하지 않은 max 와 second 의 index 가 있으면 answer 그대로 반환
  console.log(
    checkNotConnectRoads(roads, max.roads, second.roads) ? answer : answer - 1
  );
};

const findMaxRoads = (count) => {
  let maxRoads = [];
  let maxCount = Math.max(...count);

  for (let i = 0; i < count.length; i++) {
    if (count[i] === maxCount) {
      maxRoads.push(i);
    }
  }
  return { count: maxCount, roads: maxRoads };
};

const checkNotConnectRoads = (roads, max, second) => {
  let check = false;
  roads = roads.map((element) => (element = element[0] + " " + element[1]));

  for (let i = 0; i < max.length; i++) {
    for (let j = 0; j < second.length; j++) {
      if (max[i] === second[j]) continue;
      if (
        !roads.includes(max[i] + " " + second[j]) &&
        !roads.includes(second[j] + " " + max[i])
      ) {
        check = true;
      }
    }
  }

  return check;
};

//4
// count [ 2, 3, 1, 2 ]
// max { count: 3, roads: [ 1 ] }
// second { count: 2, roads: [ 0, 3 ] }
maximalNetworkRank(4, [
  [0, 1],
  [0, 3],
  [1, 2],
  [1, 3],
]);

//5
// count [ 2, 3, 3, 3, 1 ]
// max { count: 3, roads: [ 1, 2, 3 ] }
// second { count: 3, roads: [ 1, 2, 3 ] }
maximalNetworkRank(5, [
  [0, 1],
  [0, 3],
  [1, 2],
  [1, 3],
  [2, 3],
  [2, 4],
]);

//5
// count [
//   1, 2, 3, 1,
//   1, 2, 1, 1
// ]
// max { count: 3, roads: [ 2 ] }
// second { count: 2, roads: [ 1, 5 ] }
maximalNetworkRank(8, [
  [0, 1],
  [1, 2],
  [2, 3],
  [2, 4],
  [5, 6],
  [5, 7],
]);

maximalNetworkRank(33, [
  [7, 3],
  [31, 21],
  [2, 18],
  [32, 0],
  [21, 28],
  [29, 16],
  [32, 3],
  [0, 2],
  [2, 3],
  [25, 12],
  [7, 26],
  [5, 29],
  [18, 6],
  [3, 10],
  [16, 6],
  [27, 31],
  [27, 24],
  [21, 15],
  [9, 32],
  [2, 24],
  [14, 7],
  [19, 0],
  [20, 21],
  [5, 27],
  [12, 28],
  [28, 11],
  [6, 7],
  [4, 11],
  [4, 30],
  [18, 13],
  [5, 20],
  [29, 19],
  [3, 0],
  [30, 21],
  [15, 3],
  [9, 15],
  [1, 16],
  [27, 4],
  [21, 19],
  [8, 24],
  [16, 20],
  [14, 16],
  [0, 9],
  [24, 32],
  [19, 13],
  [23, 4],
  [32, 22],
  [4, 28],
  [27, 13],
  [22, 2],
  [22, 25],
  [30, 19],
  [32, 20],
  [26, 18],
  [21, 32],
  [13, 32],
  [1, 25],
  [29, 2],
  [24, 26],
  [12, 29],
  [4, 13],
  [8, 11],
  [26, 13],
  [6, 17],
  [10, 13],
  [1, 12],
  [10, 24],
  [29, 20],
  [3, 4],
  [11, 12],
  [13, 22],
  [7, 30],
  [6, 19],
  [14, 30],
  [28, 14],
  [28, 2],
  [14, 2],
  [5, 25],
  [31, 3],
  [12, 10],
  [16, 10],
  [31, 6],
  [15, 16],
  [21, 25],
  [27, 30],
  [15, 17],
  [25, 14],
  [6, 22],
  [22, 3],
  [14, 18],
  [5, 6],
  [32, 14],
  [17, 21],
  [29, 18],
  [19, 15],
  [16, 22],
  [7, 9],
  [19, 10],
  [20, 6],
  [13, 5],
  [27, 9],
  [22, 30],
  [19, 3],
  [19, 2],
  [2, 27],
  [2, 12],
  [30, 15],
  [24, 31],
  [9, 17],
  [23, 14],
  [6, 23],
  [5, 10],
  [16, 26],
  [19, 31],
  [16, 27],
  [27, 11],
  [4, 9],
  [1, 20],
  [29, 11],
  [23, 30],
  [0, 7],
  [30, 0],
  [18, 4],
  [0, 23],
  [5, 1],
  [8, 31],
  [8, 7],
  [31, 1],
  [1, 7],
  [17, 30],
  [2, 23],
  [9, 30],
  [24, 1],
  [31, 10],
  [14, 10],
  [5, 19],
  [4, 6],
  [16, 25],
  [23, 27],
  [30, 13],
  [8, 1],
  [8, 21],
  [27, 14],
  [10, 18],
  [24, 30],
  [26, 3],
  [27, 10],
  [9, 19],
  [3, 6],
  [1, 23],
  [25, 26],
  [26, 17],
  [20, 11],
  [16, 19],
  [27, 21],
  [31, 5],
  [25, 13],
  [16, 21],
  [2, 30],
  [11, 7],
  [3, 20],
  [3, 14],
  [26, 8],
  [14, 21],
  [15, 6],
  [6, 10],
  [16, 0],
  [25, 23],
  [25, 8],
  [16, 30],
  [27, 7],
  [25, 20],
  [27, 22],
  [13, 24],
  [25, 6],
  [28, 19],
  [15, 13],
  [31, 20],
  [24, 9],
  [16, 12],
  [26, 2],
  [14, 13],
  [3, 11],
  [10, 25],
  [29, 7],
  [21, 10],
  [15, 27],
  [12, 7],
  [4, 1],
  [32, 16],
  [12, 20],
  [3, 1],
  [15, 0],
  [5, 18],
  [5, 15],
  [3, 5],
  [9, 1],
  [11, 18],
  [11, 31],
  [13, 28],
  [10, 8],
  [1, 15],
  [19, 17],
  [14, 19],
  [11, 22],
  [2, 13],
  [5, 8],
  [14, 26],
  [25, 7],
  [7, 18],
  [17, 16],
  [13, 20],
  [31, 0],
  [0, 12],
  [12, 24],
  [8, 2],
  [13, 31],
  [1, 18],
  [9, 31],
  [32, 18],
  [31, 30],
  [16, 4],
  [30, 1],
  [21, 18],
  [24, 16],
  [15, 14],
  [31, 28],
  [4, 17],
  [21, 6],
  [7, 10],
  [4, 32],
  [5, 24],
  [21, 22],
  [6, 30],
  [7, 15],
  [9, 12],
  [24, 18],
  [4, 2],
  [0, 18],
  [27, 26],
  [1, 6],
  [3, 8],
  [12, 14],
  [18, 28],
  [30, 26],
  [6, 13],
  [7, 4],
  [30, 8],
  [16, 13],
  [31, 23],
  [21, 5],
  [29, 21],
  [32, 25],
  [0, 21],
  [30, 5],
  [1, 11],
  [12, 17],
  [15, 11],
  [22, 20],
  [19, 11],
  [32, 26],
  [5, 11],
  [17, 7],
  [24, 28],
  [25, 9],
  [28, 9],
  [13, 3],
  [28, 5],
  [32, 27],
  [20, 27],
  [24, 23],
  [2, 32],
  [20, 15],
  [10, 1],
  [24, 29],
  [5, 14],
  [28, 23],
  [17, 31],
  [27, 3],
  [29, 32],
  [25, 4],
  [1, 13],
  [26, 1],
  [11, 17],
  [0, 28],
  [8, 19],
  [13, 0],
  [19, 23],
  [15, 28],
  [6, 29],
  [31, 29],
  [0, 11],
  [25, 2],
  [18, 12],
  [7, 28],
  [2, 21],
  [3, 25],
  [4, 8],
  [32, 6],
  [11, 2],
  [9, 2],
  [0, 26],
  [8, 13],
  [31, 16],
  [26, 22],
  [17, 2],
  [16, 18],
  [28, 10],
  [23, 18],
  [4, 10],
  [8, 18],
  [28, 3],
  [17, 25],
  [28, 6],
  [27, 18],
  [15, 2],
  [15, 12],
  [18, 25],
  [11, 10],
  [9, 3],
  [18, 15],
  [23, 9],
  [26, 12],
  [16, 9],
  [26, 9],
  [21, 3],
  [24, 15],
  [14, 31],
  [12, 31],
  [27, 19],
  [19, 25],
  [16, 7],
  [4, 21],
  [8, 29],
  [4, 24],
  [10, 29],
  [11, 9],
  [21, 7],
  [7, 22],
  [7, 32],
  [3, 23],
  [14, 6],
  [17, 23],
  [29, 1],
  [5, 12],
  [2, 1],
  [19, 26],
  [16, 5],
  [5, 32],
  [12, 30],
  [28, 32],
  [32, 17],
  [22, 15],
  [25, 27],
  [23, 29],
  [24, 0],
  [32, 10],
  [0, 27],
  [1, 0],
  [0, 20],
  [13, 17],
  [6, 12],
  [24, 14],
  [7, 31],
  [23, 26],
  [29, 30],
  [14, 20],
  [23, 15],
  [29, 15],
  [20, 9],
  [32, 8],
  [6, 8],
  [20, 19],
  [2, 7],
  [23, 7],
  [32, 30],
  [5, 23],
  [16, 11],
  [3, 18],
  [22, 0],
  [32, 15],
  [9, 22],
  [13, 11],
  [14, 9],
  [31, 4],
  [15, 25],
  [3, 29],
]);
