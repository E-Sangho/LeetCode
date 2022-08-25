/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCostII = function(costs) {
  const N = costs.length,
        M = costs[0].length;
  
  /*
  for (let i = 1; i < N; ++i) {
    for (let j = 0; j < M; ++j) {
      dp[i][j] += min{k != j} dp[i - 1][k]
    }
  }
   */
  for (let i = 1; i < N; ++i) {
    for (let j = 0; j < M; ++j) {
      let min = 21000;
      
      for (let k = 0; k < M; ++k) {
        if (j !== k) {
          min = Math.min(min, costs[i - 1][k]);  
        }
      }
      costs[i][j] += min;
    }
  }
  
  let ans = 21000;
    
  for (let i = 0; i < M; ++i) {
    ans = Math.min(ans, costs[N - 1][i]);
  }
  
  return ans;
};