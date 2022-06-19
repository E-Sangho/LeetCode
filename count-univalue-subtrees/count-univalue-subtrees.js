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
var countUnivalSubtrees = function(root) {
    return Recursive(root);
};

function Recursive(root) {
    let count = 0;
    RecursiveUtil(root);
    return count;
    
    function RecursiveUtil(root) {
        if (root === null) {
            return null;
        }
        
        let left = RecursiveUtil(root.left);
        let right = RecursiveUtil(root.right);
        
        if (left === null && right === null) {
            ++count;
            return root.val;
        }
        
        if (left === null && right !== null) {
            if (root.val === right) {
                ++count;
                return root.val;
            }
        }
        
        if (left !== null && right === null) {
            if (root.val === left) {
                ++count;
                return root.val;
            }
        }
            
        if (left === right) {
           if (root.val === left) {
               ++count;
               return root.val;
           } 
        }
            
        return -1001;
    }
}

function Iterative(root) {
    
}
