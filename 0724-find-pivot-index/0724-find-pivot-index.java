class Solution {
    public int pivotIndex(int[] nums) {
        int left  = 0,
            right = 0,
            index = 0;
        for (int i = 0; i < nums.length; ++i) {
            right += nums[i];
        }
        
        for (; index < nums.length; ++index) {
            right -= nums[index];
            if (right == left) {
                return index;
            }
            left += nums[index];
        }
        
        return -1;
    }
}