type Keys = number[];
type Rooms = Keys[];

function canVisitAllRooms(rooms: Rooms): boolean {
  const opened = Array(rooms.length).fill(false);

  const open = (roomNumber: number) => {
    if (!opened[roomNumber]) {
      opened[roomNumber] = true;
      rooms[roomNumber].forEach(open);
    }
  };

  open(0);

  return opened.every((open) => open);
}
