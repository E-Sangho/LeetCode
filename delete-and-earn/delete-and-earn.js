/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
  const N = nums.length;
  let Score = new Map();

  for (let i = 0; i < N; ++i) {
    if (!Score.has(nums[i])) {
      Score.set(nums[i], 0);
    }  
    Score.set(nums[i], Score.get(nums[i]) + nums[i]);
  }
    
  let Nums = Array.from(new Set(nums));
  
  Nums.sort((a, b) => a - b);
  
  const M = Nums.at(-1);
  
  let dp = new Map();
  dp.set(0, 0);
  dp.set(1, Score.has(1) ? Score.get(1) : 0);
  
  for (let i = 2; i <= M; ++i) {
    let score = Score.has(i) ? Score.get(i) : 0;
    dp.set(i, Math.max(dp.get(i - 2) + score, dp.get(i - 1)));
  }
  
  return dp.get(M);
};