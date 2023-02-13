class Solution {
    public String longestCommonPrefix(String[] strs) {
        int n = Integer.MAX_VALUE;
        for (int i = 0; i < strs.length; ++i) {
            n = Math.min(n, strs[i].length());
        }
        
        for (int i = 0; i < n; ++i) {
            char c = strs[0].charAt(i);
            for (int j = 1; j < strs.length; ++j) {
                if (strs[j].charAt(i) != c) {
                    return strs[0].substring(0, i);
                } 
            }
        }
        
        return strs[0].substring(0, n);
    }
}