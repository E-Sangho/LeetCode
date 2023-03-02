class Solution {
    public int[] dailyTemperatures(int[] temperatures) {
        Stack<int[]> stack = new Stack<>();
        int[] ans = new int[temperatures.length];
        
        for (int i = 0; i < temperatures.length; ++i) {
            if (!stack.isEmpty() && temperatures[i] >= stack.peek()[0]) {
                while (!stack.isEmpty() && temperatures[i] > stack.peek()[0]) {
                    int[] top = stack.pop();
                    int topValue = top[0],
                        topIndex = top[1];
                    ans[topIndex] = i - topIndex;
                }
            }
            stack.push(new int[] { temperatures[i], i });
        }
        
        return ans;
    }
}