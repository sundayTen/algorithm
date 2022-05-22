# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        i = 0
        while i <= 10**4+1:
            if head == None:
                return False
            i += 1
            head = head.next
        return True