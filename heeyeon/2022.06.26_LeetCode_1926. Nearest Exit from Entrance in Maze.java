class Solution {
    Queue<int[]> que = new LinkedList<>();
    public int nearestExit(char[][] maze, int[] entrance) {
        //BFS로 풀자!!!!
        int x = entrance[1];
        int y = entrance[0];
        int width = maze[0].length;
        int height = maze.length;
        int[] start = {x,y,0};
        int troot = 0;
        int answer = Integer.MAX_VALUE;
        maze[y][x]  ='+';//처음 시작한곳 체크
        //up right down left
        int[] dx = {0, 1, 0, -1};
        int[] dy = {-1, 0, 1, 0};
        que.add(start);
        
        while(!que.isEmpty()){
            start = que.remove();
            x = start[0];
            y = start[1];
            for(int i=0; i<4; i++){
                int tx = x + dx[i];
                int ty = y + dy[i];
                troot = start[2];
                if(tx >= 0 && tx < width && ty >= 0 && ty < height && maze[ty][tx] == '.'){
                    troot++;
                    maze[ty][tx] = '+'; //지나간곳 체크
                    que.offer(new int[]{tx,ty,troot});//지나갈 곳 넣기
                    if(tx == 0 || tx == width-1 || ty == 0 || ty == height -1){
                        if(troot < answer)
                            answer = troot;
                    }
                }
            }
        }
        if(answer == Integer.MAX_VALUE)
            return -1;
        else 
            return answer;
    }
}
