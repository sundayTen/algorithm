function islandPerimeter(grid: number[][]): number {
    let answer = 0;
    const axisXLength = grid[0].length;
    const voidArray = Array(axisXLength + 2).fill(0);

    const newGrid = [voidArray, ...grid.map((array) => [0, ...array, 0]), voidArray];

    newGrid.forEach((array, row) => {
        array.forEach((element, index) => {
            if (element === 1) {
                answer +=
                    4 -
                    (newGrid[row - 1][index] +
                        newGrid[row + 1][index] +
                        newGrid[row][index - 1] +
                        newGrid[row][index + 1]);
            }
        });
    });

    return answer;
}
