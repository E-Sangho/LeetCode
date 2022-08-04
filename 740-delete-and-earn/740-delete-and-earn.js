/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
  const N = nums.length;
  let ScoreMap = new Map();  
  let ArrToSet= new Set(nums);
  let Nums = Array.from(ArrToSet);
  let dp = new Map();
  
  Nums.sort((a, b) => a - b);
  
  const M = Nums.length;

  for (let i = 0; i < N; ++i) {
    if (ScoreMap.has(nums[i])) {
      ScoreMap.set(nums[i], ScoreMap.get(nums[i]) + nums[i]);
      continue;
    } 
    
    ScoreMap.set(nums[i], nums[i]);
  } 
  
  return Recursion(Nums.at(-1));
  
  function Recursion(num) {
    if (num === 0) {
      return 0;
    }
    
    if (num === 1) {
      if (ScoreMap.has(1)) {
        return ScoreMap.get(1);
      } else {
        return 0;
      }
    }
    
    if (dp.has(num)) {
      return dp.get(num);
    }
    
    let notSelect, select;
    
    notSelect = Recursion(num - 1);
    
    if (ScoreMap.has(num)){
      select = Recursion(num - 2) + ScoreMap.get(num);
    } else {
      select = Recursion(num - 2);
    }
    
    dp.set(num, Math.max(select, notSelect));
    
    return dp.get(num);
  }
};