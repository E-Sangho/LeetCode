/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (matrix === null || matrix.length === 0) {
    return false;
  }
  
  const m = matrix.length,
        n = matrix[0].length;
  
  return searchTarget(0, m - 1, 0, n - 1);
  
  function searchTarget(rs, re, cs, ce) {
    if (rs > re || cs > ce) {
      return false;
    } 
    
    if (target < matrix[rs][cs] || target > matrix[re][ce]) {
      return false;
    }
    
    const mc = Math.floor((cs + ce) / 2);
    let row = rs;
    
    while (row <= re && matrix[row][mc] <= target) {
      if (matrix[row][mc] === target) {
        return true;
      }
      ++row;
    }
    
    return searchTarget(row, re , cs, mc - 1) || searchTarget(rs, row - 1,mc + 1, ce)
  }
};