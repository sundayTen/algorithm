function islandPerimeter(grid: number[][]): number {
  let answer = 0;
  const axisXLength = grid[0].length;
  const voidArray = Array(axisXLength + 2).fill(0);

  const augmentedGrid = [
    voidArray,
    ...grid.map((array) => [0, ...array, 0]),
    voidArray,
  ];

  augmentedGrid.forEach((array, row) => {
    array.forEach((element, index) => {
      if (element === 1) {
        answer +=
          4 -
          (augmentedGrid[row - 1][index] +
            augmentedGrid[row + 1][index] +
            augmentedGrid[row][index - 1] +
            augmentedGrid[row][index + 1]);
      }
    });
  });

  return answer;
}
