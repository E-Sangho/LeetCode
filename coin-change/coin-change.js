/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
// dp[i] := 가치가 i가 되는 동전의 최솟값
// dp[k] = 1 for k in coins
// dp[i] = min(1 + dp[i - k]) for k in coins    
  const BigNum = Number.MAX_SAFE_INTEGER;

  let dp = new Array(amount + 1).fill(BigNum);
  dp[0] = 0;

  for (let i = 1; i <= amount; ++i) {
    for (let coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  return dp[amount] === BigNum ? -1 : dp[amount];
};