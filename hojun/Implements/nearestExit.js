const isExitGenerator = (sizeX, sizeY) => (i, j) => {
  if (i < 0 || i >= sizeY) {
    return true;
  }

  if (j < 0 || j >= sizeX) {
    return true;
  }

  return false;
};

const nearestExit = (maze, entrance) => {
  let answer = [];
  let route = [];
  const isExit = isExitGenerator(maze[0].length, maze.length);

  const visit = (visitedMaze, room, step) => {
    const [i, j] = room;
    const isEntrance = room[0] === entrance[0] && room[1] === entrance[1];

    visitedMaze[i][j] = "+";

    [
      [i, j - 1],
      [i, j + 1],
      [i - 1, j],
      [i + 1, j],
    ].forEach((nextRoom) => {
      const [ni, nj] = nextRoom;

      if (isExit(ni, nj)) {
        if (!isEntrance) {
          answer.push(step);
          route.push(nextRoom);
        }
        return;
      }

      if (visitedMaze[ni][nj] === ".") {
        visit(visitedMaze, nextRoom, step + 1);
      }
    });
  };

  visit(maze, entrance, 0);
  return answer.length <= 0 ? -1 : Math.min(...answer);
};
