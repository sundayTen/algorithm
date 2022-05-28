## Linked list

- Array List 와 다르게 엘리먼트와 엘리먼트 간의 연결을 이용해서 리스트를 구현한 것
- 장점: 삽입, 삭제시 용이
- 단점: array 보다 많은 메모리 사용, 특정 element 검색 시 비효율적

![Linkedimg](https://wayhome25.github.io/assets/post-img/cs/linked-list2.png)

- 메소드
  - 생성자: head. before, current, tail, num_of_data
  - .append(): 맨 뒤에 노드 추가
  - .first(): 맨 앞의 노드 검색
  - .next(): 다음 노드 검색
  - .delete(): 현재 노드 삭제

## Hash map

- key와 value 를 가지는 자료구조 형태
- hash function을 통해 빠른 탐색 가능 -> O(n)
- 탐색은 get(), 삽입은 set(), 찾기는 has(),
- key는 고유값으로, 단 한개만 존재
- key 가능 자료형: number, string, function, object, NaN

- 메소드
  - get(): 탐색, return value
  - set(): 삽입
  - has(): 찾기, return boolean
  - delete(): 삭제, return boolean
  - size: map size, length X
