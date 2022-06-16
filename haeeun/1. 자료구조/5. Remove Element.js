//첫번째 풀이: 안된 이유? 아직 모름
var removeElement = function (nums, val) {
  nums = nums.filter((element) => element !== val);
  return nums.length;
};

//두번째 풀이
var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i -= 1;
    }
  }
  return nums.length;
};
