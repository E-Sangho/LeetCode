class Solution {
    public int minSubArrayLen(int target, int[] nums) {
        int left = 0, right = 0;
        int sum = 0;
        int n = nums.length;
        int minLen = Integer.MAX_VALUE;
        
        while (left < n && right <= n) {
            if (sum >= target) {
                minLen = Math.min(minLen, right - left); 
            }
            
            if (sum < target && right != n) {
                sum += nums[right];
                ++right;
            } else {
                sum -= nums[left];
                ++left;
            }
        }
        
        if (minLen == Integer.MAX_VALUE) {
            return 0;
        }
        
        return minLen;
    }
}