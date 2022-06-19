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
    return iterative(root);  
};

var iterative = function(root) {
    let left = iterativeLeft(root.left);
    let right = iterativeRight(root.right);

    return JSON.stringify(left) === JSON.stringify(right);
    
    function iterativeLeft(root) {
        let stack = [];
        let curNode = root;
        let path = [];

        while (curNode !== null || stack.length > 0) {
            if (curNode !== null) {
                stack.push(curNode);
                path.push(curNode.val);
                curNode = curNode.left;
            } else {
                path.push(null);
                curNode = stack.pop();
                curNode = curNode.right;
            }

        }

        return path;
    }
    
    function iterativeRight(root) {
        let stack = [];
        let curNode = root;
        let path = [];
        while (curNode !== null || stack.length > 0) {
            if (curNode !== null) {
                stack.push(curNode);
                path.push(curNode.val);
                curNode = curNode.right;
            } else {
                path.push(null);
                curNode = stack.pop();
                curNode = curNode.left;
            }
        }
        
        return path;
    }
}

var recursive = function(root) {
    let leftPath = [];
    let rightPath = [];
    let left = root.left;
    let right = root.right;
    
    priorLeft(left);
    priorRight(right);
    
    return JSON.stringify(leftPath) == JSON.stringify(rightPath);
    
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
}