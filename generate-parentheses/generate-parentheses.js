/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let ans = [];
  
  BackTrack(0, 0, "");

  return ans;
  
  function BackTrack(leftCount, rightCount, letter) {
    if (leftCount === n && rightCount === n) {
      ans.push(letter);
      return;
    }  
    
    if (leftCount > n || rightCount > n) {
      return;
    }
    
    if (leftCount < rightCount) {
      return;
    }
    
    BackTrack(leftCount + 1, rightCount, letter + "(");
    BackTrack(leftCount, rightCount + 1, letter + ")");
  }
};