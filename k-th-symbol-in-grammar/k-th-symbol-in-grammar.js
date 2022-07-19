/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 * A(n, k) = Transf(A(n - 1, ceil(k / 2)))[0] when k is odd;
 * A(n, k) = Transf(A(n - 1, ceil(k / 2)))[1] when k is even;
 */
var kthGrammar = function(n, k) {
  if (n === 1) {
    return 0;
  }
  if (k % 2 === 1) {
    return kthGrammar(n - 1, Math.ceil(k / 2));
  }
  
  return 1 - kthGrammar(n - 1, Math.ceil(k / 2));
};