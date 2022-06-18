// https://leetcode.com/problems/n-queens/

type ELEMENT = "Q" | ".";
type PATH = ELEMENT[];

const initialize = (n: number) => {
  return Array(n)
    .fill(false)
    .map((_, i) => {
      return Array(n)
        .fill(false)
        .map((_, j) => false);
    });
};

const isPromising = (row: boolean[]) => row.every((f) => f);

function solveNQueens(n: number): string[][] {
  const chessboard = initialize(n);

  const check = (row: number, col: number) => {};

  chessboard.forEach((row, y, chessBoard) => {
    if (isPromising(row)) {
      row.forEach((val, x) => {
        if (val === false) {
          check(x, y);
        }
      });
    }
  });
  return [[""]];
}
solveNQueens(5);
