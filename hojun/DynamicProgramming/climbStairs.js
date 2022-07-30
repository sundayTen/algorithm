const climbStairs = (n) => {
  let i = 2;
  const steps = [1, 2];

  while (i < n) {
    steps.push(steps[i - 1] + steps[i - 2]);
    i++;
  }

  return steps[n - 1];
};
