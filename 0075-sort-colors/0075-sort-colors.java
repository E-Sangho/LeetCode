class Solution {
    public void sortColors(int[] nums) {
        countingSort(nums);  
    }
    
    public void selectionSort(int[] nums) {
        int n = nums.length;
        for (int i = 0; i < n - 1; ++i) {
            int minIndex = i;
            for (int j = i + 1; j < n; ++j) {
                if (nums[minIndex] > nums[j]) {
                    minIndex = j;
                } 
            }
            swap(nums, minIndex, i);
        }    
    }
    
    public void countingSort(int[] nums) {
        int N = 3;
        int[] counting = new int[N];
        int[] ans = new int[nums.length];
        
        for (int num : nums) {
            counting[num]++;
        }
        
        for (int i = 1; i < N; ++i) {
            counting[i] += counting[i - 1];    
        }
        
        
        for (int num : nums) {
            ans[counting[num] - 1] = num;     
            counting[num]--;
        }
        
        for (int i = 0; i < ans.length; ++i) {
            nums[i] = ans[i];
        }
    }
    
    public void swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
}