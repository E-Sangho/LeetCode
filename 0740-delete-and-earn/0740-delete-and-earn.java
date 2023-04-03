class Solution {
    private static Map<Integer, Integer> points;
    private static Map<Integer, Integer> cache;
    
    public int deleteAndEarn(int[] nums) {
        points = new HashMap<>();
        cache = new HashMap<>();
        
        int maxNumber = 0;
        
        for (int num : nums) {
            points.put(num, points.getOrDefault(num, 0) + num);
            maxNumber = Math.max(maxNumber, num);
        }

        int pprev = 0,
            prev = points.getOrDefault(1, 0);
        
        for (int i = 2; i <= maxNumber; ++i) {
            int temp = prev;
            prev = Math.max(prev, pprev + points.getOrDefault(i, 0));
            pprev = temp;
        }
     
        return prev;
    }
}