package Q22_05_15;

import java.util.HashMap;

public class FindSumPairs {

  HashMap<Integer, Integer> map = new HashMap<>();
  int[] list1;
  int[] list2;

  public FindSumPairs(int[] nums1, int[] nums2) {
    list1 = nums1;
    list2 = nums2;

    for (int i = 0; i < list2.length; i++) {
      map.put(list2[i], map.getOrDefault(list2[i], 0) + 1);
    }
  }

  public void add(int index, int val) {
    int key = list2[index];
    map.put(key, map.getOrDefault(key, 0) - 1);
    list2[index] += val; // key += val로 해서 안되는 이유 ?..
    map.put(list2[index], map.getOrDefault(list2[index], 0) + 1);
  }

  public int count(int tot) {
    int count = 0;

    for (int i = 0; i < list1.length; i++) {
      int key = tot - list1[i];
      count += map.getOrDefault(key, 0);
    }

    return count;
  }
}
