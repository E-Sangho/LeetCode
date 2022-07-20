/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  const N = nums.length;

  return divide(0, N - 1);
  
  function divide(start, end) {
    if (start === end) {
      return [nums[start]];   
    }
    
    const center = Math.floor((end + start) / 2);
  
    let left = divide(start, center);
    let right = divide(center + 1, end);
    
    return merge(left, right);
  }
    
  function merge(left, right) {
    const leftMax = left.length, rightMax = right.length, retMax = left.length + right.length;
    let ret = new Array(retMax);
    let retCount = 0, leftCount = 0, rightCount = 0; 
    
    while (leftCount < leftMax && rightCount < rightMax) {
      if (left[leftCount] < right[rightCount]) {
        ret[retCount++] = left[leftCount++];  
      } else {
        ret[retCount++] = right[rightCount++];
      }
    }
    
    while (leftCount < leftMax) {
      ret[retCount++] = left[leftCount++];  
    }
    
    while (rightCount < rightMax) {
      ret[retCount++] = right[rightCount++];
    }
    
    return ret;
  }
};