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
    if (root === null) {
        return []; 
    }
    
    if (root.left === null && root.right === null) {
        return [root.val];
    }
    
    let left = inorderTraversal(root.left);
    let right = inorderTraversal(root.right);
    
    return [...left, root.val, ...right];
};