class Solution {
    /*
     * dp[i][j] := 0 ~ ith of text1 and 0 ~ jth of text2's longest subsequence
     * dp[i][j] = if (i == j) dp[i - 1][j - 1] + 1 else max(dp[i - 1][j], dp[i][j - 1])
     */
    private int[][] dp;
    public int longestCommonSubsequence(String text1, String text2) {
        int[][] dp = new int[text1.length() + 1][text2.length() + 1];
        for (int i = 0; i < text1.length(); ++i) {
            for (int j = 0; j < text2.length(); ++j) {
                if (text1.charAt(i) == text2.charAt(j)) {
                    dp[i + 1][j + 1] = dp[i][j] + 1;
                } else {
                    dp[i + 1][j + 1] = Math.max(dp[i + 1][j], dp[i][j + 1]);
                }
            }
        }
        
        return dp[text1.length()][text2.length()];
        /*
        dp = new int[text1.length()][text2.length()];
        for (int[] row : dp) {
            Arrays.fill(row, -1);
        }
        return Recursive(text1.length() - 1, text2.length() - 1, text1, text2);
        */
    }
    
    private int Recursive(int i, int j, String text1, String text2) {
        if (i < 0 || j < 0) {
            return 0;
        }
        
        if (dp[i][j] != -1) {
            return dp[i][j];
        }
        
        if (text1.charAt(i) == text2.charAt(j)) {
            dp[i][j] = 1 + Recursive(i - 1, j - 1, text1, text2);
            return dp[i][j];
        }
        
        dp[i][j] = Math.max(Recursive(i - 1, j, text1, text2), Recursive(i, j - 1, text1, text2));
        return dp[i][j];
    }
}