/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  const m = obstacleGrid.length,
        n = obstacleGrid[0].length;
  
  let dp = new Array(m + 1).fill().map(() => new Array(n + 1).fill(0));
  dp[0][1] = 1;
    
  for (let row = 1; row <= m; ++row) {
    for (let col = 1; col <= n; ++col) {
      if (obstacleGrid[row - 1][col - 1] === 0) {
        dp[row][col] = dp[row - 1][col] + dp[row][col - 1];    
      }
    }
  }
  
  return dp[m][n];
};