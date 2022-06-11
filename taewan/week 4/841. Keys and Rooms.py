class Solution:
    def canVisitAllRooms(self, rooms: List[List[int]]) -> bool:
        visit = [True] * len(rooms)
        
        stack = [0]
        while stack:
            roomNum = stack.pop()
            if visit[roomNum]:
                visit[roomNum] = False
                stack.extend(rooms[roomNum])
        
        return sum(visit) == 0