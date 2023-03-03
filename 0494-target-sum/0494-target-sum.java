class Solution {
    /*
     * dp[i][sum] := 0 ~ i까지 인덱스까지 합이 sum인 경우의 수
     * dp[i][x] = dp[i - 1][x - nums[i]] + dp[i - 1][x + nums[i]]
     */

    int[] dfsNums;
    int dfsTarget;
    int N;
    int count;
    int[][] dp;
    int total;
    
    public int findTargetSumWays(int[] nums, int target) {
        dfsNums   = nums;    
        dfsTarget = target;
        N = nums.length;
        count = 0;
        total = 0;
        for (int num : nums) {
            total += num;
        }
        dp = new int[N][2 * total + 1];
        return DFS(0, 0);
    }
    
    public int DFS(int sum, int index) {
        if (index == N) {
            if (sum == dfsTarget) {
                return 1;
            }
            return 0;
        } 
        
        if (dp[index][sum + total] != 0) {
            return dp[index][sum + total];
        }
        
        dp[index][total + sum] = DFS(sum + dfsNums[index], index + 1) + DFS(sum - dfsNums[index], index + 1);
        
        return dp[index][total + sum];
    }
}