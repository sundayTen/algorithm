var canJump = function (nums) {
  let visit = new Array(nums.length).fill(false);
  visit[0] = true;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j <= i + nums[i]; j++) {
      if (visit[i]) visit[j] = true;
    }
    if (visit[nums.length - 1]) break;
  }

  console.log(visit[nums.length - 1]);
};

canJump([3, 2, 1, 0, 4]);
canJump([2, 3, 1, 1, 4]);
canJump([0, 2, 3]);
