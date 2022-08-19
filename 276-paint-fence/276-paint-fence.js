/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numWays = function(n, k) {
  if (n <= 2) {
    return Math.pow(k, n);  
  }
  
  let dp = new Array(n);
  let pprev = k, 
      prev = k * k,
      temp;
    
  
  for (let i = 2; i < n; ++i) {
    temp = prev
    prev = (prev + pprev) * (k - 1);
    pprev = temp;
  }

  return prev;
};