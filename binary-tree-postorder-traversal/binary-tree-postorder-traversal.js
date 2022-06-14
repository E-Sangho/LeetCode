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
var postorderTraversal = function(root) {
    if (root === null) {
        return [];
    }
    
    if (root.left === null && root.right === null) {
        return [root.val];
    }
    
    let left = postorderTraversal(root.left);
    let right = postorderTraversal(root.right);
    
    return [...left, ...right, root.val];
};