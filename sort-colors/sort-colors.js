/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let redCount = 0, whiteCount = 0, blueCount = 0;
  
  for (let num of nums) {
    if (num === 0) {
      ++redCount;
    }
    
    if (num === 1) {
      ++whiteCount;
    }
    
    if (num === 2) {
      ++blueCount;
    }
  }    
  
  for (let i = 0; i < redCount; ++i) {
    nums[i] = 0;
  }
  
  for (let i = redCount; i < (redCount + whiteCount); ++i) {
    nums[i] = 1;
  }
  
  for (let i = (redCount + whiteCount); i < (redCount + whiteCount + blueCount); ++i) {
    nums[i] = 2;
  }
};