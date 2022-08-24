/**
 * @param {number[]} nums
 * @return {number}
 */
/*
 * Let dp[i] as maximum sum that ends at ith nums.
 * That means dp[i] := max_{j} nums[j] + nums[j + 1] + ... + nums[i].
 * Here nums is a circular array so j's range is 0 <= j < i || i + 2 <= j
 * Accordingly there are two possible cases to calculate it.
 * First is max_{j} nums[j] + ... + nums[i], where 0 <= j < i.
 * Second is max_{j} nums[j] + ... nums[N - 1] + nums[0] + ... + nums[i], where i + 2 <= j.
 * Previous one is easily solved by Kadane's Algorithm.
 * Let this answer as Front[i] = max_{j} nums[j] + ... + nums[i], where 0 <= j < i.
 *
 * Other case, however, we can't use it.
 * If we start from j to i, where i + 2 <= j, 
 * subarray sum should be nums[j] + nums[j + 1] + ... + nums[N - 1] + nums[0] + ... + nums[i].
 * In this case nums[0] + ... nums[i] is fixed one, because we start from j, where i + 2 <= j.
 * We want to find maximum subarray, so we have to check max_{j} nums[j] + ... nums[N - 1].
 *
 * Let A[i] := nums[0] + nums[1] + ... + nums[i],
 *     B[i] := max_{j} nums[j] + nums[j + 1] + ... nums[N - 1], where i + 2 <= j,
 *     Back[i] := A[i] + B[i] (This is maximum sum start from j, where i + 2 <= j)
 *
 * Finally we can find dp[i] to combine results.
 * dp[i] = max(Front[i], Back[i])
 *
 * 1. use Kadane's Algorithm to find Front[i]
 * 2. Find A[i]
 * 3. Find B[i]
 * 4. Find Back[i] from A[i] and B[i]
 * 5. Find dp[i] = max(Front[i], Back[i])
 * 6. return ans = max_{i} dp[i]
 */
var maxSubarraySumCircular = function(nums) {
  const N = nums.length;
  let A = new Array(N),
      dp = new Array(N);
  
  let cur = nums[0], best = nums[0];
  
  A[0] = nums[0];

  // use Kadane's Algorithm
  for (let i = 1; i < N; ++i) {
    cur = Math.max(nums[i], cur + nums[i]);
    best = Math.max(best, cur);
    // Find A[i]
    A[i] = nums[i] + A[i - 1];  
  }

  let backCur = 0, backBest = 0;
  
  for (let i = N - 1; i >= 2; --i) {
    // Find B[i]
    backCur += nums[i];
    backBest = Math.max(backBest, backCur); // This is B[i]. We don't use it again, 
                                            // so there is no reason to memorize it.
    
    best = Math.max(best, A[i - 2] + backBest); // When we update best, we already checked all Front[i].
                                                // Therefore we iteratively check Back[i] with best.
  }

  return best;
};