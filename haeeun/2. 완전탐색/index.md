## DFS, BFS

### 이진트리

한 노드가 최대 두 개의 자식 노드를 가지는 트리

![Linkedimg](https://w.namu.la/s/4e342ca78778a1a6535ea8b3a1ae70f4443274ebec244a4f803a07ff127a3550cf1df777537736ce4edca3f71f8f11c6cd02e883e8e4b652ae3144e54d4866e7801bf94dbac0265b1e1f41553b6e899574240fb0e406e13432ae5b225c8b1491b734bd7f42a76685808cb832acf3672c)
![tree](https://user-images.githubusercontent.com/26876591/171989908-8cfe4c36-f5bb-4213-a4b1-e187da0688b8.jpg)
용어 정리

- 방향 간선(directed edge): 부모 노드에서 자식 노드로 가는 경로를 가리킨다. 위 그림에서 화살표로 표현되어 있다
- 루트 노드(root node): 부모 노드가 없는 노드
- 단말 노드(leaf node): 자식 노드가 없는 노드
- 노드의 깊이(depth, level): 루트 노드에서 특정 단말 노드까지의 길이
- 트리의 높이(height): 루트 노드에서 단말 노드까지의 길이
- 형제(sibling): 같은 부모를 가지는 노드
- p 에서 q 까지 가는 경로가 존재할 때, p 가 q 보다 루트에 가까운 노드라면 p 를 q 의 조상(ancestor)이라 하며, q 를 p 의 자손(descendent) 라고 부른다.
- 노드의 크기(size): 자신을 포함한 모든 자손 노드의 개수
- 노드의 진입차수(In-degree): 노드에 들어오는 모든 간선의 개수
- 노드의 진출 차수(Out-degree): 노드로부터 나가는 모든 간선의 개수

이진 트리 탐색

- in-order: 왼쪽 자식노드, 내 노드, 오른쪽 자식 노드 순서로 방문
- pre-order: 내 노드, 왼쪽 자식노드, 오른쪽 자식노드 순서로 방문
- post-order: 왼쪽 자식노드, 오른쪽 자식노드, 내 노드 순서로 방문
- level-order: 내 노드, 내 노드로부터 깊이 1인 노드들, 내 노드로부터 깊이 2인 노드들, ... , 내 노드로 부터 깊이 N 인 노드들
