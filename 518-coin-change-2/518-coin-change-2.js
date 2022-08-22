/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
/*
 * dp[i] := i 가격을 만드는데 필요한 코인의 수
 * dp[i] = \sum_{coin of coins} dp[i - coin] 
 *  
 * 1 = 1
 * 2 = 1 + 1, 2
 * 3 = 1 + 1 + 1, 2 + 1
 * 4 = 1 + 1 + 1 + 1, 2 + 2, 2 + 1 + 1
 */
var change = function(amount, coins) {
  let dp = new Array(amount + 1).fill(0);
  
  dp[0] = 1;
  
  for (let coin of coins) {
    for (let i = coin; i <= amount; ++i) {
        dp[i] += dp[i - coin];
    }
  }

  return dp[amount];
};