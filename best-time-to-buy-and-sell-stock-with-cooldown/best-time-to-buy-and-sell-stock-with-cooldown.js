/**
 * @param {number[]} prices
 * @return {number}
 */
/*
 * i := index of day,
 * e := engaging or not
 *
 * dp[i][e] = ?
 *
 * 1) e = true
 *    
 *    dp[i][1] = dp[i + 1][1] or prices[i] + dp[i + 2][0]
 *
 * 2) e = false
 *
 *    dp[i][0] = dp[i + 1][0] or -prices[i] + dp[i + 1][1]
 */
var maxProfit = function(prices) {
  const N = prices.length;
  let dp = new Array(N).fill().map(() => new Array(2).fill(0));
  
  return TopDown(0, 0);

  function TopDown(i, e) {
    if (i >= N) {
      return 0;
    }
    
    if (dp[i][e] === 0) {
      if (e === 1) {
        dp[i][e] = Math.max(TopDown(i + 1, e), prices[i] + TopDown(i + 2, 0));
      }

      if (e === 0) {
        dp[i][e] = Math.max(TopDown(i + 1, e), -prices[i] + TopDown(i + 1, 1));
      }
    }
    
    return dp[i][e];
  }  
};