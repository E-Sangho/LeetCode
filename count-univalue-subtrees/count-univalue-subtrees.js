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
    
    function RecursiveUtil(node) {
        if (node === null) {
            return true;
        }
        
        let left = RecursiveUtil(node.left);
        let right = RecursiveUtil(node.right);
        
        if (left && right) {
            if ((node.left && node.val !== node.left.val) || (node.right && node.val !== node.right.val)) {
                return false;
            }
            ++count;
            return true;
        }
        
        return false;
    }
}
