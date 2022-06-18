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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let queue = [];
    let level = [];
    
    if (root !== null) {
        queue.push(root);
    }

    while (queue.length > 0) {
        let nextLevel = [];
        let curLevel = [];

        while (queue.length > 0) {
            let front = queue.shift();
            
            curLevel.push(front.val);
            
            if (front.left !== null) {
                nextLevel.push(front.left);
            }
            
            if (front.right !== null) {
                nextLevel.push(front.right);
            }
        }
        
        level.push(curLevel);

        queue = nextLevel;
    }
    
    return level;
};
    