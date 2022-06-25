const xor = (num1, num2) => num1 ^ num2;

const getSubsets = (arr) => {
  let checker = new Array(arr.length).fill(false);
  const subSets = [];

  const getSubSet = (depth) => {
    if (depth === arr.length) {
      const subSet = arr.filter((_, index) => checker[index]);
      subSets.push(subSet);
      return;
    }

    checker[depth] = true;
    getSubSet(depth + 1);

    checker[depth] = false;
    getSubSet(depth + 1);
  };

  getSubSet(0);

  return subSets;
};

function subsetXORSum(nums) {
  const subsets = getSubsets(nums);
  return subsets
    .map((subset) => {
      if (subset.length === 0) {
        return 0;
      }
      return subset.reduce((acc, cur) => xor(acc, cur));
    })
    .reduce((acc, cur) => acc + cur);
}
