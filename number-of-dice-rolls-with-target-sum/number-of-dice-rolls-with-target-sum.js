/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
/*
 * state: sum, remaining dice to roll.
 * dp[s][r] := current sum is s and r times remains to dice.
 * dp[s][r] =  \sum_{i=1}^k dp[s - i][r + 1]
 * ans = dp[target][0]
 */
var numRollsToTarget = function(n, k, target) {
  const MOD = 1000000007;
  let dp = new Array(target + 1).fill().map(() => new Array(n + 1).fill(0));
  
  for (let i = 1; i <= k; ++i) {
    if (target >= i) {
      dp[i][n - 1] = 1;
    }
  }
  
  for (let s = 0; s <= target; ++s) {
    for (let r = n - 2; r >= 0; --r) {
      for (let i = 1; i <= k; ++i) {
        if (i > s) {
          break;
        }
        dp[s][r] += dp[s - i][r + 1];
        dp[s][r] = dp[s][r] % MOD;
      }
    }
  }
  
  
  return dp[target][0];
};