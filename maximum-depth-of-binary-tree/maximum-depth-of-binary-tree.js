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
    return TopDown(root); 
};

function TopDown(root) {
    let answer = 0;
    
    function UtilTopDown(root, depth) {
        if (root === null) {
            return 0;
        }    
        
        if (!root.left && !root.right) {
            answer = Math.max(answer, depth);
        }

        UtilTopDown(root.left, depth + 1);
        UtilTopDown(root.right, depth + 1);
    }
    
    UtilTopDown(root, 1);
    return answer;
}

function BottomUp(root) {
    if (root === null) {
        return 0;
    }
    
    let left = BottomUp(root.left);
    let right = BottomUp(root.right);

    return Math.max(left, right) + 1;
    
}