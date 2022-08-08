/**
 * @param {number[]} nums
 * @param {number[]} multipliers
 * @return {number}
 */
var maximumScore = function(nums, multipliers) {
  // dp ~ f(sIndex, eIndex, mul)   
  const M = multipliers.length;
  const N = nums.length;
  
  let dp = new Array(M + 1).fill().map(() => new Array(M + 1).fill(0));
  
  for (let depth = M - 1; depth >= 0; --depth) {
    for (let sIndex = 0; sIndex <= M - 1; ++sIndex) {
      dp[depth][sIndex] = Math.max(
        dp[depth + 1][sIndex] + nums[N - 1 - (depth - sIndex)] * multipliers[depth],
        dp[depth + 1][sIndex + 1] + nums[sIndex] * multipliers[depth]
      )
    }
  }
  
  return dp[0][0];

  /*
  let dp = new Array(M).fill().map(() => new Array(M).fill(0));
  
  return Dynamic(0, 0);

  function Dynamic(sIndex, depth) {
    if (depth === M) {
      return 0;      
    }
    
    if (dp[depth][sIndex] === 0) {
      dp[depth][sIndex] = 
        Math.max(
          Dynamic(sIndex + 1, depth + 1) + nums[sIndex] * multipliers[depth], 
          Dynamic(sIndex, depth + 1) + nums[N - 1 - (depth - sIndex)] * multipliers[depth]
        );
    } 

    return dp[depth][sIndex];
  }
  */ 
};