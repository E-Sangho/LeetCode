class Solution {
    public int deleteAndEarn(int[] nums) {
        Map<Integer, Integer> points = new HashMap<>();
        
        for (int num : nums) {
            points.put(num, points.getOrDefault(num, 0) + num);
        }
        
        List<Integer> elements = new ArrayList<Integer>(points.keySet());
        Collections.sort(elements);
        
        int pprev = 0;
        int prev = points.get(elements.get(0));
        
        for (int i = 1; i < elements.size(); ++i) {
                int temp = prev;
            if ((elements.get(i) - elements.get(i - 1) > 1)) {
                prev += points.get(elements.get(i));
            } else {
                prev = Math.max(pprev + points.get(elements.get(i)), prev);
            }
                pprev = temp;
        }
                
        return prev;
    }
}