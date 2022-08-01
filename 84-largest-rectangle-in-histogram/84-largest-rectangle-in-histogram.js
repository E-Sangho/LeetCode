/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  heights.push(0);
  const N = heights.length;
  
  let stack = [-1]; 
  let maxArea = 0;
  
  for (let i = 0; i < N; ++i) {
    while (heights[stack.at(-1)] > heights[i]) {
      let index = stack.pop();
      let height = heights[index];
      let width = i - stack.at(-1) - 1;
      maxArea = Math.max(maxArea, height * width);
    }
    
    stack.push(i);
  }
  heights.pop(); 

  return maxArea;
};