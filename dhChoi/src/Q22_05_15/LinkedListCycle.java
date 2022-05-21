package Q22_05_15;


public class LinkedListCycle {

  public class Solution {

    public boolean hasCycle(ListNode head) {
      ListNode test1 = head;
      ListNode test2 = head;

      while (test1 != null && test1.next != null) {
        test1 = test1.next.next;
        test2 = test2.next;
        if (test1 == test2) {
          return true;
        }
      }

      return false;
    }
  }
}
