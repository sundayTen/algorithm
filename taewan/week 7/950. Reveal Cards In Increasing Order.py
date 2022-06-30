class Solution:
    def deckRevealedIncreasing(self, deck: List[int]) -> List[int]:
        deck.sort()
        deq = collections.deque(range(len(deck)))
        loc = []
        ans = [0] * len(deck)
        while deq:
            loc.append(deq.popleft())
            if deq:
                deq.append(deq.popleft())
        
        for i in range(len(loc)):
            ans[loc[i]] = deck[i]
        
        return ans