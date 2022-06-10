type Keys = number[];
type Rooms = Keys[];

/**
 * 0부터 n-1까지의 방 n개가 있다. 0번 방을 제외한 모든 방은 잠겨있다.
 * key가 있는 방은 들어갈 수 있는데, 모든 방을 들어갈 수 있는지 여부를 리턴하라.
 * 방에 들어가면, distinct keys라는 <number>array를 얻을 수 있는데, 이 안의 key로 문을 열 수 있다.
 * @param { Rooms } rooms
 * @returns
 */
function canVisitAllRooms(rooms: Rooms): boolean {
  const opened = Array(rooms.length).fill(false);

  const open = (roomNumber: number) => {
    if (!opened[roomNumber]) {
      opened[roomNumber] = true;
      rooms[roomNumber].forEach(open);
    }

    return;
  };

  open(0);

  return opened.every((open) => open);
}
