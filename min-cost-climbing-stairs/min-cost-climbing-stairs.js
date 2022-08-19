/**
 * @param {number[]} cost
 * @return {number}
 */
// dp[i] = min(dp[i - 1], dp[i - 2]) + cost[i]
var minCostClimbingStairs = function(cost) {
  cost.push(0);

  const N = cost.length;
  let prev = cost[1], pprev = cost[0], temp;
  for (let i = 2; i < N; ++i) {
    temp = prev; 
    prev = Math.min(pprev, prev) + cost[i];
    pprev = temp;
  }
  
  cost.pop();
  
  return prev;
};