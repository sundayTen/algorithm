class Solution {
    public int islandPerimeter(int[][] grid) {
        int answer = 0;
        for(int i=0; i<grid.length; i++){
            for(int j=0; j<grid[0].length; j++){
                if(grid[i][j] == 1)
                    answer += 4;
                //UP
                if(i-1 >= 0 && grid[i][j] == 1 && grid[i-1][j] == 1)
                    answer -= 2;
                //LEFT
                if(j-1 >= 0 && grid[i][j] == 1 && grid[i][j-1] == 1)
                    answer -= 2;
            }
        }
        return answer;
    }
}
