/**
 * @param {number[]} cost
 * @return {number}
 */
// dp[i] = min(dp[i - 1], dp[i - 2]) + cost[i]
var minCostClimbingStairs = function(cost) {
  cost.push(0);
  const N = cost.length;    
  let dp = new Array(N);
  dp[0] = cost[0];
  dp[1] = cost[1];
  
  for (let i = 2; i < N; ++i) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
  }
  
  return dp[N - 1];
};