/**
 * @param {number[]} nums
 * @param {number[]} multipliers
 * @return {number}
 */
var maximumScore = function(nums, multipliers) {
  // dp ~ f(sIndex, eIndex, mul)   
  const M = multipliers.length;
  const N = nums.length;
  
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
  
};