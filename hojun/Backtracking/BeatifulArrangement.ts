// https://leetcode.com/problems/beautiful-arrangement/

const isBeautiful = (labels: number[]) => (perm: number[]) => {
  labels.every((label) => perm.every((pureLabel) => label % pureLabel === 0));
};

// const isBeautifulArrangement = (nums: number[]) => nums.every();

function countArrangement(n: number): number[][] {
  const labels = Array.from(new Array(n), (_, i) => i + 1);
  const isBeautifulPerm = isBeautiful(labels);
  let perms = [];

  function permutation(arr: number[], num: number) {
    const res: number[][] = [];
    if (num === 1) return arr.map((v) => [v]);

    arr.forEach((v, idx, arr) => {
      const rest = [...arr.slice(0, idx), ...arr.slice(idx + 1)];
      const permutations = permutation(rest, num - 1);
      const attach = permutations.map((permutation) => [v, ...permutation]);
      res.push(...attach);
    });
    return res;
  }

  const allPermutation = labels.map((label) => permutation(labels, label));

  return allPermutation.flat();

  //   return perms.filter(isBeautifulPerm).length;
}

console.log(countArrangement(5));
