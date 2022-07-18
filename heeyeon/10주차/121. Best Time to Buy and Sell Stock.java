class Solution {
    public int maxProfit(int[] prices) {
        int price = Integer.MAX_VALUE;
        int profit = 0;
        
        for(int i=0; i<prices.length; i++){
            price = Math.min(price, prices[i]);
            profit = Math.max(prices[i] - price, profit);
        }
        
        return profit;
    }
}
