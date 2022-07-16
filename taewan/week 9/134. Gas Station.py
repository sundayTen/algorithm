class Solution:
    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:
        gc = [gas[i] - cost[i] for i in range(len(gas))]
        gas, start, n = 0, 0, len(gc)
        for i in range(n):
            if gas + gc[i] >= 0:
                gas += gc[i]
                continue
            gas = 0
            start = i + 1
        
        gas = 0
        for i in range(n):
            gas += gc[(i + start) % n]
            if gas < 0:
                return -1
        
        return start