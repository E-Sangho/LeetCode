class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();
        char[] chars = s.toCharArray();
        
        for (char c : chars) {
            if (c == '(' || c =='{' || c =='[') {
                stack.push(c);
                continue;
            }  
            
            if (
                (stack.size() > 0 && c == ')' && stack.peek() == '(') ||
                (stack.size() > 0 && c == '}' && stack.peek() == '{') ||
                (stack.size() > 0 && c == ']' && stack.peek() == '[')
            ) {
                stack.pop();        
                continue;
            } else {
                return false;
            }
        }
        
        if (stack.size() > 0) {
            return false;
        }
        
        return true;
    }
}