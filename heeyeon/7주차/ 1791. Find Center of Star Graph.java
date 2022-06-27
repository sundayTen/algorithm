class Solution {
    public int findCenter(int[][] edges) {
        int[] nodes = new int[edges.length+1];
        //각자 몇개의 노드랑 연결되었는지 체크할 배열
        for(int i=0; i< edges.length+1; i++){
            nodes[i] = 0;
        }
        
        for(int i=0; i<edges.length; i++){
            nodes[edges[i][0]-1]++;
            nodes[edges[i][1]-1]++;
        }
        
        for(int i=0; i<nodes.length; i++){
            if(nodes[i] == edges.length)
                return i+1;
        }
        return 0;
    }
}