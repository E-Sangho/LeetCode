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
var isSymmetric = function(root) {
    return recursive(root);  
};

var recursive = function(root) {
    let leftPath = [];
    let rightPath = [];
    let left = root.left;
    let right = root.right;
    
    function priorLeft(node) {
        if (node === null) {
            leftPath.push(null);
            return;
        } 
        
        leftPath.push(node.val);

        priorLeft(node.left);
        priorLeft(node.right);
    }
    
    function priorRight(node) {
        if (node === null) {
            rightPath.push(null);
            return;
        } 
        
        rightPath.push(node.val);

        priorRight(node.right);
        priorRight(node.left);
    }
    
    priorLeft(left);
    priorRight(right);
    
    return JSON.stringify(leftPath) == JSON.stringify(rightPath);
}