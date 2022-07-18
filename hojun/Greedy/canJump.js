const canJump = (nums) => {
  const length = nums.length;
  let canJ = false;
  const visited = Array(nums.length).fill(false);

  const jump = (init, offset) => {
    if (visited[init] || canJ) return;
    visited[init] = true;

    if (init === length - 1) {
      canJ = true;
      return;
    }

    for (let i = 0; i < offset; i++) {
      const newOffset = init + i + 1;
      if (newOffset > length - 1) {
        return;
      }

      jump(newOffset, nums[newOffset]);
    }
  };

  jump(0, nums[0]);

  return canJ;
};
