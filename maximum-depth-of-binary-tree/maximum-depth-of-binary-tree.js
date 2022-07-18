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
 * @return {number}
 */
var maxDepth = function(root) {
  return depth(root);
    
  function depth(root) {
    if (root === null) {
      return 0;
    }
    
    const left = depth(root.left) + 1;
    const right = depth(root.right) + 1;
    return Math.max(left, right);
  }
};