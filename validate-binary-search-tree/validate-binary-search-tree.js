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
    
    let leftMax = [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, true], 
          rightMax = [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, true];
    if (root.left !== null) {
      leftMax = DC(root.left);
    }
    
    if (root.right !== null) {
      rightMax = DC(root.right);
    }
    
    const Max = Math.max(root.val, leftMax[0], rightMax[0]);
    const Min = Math.min(root.val, leftMax[1], rightMax[1]);
    
    if(leftMax[2] === false || rightMax[2] === false) {
      return [Max, Min, false];
    }
    
    if (root.val > leftMax[0] && rightMax[1] > root.val) {
      return [Max, Min, true];
    } else {
      return [Max, Min, false];
    }
  }
    
};