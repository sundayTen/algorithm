class FindSumPairs {
  constructor(nums1, nums2) {
    this.nums1 = nums1;
    this.nums2 = nums2;
  }

  add(index, val) {
    this.nums2[index] += val;
  }

  count(tot) {
    let acc = 0;
    const target1 = this.nums1.filter((num) => num <= tot);
    const target2 = this.nums2.filter((num) => num <= tot);

    for (let i = 0; i < target1.length; i++) {
      for (let j = 0; j < target2.length; j++) {
        if (target1[i] + target2[j] === tot) {
          acc = acc + 1;
        }
      }
    }
    return acc;
  }
}
