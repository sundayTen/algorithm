class Solution {
    public int maxProfit(int[] prices) {
        int minprice = prices[0];
        int profit = 0;
        
        for(int i=1; i<prices.length; i++){
            if(prices[i-1] > prices[i]){
                profit += (prices[i-1] - minprice);
                minprice = prices[i];
            }
            if(i == prices.length-1 && prices[i] - minprice > 0)
                profit += (prices[i] - minprice);
            minprice = Math.min(prices[i], minprice);
        }
        
        return profit;
    }
}
