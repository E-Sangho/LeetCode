/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
  return DFS(nums, target);   
};

function DFS(nums, target) {
  const N = nums.length;
  let count = 0;
  
  DFSUtil(0, 0);
  
  return count;
  
  function DFSUtil(depth, curVal) {
    if (depth === N) {
      if (curVal === target) {
        ++count; 
      }
      return;
    }
    DFSUtil(depth + 1, curVal + nums[depth]);
    DFSUtil(depth + 1, curVal - nums[depth]);
  }
  
}