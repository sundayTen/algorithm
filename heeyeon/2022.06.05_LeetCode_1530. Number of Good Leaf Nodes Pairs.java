class Solution {
    int answer = 0;
    public int countPairs(TreeNode root, int distance) {
        distance(root,distance);        
        return answer;
    }
    
    public List<Integer> distance(TreeNode node, int dis){
        List<Integer> list = new ArrayList<Integer>();
        //null인지 확인
        if(node == null) return list;
        if(node.left == null && node.right == null){
            list.add(0);
            return list;
        }
        
        //left, right 거리 계산 리스트
        List<Integer> left = distance(node.left,dis);
        List<Integer> right = distance(node.right,dis);
        for(int l : left)
            for(int r : right){
                if(l+r+2 <= dis)
                    answer++;
            }
        for(int l : left) if(l+1 < dis) list.add(l+1);
        for(int r : right) if(r+1 < dis) list.add(r+1);
        return list;
    }
}
