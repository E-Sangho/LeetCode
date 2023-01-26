class Solution {
    public int dominantIndex(int[] nums) {
        int max = Integer.MIN_VALUE;
        int index = 0;
        for (int i = 0; i < nums.length; ++i) {
            if (max < nums[i]) {
                max = nums[i];
                index = i;
            }
        } 
        System.out.println(max);
        for (int i = 0; i < nums.length; ++i) {
            if (index != i && nums[i] * 2 > max) {
                return -1;
            }
        }
        
        return index;
    }
}