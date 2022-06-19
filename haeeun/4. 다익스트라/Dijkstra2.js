const Node = function (vertex, weight = 0) {
  this.vertex = vertex;
  this.weight = weight;
  this.link = null;
};

const Graph = function (size) {
  this.graph = Array.from(
    { length: size },
    (e, i) => new Node(String.fromCharCode(65 + i))
  );

  const insertNode = (v1, v2, w) => {
    const v1Node = new Node(v1, w);
    const v2Node = new Node(v2, w);
    const v1Idx = v1.charCodeAt(0) - 65;
    const v2Idx = v1.charCodeAt(0) - 65;
    let graph1 = this.graph[v1Idx];
    let graph2 = this.graph[v2Idx];

    if (graph1.link === null) {
      graph1.link = v2Node;
    } else {
      while (graph1.link !== null) {
        graph1 = graph1.link;
      }
      graph1.link = v2Node;
    }

    if (graph2.link === null) {
      graph2.link = v2Node;
    } else {
      while (graph2.link !== null) {
        graph2 = graph2.link;
      }
      graph2.link = v2Node;
    }

    return;
  };

  Graph.prototype.insertEdge = function (v1, v2, w) {
    insertNode(v1, v2, w);
  };

  //간선 그래프 출력
  Graph.prototype.printGraph = function () {
    for (let i = 0; i < size; i++) {
      let graph = this.graph[i];
      let print = graph.vertex;
      while (graph.link !== null) {
        graph = graph.link;
        print += `--[${graph.weight}--${graph.vertex}]`;
      }
      console.log(print);
    }
  };
};

//매개변수: 힙, 그래프, 이동거리(가중치), 방문여부
const heapPush = (h, g, move, isVisit) => {
  while (g.link !== null) {
    g = g.link;

    let idx = g.vertex.charCodeAt(0) - 65;
    if (!isVisit[idx]) {
      if (!h.length) h.push({ v: g.vertex, w: g.weight + move });
      else {
        if (h[0].w > g.weight) {
          let temp = h[0];
          h[0] = { v: g.vertex, w: g.weight + move };
          h.push(temp);
        } else {
          h.push({ v: g.vertex, w: g.weight + move });
        }
      }
    }
  }
};

//최소 힙 구하기
const heapPop = (h) => {
  const item = h[0];
  const lastItem = h.pop();
  let idx = 0;

  if (!h.length) return item;
  h[0] = lastItem;
  while (h[idx * 2 + 1] || h[idx * 2 + 2]) {
    let temp = 0;

    //왼쪽 자식노드 검사
    if (h[0].w > h[idx * 2 + 1].w) {
      temp = h[0];
      h[0] = h[idx * 2 + 1];
      h[idex * 2 + 1] = temp;
      idx = idx * 2 + 1;
    }

    //오른쪽 자식노드 검사
    else if (h[idx * 2 + 2] && h[0] * w > h[idx * 2 + 2].w) {
      temp = h[0];
      h[0] = h[idx * 2 + 2];
      h[idex * 2 + 2] = temp;
      idx = idx * 2 + 2;
    }

    //왼쪽 오른쪽 자식 노드 둘 다 루트 노드보다 클 경우
    else idx++;
  }

  return item;
};

const dijkstra = (start, graph) => {
  const size = graph.length;
  const isVisit = new Array(size).fill(false);
  const dist = []; // 거리 배열
  const heap = [];
  let move = 0;
  let idx = start.charCodeAt(0) - 65; // 현재 인덱스
  let g = graph[idx]; // 현재 그래프
  heap.push({ v: g.vertex, w: g.weight }); // 시작 노드 그래프 push

  while (heap.length) {
    g.heapPop(heap);
    idx = g.v.charCodeAt(0) - 65;

    if (!isVisit[idx]) {
      isVisit[idx] = true;
      move = g.w;
      dist[idx] = move;
      heapPush(heap, graph[idx], move, isVisit);
    }
  }

  console.log(dist);
};

const main = (function () {
  const graph = new Graph(6);

  graph.insertEdge("A", "B", 10);
  graph.insertEdge("A", "C", 1);
  graph.insertEdge("A", "D", 4);
  graph.insertEdge("B", "C", 2);
  graph.insertEdge("B", "D", 5);
  graph.insertEdge("C", "D", 1);
  graph.insertEdge("C", "F", 8);
  graph.insertEdge("D", "F", 3);
  graph.insertEdge("F", "E", 2);

  graph.printGraph();
  dijkstra("A", graph.getGraph());
})();
