/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let dp = new Map();

  dp.set(1, 1);
  dp.set(2, 2);
  
  return climing(n);
  
  function climing(target) {
    if (dp.has(target)) {
      return dp.get(target);
    } 
    
    const newStair = climing(target - 1) + climing(target - 2);
    dp.set(target, newStair);
    
    return newStair;
  }
};