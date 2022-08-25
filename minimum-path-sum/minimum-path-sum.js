/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  const m = grid.length,
        n = grid[0].length;
  
  let dp = new Array(m).fill().map(() => new Array(n).fill(0));    
  
  dp[0][0] = grid[0][0];
  
  for (let col = 1; col < n; ++col) {
    dp[0][col] = grid[0][col] + dp[0][col - 1];
  }
  
  for (let row = 1; row < m; ++row) {
    dp[row][0] = grid[row][0] + dp[row - 1][0];
  }
  
  for (let row = 1; row < m; ++row) {
    for (let col = 1; col < n; ++col) {
      dp[row][col] = Math.min(dp[row - 1][col], dp[row][col - 1]) + grid[row][col];
    }
  }
  
  return dp[m - 1][n - 1];
};