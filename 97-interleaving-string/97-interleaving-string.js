/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
/*
 * dp[i][j] := s1[0:i-1]과 s2[0:j-1]의 interleaving으로 s3[0:i+j-1]를 만들 수 있는가?
 * dp[0][j]는 s1을 전혀 사용하지 않은 경우고, dp[i][0]는 s2를 전혀 사용하지 않은 경우다.
 * dp[i][j] = (dp[i-1][j] && s1[i-1] === s3[i+j-1]) || 
 *            (dp[i][j-1] && s2[j-1] === s3[i+j-1])
 */
var isInterleave = function(s1, s2, s3) {
  const n = s1.length, m = s2.length, l = s3.length;
  
  if ((n + m) !== l) {
    return false;
  }

  let dp = new Array(n+1).fill().map(() => new Array(m + 1)); 
  
  for (let i = 0; i <= n; ++i) {
    dp[i][0] = (s1.substring(0, i) === s3.substring(0, i));
  }
  
  for (let j = 0; j <= m; ++j) {
    dp[0][j] = (s2.substring(0, j) === s3.substring(0, j));
  }
  
  for (let i = 1; i <= n; ++i) {
    for (let j = 1; j <= m; ++j) {
      dp[i][j] = (dp[i - 1][j] && s1[i - 1] === s3[i + j - 1]) ||
                 (dp[i][j - 1] && s2[j - 1] === s3[i + j - 1]);
    }
  }
  
  return dp[n][m];
};