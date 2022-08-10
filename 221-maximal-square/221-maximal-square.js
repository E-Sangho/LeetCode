/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  const m = matrix.length,
        n = matrix[0].length;
  
  let dp = new Array(m + 1).fill(0);
  let temp = 0;
  let save;
  let ans = 0;

  for (let col = 0; col < n; ++col) {
    for (let row = 1; row <= m; ++row) {
      save = dp[row];
      if (matrix[row - 1][col] === "1") {
        dp[row] = Math.min(dp[row], dp[row - 1], temp) + 1;
        ans = Math.max(ans, dp[row]);
      } else {
        dp[row] = 0;
      }  
      temp = save;
    }
  }
  
  return ans * ans;
};