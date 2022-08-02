/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const N = nums.length;
  let ans = [];
  Permutation(0);
  
  return ans;

  function Permutation(depth) {
    if (depth === N) {
      ans.push(nums.slice());
      return;  
    }  
    
    for (let i = depth; i < N; ++i) {
      swap(depth, i);
      Permutation(depth + 1); 
      swap(depth, i);
    }
  }    
  
  function swap(a, b) {
    let temp = nums[a];
    nums[a] = nums[b];
    nums[b] = temp;
  }
};