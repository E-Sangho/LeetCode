class Solution {
    public List<List<Integer>> minimumAbsDifference(int[] arr) {
        List<List<Integer>> ans = new ArrayList<>();
        
        Arrays.sort(arr);
        
        int minDiff = Integer.MAX_VALUE;
        
        for (int i = 0; i < arr.length - 1; ++i) {
            int diff = arr[i + 1] - arr[i];
            if (diff < minDiff) {
                minDiff = diff;
                ans.clear();
                List<Integer> pair = new ArrayList<>();
                pair.add(arr[i]);
                pair.add(arr[i + 1]);
                ans.add(pair);
            } else if (diff == minDiff) {
                List<Integer> pair = new ArrayList<>();
                pair.add(arr[i]);
                pair.add(arr[i + 1]);
                ans.add(pair);
            }
        }
        
        return ans;
    }
}