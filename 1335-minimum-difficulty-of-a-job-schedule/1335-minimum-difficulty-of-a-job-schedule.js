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
 */
var minDifficulty = function(jobDifficulty, d) {
  const N = jobDifficulty.length;
  
  if (d > N) {
    return -1;
  }

  let dp = new Array(N).fill().map(() => new Array(d + 1).fill(Number.MAX_SAFE_INTEGER));
  
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