/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
  return DPSolution(nums, target);   
};

function DPSolution(nums, target) {
  const N = nums.length;
  const total = nums.reduce((a, b) => a + b);
  
  if (Math.abs(target) > total) {
    return 0;
  }
  
  let dp = new Array(N).fill().map(() => new Array(total * 2 + 1).fill(0));
  dp[0][nums[0] + total] = 1;
  dp[0][-nums[0] + total] += 1;
  
  for (let i = 0; i < N - 1; ++i) {
    for (let j = -total; j <= total; ++j) {
      if (dp[i][j + total] > 0) {
        dp[i + 1][j + nums[i + 1] + total] += dp[i][j + total];
        dp[i + 1][j - nums[i + 1] + total] += dp[i][j + total];
      }
    }
  }
  
  return dp[N - 1][target + total];
}

function DFS(nums, target) {
  const N = nums.length;
  const total = nums.reduce((a, b) => a + b);
  let dp = new Array(N).fill().map(() => new Array(total * 2 + 1).fill(-1));
  
  let ans = DFSUtil(0, 0);
  
  return ans;
  
  function DFSUtil(depth, curVal) {
    if (depth === N) {
      if (curVal === target) {
        return 1;
      }
      return 0;
    }
    
    if (dp[depth][curVal + total] !== -1) {
      return dp[depth][curVal + total];
    }
    
    let plus = DFSUtil(depth + 1, curVal + nums[depth]);
    let minus = DFSUtil(depth + 1, curVal - nums[depth]);
    
    dp[depth][curVal + total] = plus + minus;

    return dp[depth][curVal + total];
  }
  
}