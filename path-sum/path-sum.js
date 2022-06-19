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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    return Recursive(root, targetSum);
};

function Recursive(root, targetSum) {
    if (root === null) {
        return false;
    }
    
    let ans = false;
    RecursiveUtil(root, 0);

    return ans;
    
    function RecursiveUtil(root, sum) {
        if (root === null) {
            return;
        }    
        
        sum += root.val;
        
        if (root.left === null && root.right === null) {
            if (sum === targetSum) {
                ans = true;
            }
        }
        

        RecursiveUtil(root.right, sum);
        RecursiveUtil(root.left, sum);
    }
}