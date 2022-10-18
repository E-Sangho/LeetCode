/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x.toString() === [...x.toString()].reverse().join("")) {
    return true;
  }
  
  return false
};