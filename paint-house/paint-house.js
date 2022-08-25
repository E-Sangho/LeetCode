/**
 * @param {number[][]} costs
 * @return {number}
 */
/*
 * dp[i][c] := costs to paint ith fence as c.
 * c in {0: red, 1: blue, 2: green}
 */
var minCost = function(costs) {
  const N = costs.length;
  
  let dp = new Array(N).fill().map(() => new Array(3).fill(0));
    
  dp[0][0] = costs[0][0];
  dp[0][1] = costs[0][1];
  dp[0][2] = costs[0][2];

  for (let i = 1; i < N; ++i) {
    dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + costs[i][0];
    dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + costs[i][1];
    dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + costs[i][2];
  }
  
  return Math.min(dp[N - 1][0], dp[N - 1][1], dp[N - 1][2]);
};