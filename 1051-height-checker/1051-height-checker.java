class Solution {
    public int heightChecker(int[] heights) {
        int[] copyheights = heights.clone();
        bubbleSort(heights); 
        
        int count = 0;
        for (int i = 0; i < heights.length; ++i) {
            if (heights[i] != copyheights[i]) {
                ++count;
            }
        }
        
        return count;
    }
    
    public void bubbleSort(int[] heights) {
        int n = heights.length;
        for (int i = 1; i < n; ++i) {
            for (int j = 0; j <(n - i); ++j) {
                if (heights[j + 1] < heights[j]) {
                    swap(heights, j, j + 1);
                }
            }
        }
    }
    
    public void swap(int[] heights, int i, int j) {
        int temp = heights[i];
        heights[i] = heights[j];
        heights[j] = temp;
    }
}