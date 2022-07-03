class Solution:
    def numWaterBottles(self, numBottles: int, numExchange: int) -> int:
        def drink(x):
            return x // numExchange + drink(x // numExchange + x % numExchange) if x // numExchange else 0
        return numBottles + drink(numBottles)