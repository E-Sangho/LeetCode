class Solution {
    public void reverseString(char[] s) {
        int start = 0,
            end = s.length - 1;
        
        while (start <= end) {
            swap(s, start, end);
            ++start;
            --end;
        }
    }
    
    public void swap(char[] s, int a, int b) {
        char temp = s[a];
        s[a] = s[b];
        s[b] = temp;
    }
}