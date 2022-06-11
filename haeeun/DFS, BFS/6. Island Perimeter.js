var islandPerimeter = function (grid) {
  let answer = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        answer = answer + 4 - countSurroundLand(grid, i, j);
      }
    }
  }

  return answer;
};

var countSurroundLand = function (grid, i, j) {
  let count = 0;

  if (i - 1 >= 0 && grid[i - 1][j] === 1) count++;
  if (j - 1 >= 0 && grid[i][j - 1] === 1) count++;
  if (j + 1 < grid[i].length && grid[i][j + 1] === 1) count++;
  if (i + 1 < grid.length && grid[i + 1][j] === 1) count++;

  return count;
};
