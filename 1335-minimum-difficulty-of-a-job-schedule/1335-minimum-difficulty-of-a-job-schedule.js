/**
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */
/* 
Input: jobDifficulty = [6,5,4,3,2,1], d = 2
Output: 7
Explanation: First day you can finish the first 5 jobs, total difficulty = 6.
Second day you can finish the last job, total difficulty = 1.
The difficulty of the schedule = 6 + 1 = 7  
 * dp[index][day] := minimum difficulty of the "day" starting from index 
 * dp[index][day] := min_{k = index + 1}^{N - d + day}dp[k][day + 1] + 
                     max_{l = index}^{k - 1}jobDifficulty[l]
 * dp 문제는 어떤 변수를 사용할지가 중요하다.
 * 이 문제에서 변수로 사용될 만한 것은 아래 2가지다.
 * 
 * 1. jobDifficulty의 index i
 * 2. day의 일 수
 *
 * 위 변수로 지정할 수 있는 범위를 알아보자.
 * 우선 jobDifficulty의 index는 2가지 범위를 지정할 수 있다.
 * index를 기준으로 이전의 일을 기록하면, 이전의 기록을 바탕으로 다음 일을 계산하는 것이다.
 * 반대로 index 이후의 것을 기록했으면, 그 값을 가지고 index 이전의 일을 계산한다.
 * 어떤 방향으로 진행시킬지는 Base Case를 살펴보면 명확해진다.
 * 예를 들어 피보나치 수를 계산하는 경우는 dp[0], dp[1]이 주어지고 뒤의 일을 계산한다.
 * 그러므로 [0, index]의 범위를 계산한 것으로 index + 1의 위치를 계산하는 것이다.
 *
 * 이 문제의 Base Case는 일수가 d에 도달했을 경우다.
 * d일에는 남은 일을 모두 처리해야 하므로 [index, N - 1] 범위의 일을 모두 처리하게 된다.
 * 그리고 이 값을 바탕으로 d - 1일의 값을 계산해야 하는데, 
 * [?, index - 1]까지의 값을 [index, N -1]의 값으로 계산한다.
 * 그러므로 우리는 index 이전의 값으로 이전의 값을 유추하는 것을 알 수 있다.
 * 위 사항을 고려할 때, dp는 아래처럼 정의하는 것이 옳다.
 *
 * dp[i][day] := day일에 i번째 일부터 하는 경우의 최소값
 *
 * 이를 식으로 바꿔줘야 하는데 i번째부터 k번째 이전까지의 일을 한다면 k 값에 따라 일의 난이도가 바뀐다.
 * day + 1일의 값들을 고려해야하고, i부터 k 사이의 가장 어려운 값도 더해줘야 한다.
 * 우리는 그 중에서도 최소값을 구해야 하는데, k의 범위를 따지지 않으면 식이 아래처럼 만들어진다.
 *
 * dp[i][day] = min_{k} (dp[k][day + 1] + max_{l=i}^{k-1} jobDifficulty[l])
 *
 * 이제 k의 구체적으로 구해보자.
 * 각 날마다 하나의 일은 해야 하므로, k가 i + 1 이상이어야 하는 것을 알 수 있다.
 * 그리고 남은 일의 수가 남은 날의 수보다 커야하므로 (N - 1 - (k - 1)) >= (d - day) 이어야 한다.
 * 두 식을 종합하면 i + 1 <= k <= N - d + day가 된다.
 *
 * dp식의 jobDifficulty의 최댓값을 구하려면 [i, k-1] 범위를 탐색해야 한다.
 * 그런데 같은 범위를 여러 번 탐색하고 있고, k값을 변수로 사용하고 있다.
 * 이는 매 k 값마다 반복문으로 검색할 필요 없이, k값에 따라 한 번씩만 업데이트 해주면 된다.
 * 그러므로 식은 아래처럼 된다.
 *
 * dp[i][day] = min_{k=index+1}^{N-d+day} (dp[k][day + 1] + Diff)
 *              where Diff = max(Diff, jobDifficulty[k - 1]) for each iteration.
 */
var minDifficulty = function(jobDifficulty, d) {
  const N = jobDifficulty.length;
  
  if (d > N) {
    return -1;
  }

  let dp = new Array(N + 1).fill().map(() => new Array(d + 1).fill(Number.MAX_SAFE_INTEGER));
  
  /*
  // TopDown
  return TopDown(0, 1);
  
  function TopDown(index, day) {
    if (dp[index][day] !== Number.MAX_SAFE_INTEGER) {
      return dp[index][day];   
    }
    
    if (day === d) {
      let Diff = 0;
      for (let l = index; l < N; ++l) {
        Diff = Math.max(Diff, jobDifficulty[l]);  
      }
      dp[index][day] = Diff; 
      return Diff;
    }
    
    let Diff = 0;
    for (let k = index + 1; k <= N - d + day; ++k) {
      Diff = Math.max(Diff, jobDifficulty[k - 1]);
      dp[index][day] = Math.min(dp[index][day], TopDown(k, day + 1) + Diff);
    }  
    
    return dp[index][day];
  }
  */
  
  // BottomUp
  let max = 0;

  for (let index = N - 1; index >= d - 1; --index) {
    max = Math.max(max, jobDifficulty[index]);
    dp[index][d] = max;
  }
  
  // N - 1 - index >= (d - day) && index + 1 >= day
  for (let day = d - 1; day >= 1; --day) {
    for (let index = N - 1 - d + day; index >= day - 1; --index) {
      calcdp(index, day);  
    }
  }
  
  return dp[0][1];
  
  function calcdp(index, day) { // calcdp(4, 1)
    let difficulty = 0; 
    for (let k = index + 1; k <= (N - d + day); ++k) {
      difficulty = Math.max(difficulty, jobDifficulty[k - 1]);  
      dp[index][day] = Math.min(dp[index][day], difficulty + dp[k][day + 1]);
    }
  }
};