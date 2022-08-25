/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
/*
 * variable = { prices index, contracting? }
 * dp[i][tf] := maximum profit until ith prices and tf, where tf denotes contracting or not.
 * dp[i][0] := +prices[i] + dp[i - 1][1] or dp[i - 1][0] 
 * dp[i][1] := -prices[i] - fee + dp[i - 1][0] or dp[i - 1][1]
 */
var maxProfit = function(prices, fee) {
  const N = prices.length;
  let dp = new Array(N).fill().map(() => new Array(2).fill(0)); 
  dp[0][0] = 0, dp[0][1] = -prices[0] - fee;
    
  for (let i = 1; i < N; ++i) {
    dp[i][0] = Math.max(dp[i - 1][0], prices[i] + dp[i - 1][1]);
    dp[i][1] = Math.max(dp[i - 1][1], -prices[i] - fee + dp[i - 1][0]);    
  }
  
  console.log(dp);
  
  return dp[N - 1][0]
};