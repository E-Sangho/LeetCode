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
    let stack = [];
	let curNode = root;
	let path = [];

	while (curNode !== null || stack.length > 0) {
		if (curNode !== null) {
			path.push(curNode.val);
			stack.push(curNode);
			curNode = curNode.left;
		} else {
			curNode = stack.pop();
			curNode = curNode.right;
		}
	}
    
    return path;

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