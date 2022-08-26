/**
 * @param {number[]} houses
 * @param {number[][]} cost
 * @param {number} m
 * @param {number} n
 * @param {number} target
 * @return {number}
 */
/*
 * state colors: 0 <= c <= n, c = 0 means the house wasn't painted.
 * 
 * houses[i] != 0 => You can't paint this house.
 * cost[i][j] = cost for painting ith house for color j + 1.
 *
 * dp[i][j][k] = minimum costs to paint ith house for color j + 1, 
 *               here k means remaining # of neighbors.
 *
 * if house[i] = c(!= 0) 
 * => j is fixed as c.
 * dp[i][c][k] = 0 + dp[i - 1][c][k] or min_{l != c} dp[i - 1][l][k + 1]
 * 
 * if house[i] = 0, we have to calculate all dp[i][j][k] for 0 <= j < n.
 * => dp[i][j][k] = cost[i][j] + (dp[i - 1][j][k] or min_{l != j} dp[i - 1][l][k + 1]) for each j.
 *                                                   if dp[i - 1][l][k + 1] = -1 pass 
 *
 * ans = min_{j} dp[m - 1][j][0];
 */
var minCost = function(houses, cost, m, n, target) {
  const Big = 10000001;
  let dp = new Array(m).fill()
    .map(() => new Array(n).fill()
         .map(() => new Array(target + 1).fill(Big)));
  
  if (houses[0] === 0) {
    for (let c = 0; c < n; ++c) {
      dp[0][c][target - 1] = cost[0][c];
    }  
  } else {
    dp[0][houses[0] - 1][target - 1] = 0;
  }
  
  for (let i = 1; i < m; ++i) {
    if (houses[i] !== 0) {
      const color = houses[i] - 1;
      
      for (let k = 0; k < target; ++k) {
        let min = Big;
        for (let c = 0; c < n; ++c) {
          if (c !== color) {
            min = Math.min(min, dp[i - 1][c][k + 1]);
          } else {
            min = Math.min(min, dp[i - 1][c][k]);
          }
        } 
        
        dp[i][color][k] = min;
      }
    } else {
      for (let c = 0; c < n; ++c) {
        for (let k = 0; k < target; ++k) {
          let min = Big;
          for (let bc = 0; bc < n; ++bc) {
            if (bc !== c) {
              min = Math.min(min, dp[i - 1][bc][k + 1]);
            } else {
              min = Math.min(min, dp[i - 1][bc][k]);
            }
          }
          
          dp[i][c][k] = cost[i][c] + min;
        } 
      }
    }
  }
  
  let ans = Big;

  for (let c = 0; c < n; ++c) {
    ans = Math.min(ans, dp[m - 1][c][0]);
  }
  
  return ans === Big ? -1 : ans;
};