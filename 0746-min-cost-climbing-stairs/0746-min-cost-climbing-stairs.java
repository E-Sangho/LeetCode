class Solution {
    static int[] dp;
    static int[] cost;
    public int minCostClimbingStairs(int[] cost) {
        /*
         * dp[i] := sum of costs for 0 ~ ith index;
         * dp[i] = min(dp[i - 1] + cost[i], dp[i - 2] + cost[i])
         */
        int n = cost.length;
        this.cost = cost;
        
        dp = new int[n];
        Arrays.fill(dp, -1); 
        
        return Math.min(climb(n - 1), climb(n - 2));
    }
    
    public static int climb(int i) {
        if (i < 0) {
            return 0;
        }
        
        if (dp[i] != -1) {
            return dp[i];
        } 
        
        dp[i] = Math.min(cost[i] + climb(i - 1), cost[i] + climb(i - 2));
        return dp[i]; 
    }
}