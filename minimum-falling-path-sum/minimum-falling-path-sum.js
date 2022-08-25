/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
  const m = matrix.length,
        n = matrix[0].length;

  let dp = new Array(m + 1).fill().map(() => new Array(n + 2).fill(0));
    
  for (let row = 1; row <= m; ++ row) {
    dp[row][0] = 10001;
    dp[row][n + 1] = 10001;
  }
  
  for (let row = 1; row <= m; ++row) {
    for (let col = 1; col <= n; ++col) {
      dp[row][col] = matrix[row - 1][col - 1] + 
                     Math.min(dp[row - 1][col - 1], 
                              dp[row - 1][col], 
                              dp[row - 1][col + 1]);
    }
  }
  
  let ans = 10001;
  
  for (let col = 1; col <= n; ++col) {
    ans = Math.min(ans, dp[m][col]); 
  }

  return ans;
};