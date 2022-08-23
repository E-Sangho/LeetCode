/**
 * @param {string} s
 * @return {number}
 */
/*
 * dp[i] := 0 ~ ith 까지 해독할 수 있는 가짓수 
 * dp[i + 1] = ?
 * 1) s[i + 1] = 0 => s[i] = 1 or 2 인 경우만 해독 가능
 *    s[i + 1] = s[i]
 *    그 외는 0을 반환
 * 2) s[i + 1] = 1 ~ 6 
 * => s[i] = 1 or 2 인 경우 s[i:i+1]을 한 글자로 해석하거나, s[i + 1]만 한 글자로 해석 가능
 *    s[i + 1] = s[i - 1] + s[i]            
 * => s[i] >= 3 인 경우 
 *    s[i + 1] = s[i]
 * => s[i] = 0
 *    s[i + 1] = s[i]
 * 3) s[i + 1] = 7 ~ 9 => s[i] = 1 인 경우
 *    s[i + 1] = s[i] + s[i - 1]
 * => s[i] != 1이면  
 *    s[i + 1] = s[i]  
 *
 * s[i + 1] == 0 && !(s[i] == 1 || s[i] == 2) return 0
 * s[i + 1] == 0 && (s[i] == 1 || s[i] == 2) s[i + 1] = s[i - 1]
 * (1 <= s[i + 1] <= 6) && !(s[i] == 1 || s[i] == 2) s[i + 1] = s[i]
 * (1 <= s[i + 1] <= 6) && (s[i] == 1 || s[i] == 2) s[i + 1] = s[i] + s[i - 1]
 * (7 <= s[i + 1] <= 9) && !(s[i] == 1) s[i + 1] = s[i] 
 * (7 <= s[i + 1] <= 9) && (s[i] == 1) s[i + 1] = s[i] + s[i - 1]
 */
var numDecodings = function(s) {
  const N = s.length;
  let dp = new Array(N + 1).fill(0);
  
  if (s[0] === "0") {
    return 0;
  } 
    
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 1; i < N; ++i) {
    let num = s[i] - 0;
    
    if (num === 0) {
      if (s[i - 1] === "1" || s[i - 1] === "2") {
        dp[i + 1] = dp[i - 1];
      } else {
        return 0;
      }
    }  
    
    if (1 <= num && num <= 6) {
      if (s[i - 1] === "1" || s[i - 1] === "2") {
        dp[i + 1] = dp[i] + dp[i - 1];
      } else {
        dp[i + 1] = dp[i];
      }
    }
      
    if (7 <= num && num <= 9) {
      if (s[i - 1] === "1") {
        dp[i + 1] = dp[i] + dp[i - 1];
      } else {
        dp[i + 1] = dp[i];
      }
    }
  }

  return dp[N];
};