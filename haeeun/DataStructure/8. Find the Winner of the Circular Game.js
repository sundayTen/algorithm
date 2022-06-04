var findTheWinner = function (n, k) {
  let arr = []; // [1,2,3,4,5]
  let point = 0;

  for (let i = 0; i < n; i++) {
    arr[i] = i + 1;
  }

  while (arr.length !== 1) {
    point = (point + k - 1) % arr.length;
    arr.splice(point, 1);
  }

  return arr[0];
};
