/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  let ans = [];
  
  DFS([], 1, n, 0);
    
  return ans;

  function DFS(collection, sIndex, eIndex, depth) {
    if (depth === k) {
      ans.push(collection.slice()); 
      return;
    }
    
    for (let i = sIndex; i <= eIndex; ++i) {
      collection.push(i);  
      DFS(collection, i + 1, eIndex, depth + 1);
      collection.pop();
    }
  }
};