class Solution {
    static int[] dp;
    static int[] costGlobal;;
    public int minCostClimbingStairs(int[] cost) {
        /*
         * dp[i] := sum of costs for 0 ~ ith index;
         * dp[i] = min(dp[i - 1] + cost[i], dp[i - 2] + cost[i])
         */
        int n = cost.length;
        costGlobal = new int[n + 1];
        
        for (int i = 0; i < n; ++i) {
            costGlobal[i] = cost[i];
        }
        
        costGlobal[n] = 0;
        
        dp = new int[n + 1];
        
        for (int i = 0; i <= n; ++i) {
            dp[i] = -1;
        }
        
        int result = climb(n);
        return result;
    }
    
    public static int climb(int i) {
        if (i < 0) {
            return 0;
        }
        
        if (dp[i] != -1) {
            return dp[i];
        } 
        
        dp[i] = Math.min(costGlobal[i] + climb(i - 1), costGlobal[i] + climb(i - 2));
        return dp[i]; 
    }
}