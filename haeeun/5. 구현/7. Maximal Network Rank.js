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

// 심플한 답
var maximalNetworkRank = function (n, roads) {
  const graph = [];

  for (let i = 0; i < n; i++) {
    graph.push(Array(n).fill(0));
  }

  for (const [from, to] of roads) {
    graph[from][to] = 1;
    graph[to][from] = 1;
  }

  const ranks = [];

  for (let i = 0; i < n; i++) {
    ranks[i] = graph[i].filter((x) => x > 0).length;
  }

  let max = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const res = ranks[i] + ranks[j] + (graph[i][j] > 0 ? -1 : 0);
      max = Math.max(max, res);
    }
  }

  return max;
};
