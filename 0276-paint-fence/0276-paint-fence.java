class Solution {
    /*
     * dp[i] := # way from 0 ~ ith to color fence
     * dp[i] = (k - 1) * dp[i - 1] + (k - 1) * dp[i - 2]
     */ 
    public int numWays(int n, int k) {
        int[] dp = new int[n+1];
        if (n <= 2) return (int)Math.pow(k, n);
        dp[0] = 1;
        dp[1] = k;
        dp[2] = k*k;
        dp[3] = k*dp[2] - k;
        for (int i = 4; i <= n; i++) {
            dp[i] = dp[i-1]*k -(k-1)*dp[i-3];
        }
//        System.out.println(Arrays.toString(dp));
        return dp[n];
    }
}