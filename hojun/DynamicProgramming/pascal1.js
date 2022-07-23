const createNextRow = (row) => {
  return row
    .map((_, ind, arr) => {
      if (ind + 1 > arr.length - 1) {
        return;
      }

      return arr[ind] + arr[ind + 1];
    })
    .filter((a) => a);
};

const generate = (numRows) => {
  const firstRow = [1];
  const pascal = [firstRow];

  for (let i = 1; i < numRows; i++) {
    const nextRow = [1, ...createNextRow(pascal[i - 1]), 1];
    pascal.push(nextRow);
  }

  return pascal;
};
