var canCompleteCircuit = function (gas, cost) {
  let curr = 0;
  let tank = 0;
  let start = 0;

  for (let i = 0; i < gas.length; i++) {
    tank += gas[i] - cost[i];
    curr += gas[i] - cost[i];
    if (curr < 0) {
      curr = 0;
      start = i + 1;
    }
  }

  console.log(tank >= 0 ? start : -1);
};

canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]);
