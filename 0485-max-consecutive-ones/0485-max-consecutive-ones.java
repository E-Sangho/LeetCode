class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
        int cnt = 0, maxCnt = 0;
        for (int i = 0; i < nums.length; ++i) {
            if (nums[i] == 1) {
                ++cnt;
                if (cnt > maxCnt) {
                    maxCnt = cnt;
                }
            } else {
                cnt = 0;
            }    
        }     
        
        return maxCnt;
    }
}