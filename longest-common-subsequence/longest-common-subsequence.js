/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
/*
 * 
 * dp[e1][e2] := [0, e1] of s1, [0, e2] of s2 사이에서 maximum subsequence의 수
 * d[a][b] = f(dp[a-1][b], dp[a][b-1], dp[a-1][b-1])  
 * case 1). From dp[a-1][b]
 *    1-1). s1[a] !== s2[b]
 *          s1[a]와 s2[b]가 다르지만, s1[a]가 s2[x](x in [0, b))와 일치할 가능성이 있다.
 *          그런데 이 경우 line(a, x)가 존재하고 이는 dp[a][b-1]에 포함되어 있을 것이다.  
 *          dp[a][b-1]에서부터 찾을 경우에도 s1[y] = s2[b]인 y가 [0, a)에 존재할 수 있다.
 *          그리고 이 경우 역시 line(y, b)가 존재하고 이는 dp[a-1][b]에 포함되어 있다.
 *          그런데 line(a, x)와 line(y, b)는 동시에 존재할 수 없다.
 *          만약 둘이 동시에 존재한다면 a > y, b > x이므로 선이 서로 교차하게 된다.
 *          이는 문제 조건인 순서대로 subsequence를 찾는다는 조건에 위배된다.
 *          일반성을 잃지 않고 line(a, x)만 존재한다고 하자.
 *          그러면 dp[a][b] = dp[a-1][b] + 1 or dp[a][b-1]이다.
 *          line(b, x)가 존재하는 경우는 dp[a][b] = dp[a-1][b] or dp[a][b-1] + 1이다.
 *          두 경우를 모두 고려하면 dp[a][b] = max(dp[a][b-1], dp[a-1][b])가 된다.      
 *  
 *    1-2). s1[a] === s2[b]       
 *          s1[a]와 s2[b]가 어떤 선과 연결되어 있을지 알 수 없다.
 *          만약 이전에 선이 존재했다면 선이 바뀔 뿐 그 수는 바뀌지 않는다.
 *          하지만 이전에 선이 없었다면 수를 1 더해줘야 하는데, dp[a-1][b]와 dp[a][b-1]로는 유추할 수 없다. 
 * case 2). From dp[a-1][b-1]
 *    2-1). s1[a] === s2[b]
 *          이전에 line(a, y)가 존재하면 해당 선을 선택하면 된다.
 *          반대로 선이 존재하지 않는다면 line(a, b)를 만들면 되므로 어떤 경우라도 1이 더해지면 된다. 
 *           
 */
var longestCommonSubsequence = function(text1, text2) {
  let N = text1.length, 
      M = text2.length;
  
  let dp = new Array(N + 1).fill().map(() => new Array(M + 1).fill(0));
  
  for (let i = 1; i < N + 1; ++i) {
    for (let j = 1; j < M + 1; ++j) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;  
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
      }
    }
  }
  

  return dp[N][M];
};