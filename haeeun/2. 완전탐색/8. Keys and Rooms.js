var canVisitAllRooms = function (rooms) {
  let visit = Array.from({ length: rooms.length }, () => false);

  const visitRoom = (roomNumber) => {
    visit[roomNumber] = true;
    rooms[roomNumber].forEach((key) => {
      if (!visit[key]) visitRoom(key);
    });
  };

  visitRoom(0);
  return !visit.includes(false);
};
