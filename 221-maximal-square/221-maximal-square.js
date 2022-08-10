/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  const m = matrix.length,
        n = matrix[0].length;
  
  let dp = new Array(m + 1).fill().map(() => new Array(n + 1).fill(0));

  for (let row = 1; row <= m; ++row) {
    for (let col = 1; col <= n; ++col) {
      if (matrix[row - 1][col - 1] === "1") {
        dp[row][col] = 1 + Math.min(
          dp[row - 1][col], 
          dp[row][col - 1], 
          dp[row - 1][col - 1]
        );
      }  
    }
  }
  
  let ans = 0;
  
  
  for (let row = 1; row <= m; ++row) {
    for (let col = 1; col <= n; ++col) {
      ans = Math.max(ans, dp[row][col]);
    }
  }
  
  return ans * ans;
};