/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const N = nums.length;
  let dp = new Array(N + 3).fill(0);    
  
  for (let i = 0; i < N; ++i) {
    dp[i + 3] = Math.max(dp[i + 1], dp[i]) + nums[i]; 
  }
  
  console.log(dp);
  
  return Math.max(dp[N + 1], dp[N + 2]);
};