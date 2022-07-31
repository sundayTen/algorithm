var climbStairs = function (n) {
  if (n == 1) return 1;
  if (n == 2) return 2;

  let arr = [1, 2];

  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }

  return arr[arr.length - 1];
};

climbStairs(2); // 1+1, 2 =>2
climbStairs(3); // 1+1+1, 1+2, 2+1 => 3
climbStairs(4); // 1+1+1+1, 1+1+2, 1+2+1, 2+1+1, 2+2 => 5
climbStairs(5); // 1+1+1+1+1, 1+1+1+2 * 4, 1+2+2 *3 => 8
climbStairs(5); // 5 + 8 => 13
