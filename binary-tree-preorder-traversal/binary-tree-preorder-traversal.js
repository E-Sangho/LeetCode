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
var preorderTraversal = function(root) {
    if (root === null) {
        return [];
    }
    let stack = [root];
    let path = [];  
    let curNode;
    while (stack.length > 0) {
        curNode = stack.pop();
        
        path.push(curNode.val); 
        
        if (curNode.right !== null) {
            stack.push(curNode.right);
        }
        
        if (curNode.left!== null) {
            stack.push(curNode.left);
        }
    }
    return path;
    /*
    let path = [];
    let stack = [];
    stack.push(root);
    
    while (stack.length > 0) {
        let top = stack.pop();
        
        if (top !== null) {
            path.push(top.val); 
            stack.push(top.right);
            stack.push(top.left);
        }
    }
    
    return path;
    */
    /*
    if (root === null) {
        return []; 
    }
    
    if (root.left === null && root.right === null) {
        return [root.val];
    }
    
    let left = preorderTraversal(root.left);
    let right = preorderTraversal(root.right);
   
    return [root.val, ...left, ...right];
    */
};