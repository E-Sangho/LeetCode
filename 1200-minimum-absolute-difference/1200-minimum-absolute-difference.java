class Solution {
    public List<List<Integer>> minimumAbsDifference(int[] arr) {
        List<List<Integer>> ans = new ArrayList<>();
        List<Integer> list = new ArrayList<>();
        
        for (int ar : arr) {
            list.add(ar);
        }
        
        Collections.sort(list, (a, b) -> {
            return a - b;
        });
        
        int minDiff = Integer.MAX_VALUE;
        
        for (int i = 0; i < list.size() - 1; ++i) {
            if (list.get(i + 1) - list.get(i) < minDiff) {
                minDiff = list.get(i + 1) - list.get(i);
            }
        }
        
         
        for (int i = 0; i < list.size() - 1; ++i) {
            if (list.get(i + 1) - list.get(i) == minDiff) {
                List<Integer> pair = new ArrayList<>();
                pair.add(list.get(i));
                pair.add(list.get(i + 1));
                ans.add(pair);
            }
        }
        
        return ans;
    }
}