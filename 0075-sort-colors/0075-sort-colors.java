class Solution {
  public void sortColors(int[] nums) {
    selectionSort(nums);  
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
    
  public void swap(int[] nums, int i, int j) {
    int temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }
}