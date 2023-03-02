class Solution {
    public int[] dailyTemperatures(int[] temperatures) {
        Stack<Integer> stack = new Stack<>();
        int[] ans = new int[temperatures.length];
        
        for (int i = 0; i < temperatures.length; ++i) {
            if (!stack.isEmpty() && temperatures[i] >= temperatures[stack.peek()]) {
                while (!stack.isEmpty() && temperatures[i] > temperatures[stack.peek()]) {
                    int top = stack.pop();
                    ans[top] = i - top;
                }
            }
            stack.push(i);
        }
        
        return ans;
    }
}