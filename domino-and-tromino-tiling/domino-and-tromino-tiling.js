/**
 * @param {number} n
 * @return {number}
 */
/*
 * dp[i][c] := dp[i][0]는 i + 1 번째의 윗쪽만 타일을 채우는 가짓수
 *             dp[i][1]는 i + 1 번째의 아랫쪽만 타일을 채우는 가짓수
 *             dp[i][2]는 i + 1 번재의 위아래를 모두 채우는 가짓수
 *
 * dp[i][0] = dp[i - 1][1] + dp[i - 2][2]
 * dp[i][1] = dp[i - 1][0] + dp[i - 2][2] 
 * dp[i][2] = dp[i - 1][0] + dp[i - 1][1] + dp[i - 2][2] + dp[i - 1][2]; 
 *
 * dp[0][0] = 0
 * dp[0][1] = 0
 * dp[0][2] = 1
 * dp[1][0] = 1
 * dp[1][1] = 1
 * dp[1][2] = 2
 *
 * ans = dp[n - 1][2]
 *
 * +) 일반성을 잃지 않고 dp[i][0] = dp[i][1]인 것을 알 수 있다.
 *    그러므로 
 */
var numTilings = function(n) {
  const MOD = 1000000007;
  let dp = new Array(n).fill().map(() => new Array(2).fill(0));
  
  if (n <= 2) {
    return n;
  }
  
  dp[0][1] = 1;
  dp[1][0] = 1;
  dp[1][1] = 2;
    
  for (let i = 2; i < n; ++i) {
    dp[i][0] = (dp[i - 1][0] + dp[i - 2][1]) % MOD;
    dp[i][1] = (dp[i - 1][0] * 2 + dp[i - 1][1] + dp[i - 2][1]) % MOD;
  }
  
  return dp[n - 1][1];
};