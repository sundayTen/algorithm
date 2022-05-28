function calPoints(ops: string[]): number {
  let scoreBoard: number[] = [];

  ops.forEach((option) => {
    const currentIndex = scoreBoard.length - 1;
    switch (option) {
      case "D":
        scoreBoard.push(Number(scoreBoard[currentIndex]) * 2);
        break;
      case "C":
        scoreBoard.pop();
        break;
      case "+":
        scoreBoard.push(
          Number(scoreBoard[currentIndex] + scoreBoard[currentIndex - 1])
        );
        break;
      default:
        scoreBoard.push(Number(option));
    }
  });
  return scoreBoard.reduce((acc, cur) => acc + cur, 0);
}
