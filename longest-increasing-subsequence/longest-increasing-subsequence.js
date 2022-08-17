/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  let dp = new Array(nums.length).fill(1);    
  let ans = 0;
  
  for (let i = 0; i < nums.length; ++i) {
    for (j = 0; j < i; ++j) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    ans = Math.max(ans, dp[i]);
  }

  return ans;
};