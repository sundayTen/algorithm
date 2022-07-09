//어떤점이 속도를 많이 잡을까...
import java.util.*;

class Solution {
    public double maxProbability(int n, int[][] edges, double[] succProb, int start, int end) {
        //start end 까지 가는 거리중 1e-5에 더 가까운 수를 리턴
        Queue<Integer> node = new LinkedList<>();
        Map<Integer, Double> list = new HashMap<>();
        int s = 0;
        double temp = 0;
        
        //처음에 확률 계산하기 위해 넣어주기
        for(int i=0; i<edges.length; i++)
            if(edges[i][0] == start){
                list.put(edges[i][1], succProb[i]);
                node.add(edges[i][1]);
            }else if(edges[i][1] == start){
                list.put(edges[i][0], succProb[i]);
                node.add(edges[i][0]);
            }
        
        while(node.size() > 0){
            s = node.poll();
            for(int i=0; i<edges.length; i++){
                if(edges[i][0] == s){
                        temp = list.get(s) * succProb[i];
                        if(list.containsKey(edges[i][1])){
                            if(temp > list.get(edges[i][1])){
                                list.put(edges[i][1], temp);
                            }else continue;
                        }
                        else{
                            list.put(edges[i][1], temp);
                        }
                        node.add(edges[i][1]);
                    }else if(edges[i][1] == s){
                        temp = list.get(s) * succProb[i];
                        if(list.containsKey(edges[i][0])){
                            if(temp > list.get(edges[i][0])){
                                list.put(edges[i][0], temp);
                            }else continue;
                        }
                        else{
                            list.put(edges[i][0], temp);
                        }
                        node.add(edges[i][0]);
                    }
            }
        }
        System.out.println(list);
        if(list.size() > 0 && list.containsKey(end))
            return list.get(end);
        else
            return 0;
    }
}
