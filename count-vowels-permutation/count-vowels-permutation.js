/**
 * @param {number} n
 * @return {number}
 */
/*
 * a => e
 * e => a or i
 * i => a, e, o, u
 * o => i, u
 * u => a
 *
 * dp[i][x] := x로 끝나는 길이 i인 문자열의 수
 * x in {a: 0, e: 1, i: 2, o: 3, u: 4}
 *
 * dp[i][0] = dp[i - 1][1] + dp[i - 1][2] + dp[i - 1][4]
 * dp[i][1] = dp[i - 1][0] + dp[i - 1][2]
 * dp[i][2] = dp[i - 1][1] + dp[i - 1][3]
 * dp[i][3] = dp[i - 1][2]
 * dp[i][4] = dp[i - 1][2] + dp[i - 1][3]
 */
var countVowelPermutation = function(n) {
  const MOD = 1000000007    
  let dp = new Array(n).fill().map(() => new Array(5));  
  
  for (let j = 0; j < 5; ++j) {
    dp[0][j] = 1;
  }
  
  for (let i = 1; i < n; ++i) {
    dp[i][0] = (dp[i - 1][1] % MOD + dp[i - 1][2] % MOD + dp[i - 1][4] % MOD) % MOD;
    dp[i][1] = (dp[i - 1][0] % MOD + dp[i - 1][2] % MOD) % MOD
    dp[i][2] = (dp[i - 1][1] % MOD + dp[i - 1][3] % MOD) % MOD;
    dp[i][3] = (dp[i - 1][2] % MOD);
    dp[i][4] = (dp[i - 1][2] % MOD + dp[i - 1][3] % MOD) % MOD;
  }
  
  return (dp[n - 1][0] + dp[n - 1][1] + dp[n - 1][2] + dp[n - 1][3] + dp[n - 1][4]) % MOD
};