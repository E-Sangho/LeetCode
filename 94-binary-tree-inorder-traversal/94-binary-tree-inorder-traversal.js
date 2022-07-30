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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  let path = [];
  
  DFS(root);
  
  return path;

  function DFS(node) {
    if (node !== null) {
      DFS(node.left);
      path.push(node.val);
      DFS(node.right); 
    }
    
  }    
};