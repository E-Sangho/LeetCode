/**
 * @param {number[]} nums
 * @return {number}
 */
/*
 * Let dp[i] as maximum sum that ends as ith nums.
 * That means dp[i] := max_{j} nums[j] + nums[j + 1] + ... + nums[i].
 * Here nums is a circular array so j's range is 0 <= j < i || i + 2 <= j
 * When 0 <= j < i, we can use Kadane's Algorithm to solve this problem.
 * Other case, however, we can't use it, because we don't know where to start.
 *
 * Let A[i] := nums[0] + nums[1] + ... + nums[i],
 *     B[i] := nums[i] + nums[i + 1] + ... nums[N - 1], where N = nums.length.
 *     C(i, j) := A[i] + B[j]
 */
var maxSubarraySumCircular = function(nums) {
  const N = nums.length;
  let A = new Array(N),
      dp = new Array(N);
  
  let cur = nums[0], best = nums[0];
  
  A[0] = nums[0];

  for (let i = 1; i < N; ++i) {
    cur = Math.max(nums[i], cur + nums[i]);
    best = Math.max(best, cur);
    A[i] = nums[i] + A[i - 1];  
  }

  let backCur = 0, backBest = 0;
  
  for (let i = N - 1; i >= 2; --i) {
    backCur += nums[i];
    backBest = Math.max(backBest, backCur);
    
    best = Math.max(best, A[i - 2] + backBest);
  }

  return best;
};