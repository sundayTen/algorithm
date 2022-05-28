// https://leetcode.com/problems/remove-element/
function removeElement(nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums[i] = "_";
    }
  }

  nums.sort();

  return nums.filter((num) => num !== "_").length;
}
