/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
/*
 * i := index of prices, 
 * t := remaining number of transcations, 
 * e := true or false of engaging or not
 *
 *
 * dp[i][t][e] := maximum profit for i, t, e
 *
 * 1) e = true(engaging contract)
 * dp[i][t][1] = dp[i + 1][t][1] or
 *               dp[i + 1][t - 1][0] + prices[i]
 *
 * 2) e = false(finished trnascation)
 * dp[i][t][0] = dp[i + 1][t][0] or
 *               dp[i + 1][t][1] - prices[i]
 *
 *
 * base case
 * 
 * if t = 0 => dp[i][t][e] = 0
 * if i = last index => dp[i][t][e] = 0
 */
var maxProfit = function(k, prices) {
  const N = prices.length;
  
  let dp = new Array(N + 1).fill().map(() => new Array(k + 1).fill().map(() => new Array(2).fill(0)));
  
  for (let i = N - 1; i >= 0; --i) {
    for (let t = 1; t <= k; ++t) {
      dp[i][t][0] = Math.max(dp[i + 1][t][0], dp[i + 1][t][1] - prices[i]); 
      dp[i][t][1] = Math.max(dp[i + 1][t][1], dp[i + 1][t - 1][0] + prices[i]);
    }
  }


  return dp[0][k][0];

  /*
  // TopDown
  let dp = new Array(N).fill().map(() => new Array(k + 1).fill().map(() => new Array(2)));
  
  return TopDown(0, k, 0);

  function TopDown(i, t, e) {
    if (i === N || t === 0) {
      return 0;
    }
    
    if (dp[i][t][e] !== undefined) {
      return dp[i][t][e];
    }
    
    if (e === 1) {
      dp[i][t][e] = Math.max(
        TopDown(i + 1, t, 1), 
        TopDown(i + 1, t - 1, 0) + prices[i]
      );
    }
    
    if (e === 0) {
      dp[i][t][e] = Math.max(
        TopDown(i + 1, t, 0), 
        TopDown(i + 1, t, 1) - prices[i]
      );
    }
    
    return dp[i][t][e];
  }    
  */
};