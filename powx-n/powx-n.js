/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  let Memory = new Map();
  
  if (n >= 0) {
    return Recursion(x, n);
  } else {
    return 1 / Recursion(x, Math.abs(n));
  }
  
  
  function Recursion(x, n) {
    if (Memory.has(n)) {
      return Memory.get(n);
    }
    
    if (n === 0) {
      return 1;
    }
    
    if (n % 2 === 1) {
      Memory.set(n, Recursion(x, Math.floor(n / 2)) * Recursion(x, Math.floor(n / 2)) * x);
    } else {
      Memory.set(n, Recursion(x, n / 2) * Recursion(x, n / 2));
    }
    
    return Memory.get(n);
  }    
};