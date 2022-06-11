class Solution {
    List<List<Integer>> answer = new ArrayList<>();
    public List<List<Integer>> allPathsSourceTarget(int[][] graph) {
        int des = graph.length-1;   
        List<Integer> path = new ArrayList<>();
        path.add(0);
        visit(0, graph, des, path);              
        return answer;
    }
    
    public void visit(int n,int[][] graph, int end, List<Integer> p){ 
        if(n == end){
                answer.add(new ArrayList<Integer>(p));//깊은 복사
            } 
        if(graph[n].length > 0){
            for(int i=0; i<graph[n].length; i++){
                p.add(graph[n][i]);
                visit(graph[n][i],graph,end,p);   
                p.remove(p.size()-1);
            }
        }        
    }
}
