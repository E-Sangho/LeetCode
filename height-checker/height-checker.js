/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
  let expected = heights.slice();
  let ans = 0;
  
  expected.sort((a, b) => a - b);

  for (let i = 0; i < heights.length; ++i) {
    if (heights[i] !== expected[i]) {
      ++ans;     
    }    
  }
  
  return ans;
};