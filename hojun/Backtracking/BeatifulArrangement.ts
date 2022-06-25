// https://leetcode.com/problems/beautiful-arrangement/

const isBeautiful = (labels: number[]) => (perm: number[]) => {
  labels.every((label) => perm.every((pureLabel) => label % pureLabel === 0));
};


function countArrangement(n: number) {
  const labels = Array.from(new Array(n), (_, i) => i + 1);
  const isBeautifulPerm = isBeautiful(labels);
  let perms = [];


  //   return perms.filter(isBeautifulPerm).length;
}

console.log(countArrangement(5));
