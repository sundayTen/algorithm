const canCompleteCircuit = (gas, cost) => {
  let answer = -1;

  const getNextIndex = (currentIndex) => {
    if (currentIndex + 1 > gas.length - 1) {
      return gas.length - (currentIndex + 1);
    }
    return currentIndex + 1;
  };

  const travel = (prevGas, index, flag) => {
    const nextIndex = getNextIndex(index);
    const total = prevGas + gas[nextIndex] - cost[nextIndex];

    if (total < cost[getNextIndex(nextIndex)]) {
      return;
    }
    console.log(index, flag, total);
    if (flag === gas.length + 1) {
      answer = nextIndex;
      return;
    }

    travel(total, nextIndex, flag + 1);
  };

  gas.forEach((gottenGas, startIndex) => {
    travel(gottenGas, startIndex, 1);
  });

  return answer;
};

console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));
