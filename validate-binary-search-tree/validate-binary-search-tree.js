/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  if (root === null) {
    return true;
  }
  
  return DC(root)[2];
  
  function DC(root) {
    if (root.left === null && root.right === null) {
      return [root.val, root.val, true];
    }
    
    let leftSubtree = [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, true], 
          rightSubtree = [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, true];
    if (root.left !== null) {
      leftSubtree = DC(root.left);
    }
    
    if (root.right !== null) {
      rightSubtree = DC(root.right);
    }
    
    const Max = Math.max(root.val, leftSubtree[0], rightSubtree[0]);
    const Min = Math.min(root.val, leftSubtree[1], rightSubtree[1]);
    
    if(leftSubtree[2] === false || rightSubtree[2] === false) {
      return [Max, Min, false];
    }
    
    if (root.val > leftSubtree[0] && rightSubtree[1] > root.val) {
      return [Max, Min, true];
    } else {
      return [Max, Min, false];
    }
  }
    
};