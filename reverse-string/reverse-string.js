/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  const N = s.length;

  recursion(s, 0);
  
  function recursion(s, depth) {
    if (N % 2 === 0) {
      if (depth >= N / 2) {
        return;
      }
    }
      
    if (N % 2 === 1) {
      if (depth === Math.floor(N / 2)) {
        return;
      }
    }
    
    const front = s[depth];

    s[depth] = s[N - 1 - depth];
    s[N - 1 - depth] = front;

    recursion(s, depth + 1);
  }
}  

