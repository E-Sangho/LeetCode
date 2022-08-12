/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
/*
 * 이 문제를 dp라고 유추할 수 있는 근거는 간단하다.
 *
 * 1. 최적값을 찾는다.
 * 2. 이전의 결과가 이후에 영향을 미친다.(greedy하게 풀 수 없다)
 * 3. 그래프로 해결하기엔 경우의 수가 너무 많다.
 *
 * dp로 해결할 수 있으므로 어떤 값을 저장해야 할 지 생각해보자.
 * 일반적으로 dp는 범위 내의 최적값을 기록하므로, text1과 text2의 범위를 표시해야 한다.
 * 만약 texti의 시작지점 si과 끝지점 ei를 기록한다면, dp[s1][e1][s2][e2]로 저장해야 한다.
 * 이 경우 공간 복잡도가 지나치게 많고, 순서대로 검색한다면 s1과 s2 없이도 진행할 수 있으므로 dp[e1][e2] 형태로 기록한다.
 * 
 * dp[e1][e2] := [0, e1] of text1, [0, e2] of text2 사이에서 maximum subsequence의 수
 *
 * 다음으로 dp간의 관계식을 이용해서 풀어야 한다.
 * dp로 식을 세우는 경우 인접한 정보만을 가지고 해결해야 한다.
 * 무슨 말인가 하면 dp[a][b]를 구할 때, dp[a - 3][b - 2] 같이 멀리 떨어진 정보를 사용하지 않는다는 것이다.
 * 보통 사용하는 정보는 dp[a - 1][b]와 dp[a][b - 1]이고, 경우에 따라 추가적으로 dp[a - 1][b - 1]을 쓴다.
 * 이때 팁을 주자면 dp[a - 1][b]와 dp[a][b - 1]이 하나의 세트로 사용되고, 
 * dp[a - 1][b - 1]은 위의 두 개로 구할 수 없을 경우 쓰는 경우가 많다는 것이다.
 *
 * dp의 식을 구하기 전에 문제를 시각적으로 표시하면 이해하기 편하다.
 * text1와 text2 사이에 일치하는 점을 찾으면 선을 긋는다고 상상해보자.
 * 이때 순서가 바뀌면 안 되므로 선이 교차해서는 안 된다.
 * 다시 말해 두 점집합 사이에 선이 교차하지 않도록 만들 수 있는 선의 최댓값을 구해야 한다.
 * x와 y를 잇는 선을 line(x, y)로 표시할텐데 x는 text1에, y는 text2에 있는 점을 의미한다.
 * 
 * 이제 dp[a][b]를 구하는 식을 알아보자.
 * 우선 dp[a-1][b]나 dp[a][b-1]만으로는 dp[a][b]를 구할 수 없다.
 * 이전의 연결관계를 알 수 없으므로 값이 증가하는지 유지되는지 알 수 없기 때문이다.
 * 그러므로 둘을 모두 사용해서 값을 구해야 한다.
 * 
 * case 1). From dp[a-1][b] and dp[a][b-1]
 *    1-1). text1[a] !== text2[b]
 *          dp[a-1][b]로 부터 계산하려고 해보자.
 *          여기서 dp[a][b]를 알아내려면, dp[a-1][b]에서 a가 추가된 경우를 살펴봐야 한다.
 *          text1[a]와 text2[b]가 다르지만, text1[a] = text2[x]인 x 가 [0, b)에 존재할 수 있다.
 *          그런데 이 경우 line(a, x)가 존재하고 이는 dp[a][b-1]에 포함되어 있을 것이다.  
 *          dp[a][b-1]에서부터 찾을 경우에도 text1[y] = text2[b]인 y가 [0, a)에 존재할 수 있다.
 *          그리고 이 경우 역시 line(y, b)가 존재하고 이는 dp[a-1][b]에 포함되어 있다.
 *          그런데 line(a, x)와 line(y, b)는 동시에 존재할 수 없다.
 *          만약 둘이 동시에 존재한다면 a > y, b > x이므로 선이 서로 교차하게 된다.
 *          이는 문제 조건인 순서대로 subsequence를 찾는다는 조건에 위배된다.
 *          일반성을 잃지 않고 line(a, x)만 존재한다고 하자.
 *          그러면 dp[a][b] = dp[a-1][b] + 1 or dp[a][b-1]이다.
 *          line(b, x)가 존재하는 경우는 dp[a][b] = dp[a-1][b] or dp[a][b-1] + 1이다.
 *          두 경우를 모두 고려하면 dp[a][b] = max(dp[a][b-1], dp[a-1][b])가 된다.      
 *  
 *    1-2). text1[a] === text2[b]       
 *          text1[a]와 text2[b]가 어떤 선과 연결되어 있을지 알 수 없다.
 *          만약 이전에 선이 존재했다면 선이 바뀔 뿐 그 수는 바뀌지 않는다.
 *          하지만 이전에 선이 없었다면 수를 1 더해줘야 하는데, dp[a-1][b]와 dp[a][b-1]로는 유추할 수 없다. 
 *          그러므로 이 경우는 dp[a-1][b-1]에서 찾아봐야 한다.
 *
 * case 2). From dp[a-1][b-1]
 *    2-1). text1[a] === text2[b]
 *          line(a, y)나 line(x, b)를 만들 수 있는 경우라면 해당 선을 만들면 된다.
 *          반대로 선이 존재하지 않는다면 line(a, b)를 만들면 되므로 어떤 경우라도 1이 더해지면 된다. 
 *           
 * 위로부터 알 수 있는 것은 
 *
 * 1. text1[a] === text2[b]인 경우 dp[a][b] = dp[a-1][b-1] + 1이고,
 * 2. text1[a] !== text2[b]인 경우 dp[a][b] = max(dp[a][b-1], dp[a-1][b])라는 것이다.  
 *  
 * 모든 dp를 탐색하는데 O(nm)의 시간 복잡도가 필요하고, 문제의 범위에 따라 O(10^6)이므로 시간내에 해결 가능하다. 
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