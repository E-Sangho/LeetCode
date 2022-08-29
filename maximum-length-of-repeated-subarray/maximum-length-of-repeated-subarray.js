/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
/*
 * state: num1's index i1, num2's index i2
 * dp[i][j] := num1의 i번째 수와 num2의 j번째 수를 subarray의 마지막에 포함하는 최대 길이
 * dp[i][j] = (num1[i] = num2[j]) => dp[i - 1][j - 1] + 1
 */
var findLength = function(nums1, nums2) {
  const n = nums1.length, m = nums2.length;
  let dp = new Array(n).fill().map(() => new Array(m).fill(0));
  let ans = 0;

  for (let i = 0; i < n; ++i) {
    if (nums1[i] === nums2[0]) {
      dp[i][0] = 1;
      ans = Math.max(ans, 1);
    }
  }
  
  for (let j = 0; j < m; ++j) {
    if (nums2[j] === nums1[0]) {
      dp[0][j] = 1;
      ans = Math.max(ans, 1);
    }
  } 
  
  for (let i = 1; i < n; ++i) {
    for (let j = 1; j < m; ++j) {
      if (nums1[i] === nums2[j]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;     
        ans = Math.max(ans, dp[i][j]);
      }
    }
  } 
  
  return ans;  
};