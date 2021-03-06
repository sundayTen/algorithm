DFS, BFS 는 트리를 탐색하는 방법 중 하나입니다.

모든 노드를 순회해야하는 Full Scan 문제에는 둘 중 어느것을 사용해도 별 차이가 없습니다. 즉 Time Complexity는 동일합니다.

하지만 특정 노드를 먼저 찾는 문제의 경우, 그 경우에 따라 특정 순회방법이 더 효율적인 알고리즘이 될 수 있습니다.

# DFS (Depth First Search)

깊이 우선 탐색이라 부르고

## 장점

경로를 기억한다.

찾으려는 노드가 깊은곳에 위치한다면 BFS보다 효율이 좋다.

## 단점

최단경로라는 보장이 없다.

# BFS (Breadth First Search)

너비 우선 탐색이라고 부르고, 같은 Level의 노드들 (Sibling)들을 우선 탐색합니다.

## 장점

깊이가 무한정 길어지는 트리에서도 최단거리를 찾을 수 있다. (최단거리가 어딘가에 있다면)

## 단점

찾으려는 경로가 깊을 경우 효율이 떨어진다.

- 해가 존재하지 않는다면 유한 그래프(finite graph)의 경우에는 모든 그래프를 탐색한 후에 실패로 끝난다.
- 무한 그래프(infinite graph)의 경우에는 결코 해를 찾지도 못하고, 끝내지도 못한다.

---

|          | DFS                                | BFS                                |
| -------- | ---------------------------------- | ---------------------------------- | ----- |
| 설명     | 현재 노드에서 깊게 들어가면서 탐색 | 현재 노드에서 가까운 노드부터 탐색 |
| 구현방법 | Stack                              | Recursive                          | Queue |

[https://w.namu.la/s/1fe9246903b78fae07577b243a0b22791e02cb39640d5cbaae10d9849343b4ea6f162a9a677a5892fbf7819abd4ef7221ebd3608849cfb66793411fb5e6439511c8a807f0612cfd01b7c39aa3acc08f8be0179ace3eb18f1aa74856323400c70](https://w.namu.la/s/1fe9246903b78fae07577b243a0b22791e02cb39640d5cbaae10d9849343b4ea6f162a9a677a5892fbf7819abd4ef7221ebd3608849cfb66793411fb5e6439511c8a807f0612cfd01b7c39aa3acc08f8be0179ace3eb18f1aa74856323400c70)

# 사용 방법

1. 풀 스캔

   모든 노드를 방문해야하는 문제의 경우 두 알고리즘 중 어느것을 사용해도 무방합니다.

2. 경로 저장

   이동 하는 경로를 저장해야하거나 가중치를 둔다던가 하는 장치가 있다면 DFS 활용

3. 최단거리

   최단거리 문제에는 BFS를 활용

## Traversal

트리를 순회하는 순서.

1. InOrder
   가장 왼쪽 노드까지 내려감

   1. 가장 왼쪽 노드 방문
   2. 왼쪽 트리 순회
   3. 루트노드 방문
   4. 오른쪽 트리 순회

2. PostOrder
   가장 왼쪽 노드까지 내려감

   1. 가장 왼쪽 노드 방문
   2.

3. PreOrder

   1. 루트 노드를 방문하고
   2. 왼쪽 트리를 순회
   3. 오른쪽 트리를 순휘

## Node with Array

[이거 아닌가요..?](https://www.techiedelight.com/build-binary-tree-given-parent-array/)
