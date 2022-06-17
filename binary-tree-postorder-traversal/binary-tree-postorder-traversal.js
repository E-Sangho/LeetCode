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
/*
    1. 노드가 left, right가 있는 경우
    2. 노드가 left만 있는 경우
    3. 노드가 right만 있는 경우
    4. 노드가 left, right가 없는 경우

    1, 2 => left 노드로 탐색
    3 => right 노드로 탐색
    4 => 노드를 경로에 추가 => parentNode로 이동 => 이전 노드가 left면 right를 방문(3만 존재하는 경우), 아니라면 parentNode를 경로에 추가
 */ 
var postorderTraversal = function(root) {
    let stack = [];
    let rightStack = [];
    let path = [];
    let curNode = root;
    
	while (curNode !== null || stack.length > 0) {
		if (curNode !== null) {
			if (curNode.right !== null) {
				rightStack.push(curNode.right);
			}
			stack.push(curNode);
			curNode = curNode.left;
		} else {
			curNode = stack[stack.length - 1];
            if (
                rightStack.length > 0 &&
                curNode.right === rightStack[rightStack.length - 1]
            ) {
                curNode = rightStack.pop();
            } else {
                path.push(curNode.val);
                stack.pop();
                curNode = null;
            }
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
    
    let left = postorderTraversal(root.left);
    let right = postorderTraversal(root.right);
    
    return [...left, ...right, root.val];
    */
};