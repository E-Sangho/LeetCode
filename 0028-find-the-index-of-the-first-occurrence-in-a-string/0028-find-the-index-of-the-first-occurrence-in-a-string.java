class Solution {
    public int strStr(String haystack, String needle) {
        int m = haystack.length(),
            n = needle.length();
        
        for (int window = 0; window <= m - n; ++window) {
            for (int i = 0; i < n; ++i) {
                if (haystack.charAt(window + i) != needle.charAt(i)) {
                    break;
                }
                
                if (i == n - 1) {
                    return window;
                }
            }
        }
        
        return -1;
    }
}