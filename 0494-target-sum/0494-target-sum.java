class Solution {
    int[] dfsNums;
    int dfsTarget;
    int N;
    int count;
    
    public int findTargetSumWays(int[] nums, int target) {
        dfsNums   = nums;    
        dfsTarget = target;
        N = nums.length;
        count = 0;
        DFS(0, 0);
        
        return count;
    }
    
    public void DFS(int sum, int index) {
        if (index == N) {
            if (sum == dfsTarget) {
                ++count;
            }
            return;
        } 
        
        DFS(sum + dfsNums[index], index + 1);
        DFS(sum - dfsNums[index], index + 1);
    }
}