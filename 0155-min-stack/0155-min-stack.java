class MinStack {
    List<Integer> stack;
    List<Integer> minValues;

    public MinStack() {
        stack = new LinkedList<>();    
        minValues = new LinkedList<>();
    }
    
    public void push(int val) {
        stack.add(val);
        
        if (minValues.size() == 0) {
            minValues.add(val);
            return;
        } 
        
        if (minValues.get(minValues.size() -1) >= val) {
            minValues.add(val);
        }
    }
    
    public void pop() {
       int popedValue= stack.remove(stack.size() - 1); 
       if (popedValue == minValues.get(minValues.size() - 1)) {
           minValues.remove(minValues.size() - 1);
       }
    }
    
    public int top() {
        return stack.get(stack.size() -1);    
    }
    
    public int getMin() {
        return minValues.get(minValues.size() - 1);        
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.push(val);
 * obj.pop();
 * int param_3 = obj.top();
 * int param_4 = obj.getMin();
 */