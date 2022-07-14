/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  let memo = new Map();
  
  return Fibonaci(n);

  function Fibonaci(n) {
    if (memo.has(n)) {
      return memo.get(n);
    }
    
    if (n < 2) {
      return n;
    }
    
    let Fibo_n = Fibonaci(n - 1) + Fibonaci(n - 2);
    memo.set(n, Fibo_n);
    
    return Fibo_n;
  }
    
};