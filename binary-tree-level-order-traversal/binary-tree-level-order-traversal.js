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
        let size = queue.length;
        let curLevel = [];  

        for (let i = 0; i < size; ++i) {
            let front = queue.shift();
            
            curLevel.push(front.val);
            
            if (front.left !== null) {
                queue.push(front.left);
            }
            
            if (front.right !== null) {
                queue.push(front.right);
            }
            
        }
        
        level.push(curLevel);
    }
    
    return level;
};
    