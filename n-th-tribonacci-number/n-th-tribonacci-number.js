/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
  let dp = new Map();
  dp.set(0, 0);
  dp.set(1, 1);
  dp.set(2, 1);
  
  return Tribonacci(n);
  
  function Tribonacci(m) {
    if (!dp.has(m)) {
      dp.set(m, Tribonacci(m - 1) + Tribonacci(m - 2) + Tribonacci(m - 3));
    }
    
    return dp.get(m);
  }    
};