class Solution {
    /*
     * dp[i] := # way from 0 ~ ith to color fence
     * dp[i] = (k - 1) * dp[i - 1] + (k - 1) * dp[i - 2]
     */ 
    public int numWays(int n, int k) {
        int[] dp = new int[n + 1];
        
        if (n == 1) {
            return k;
        }
        
        dp[0] = k;
        dp[1] = k * k;
        
        for (int i = 2; i <= n; ++i) {
            dp[i] = (k - 1) * dp[i - 1] + (k - 1) * dp[i - 2];
        }
        
        return dp[n - 1];
    }
}