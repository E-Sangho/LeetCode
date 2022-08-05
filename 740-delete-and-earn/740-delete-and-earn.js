/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
  const N = nums.length;
  let Score = new Map();
  let M = 0;

  for (let num of nums) {
    Score.has(num) ? 
      Score.set(num, Score.get(num) + num) : 
      Score.set(num, num);
    M = Math.max(M, num);
  }
  
  let dp = new Map();
  
  dp.set(0, 0);
  dp.set(1, Score.has(1) ? Score.get(1) : 0);
  
  for (let i = 2; i <= M; ++i) {
    let score = Score.has(i) ? Score.get(i) : 0;
    dp.set(i, Math.max(dp.get(i - 2) + score, dp.get(i - 1)));
  }
  
  return dp.get(M);
};