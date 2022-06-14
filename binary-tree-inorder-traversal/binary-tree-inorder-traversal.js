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
var inorderTraversal = function(root) {
    /*
        1. 노드의 left, right가 모두 있는 경우
        2. 노드의 left만 있는 경우
        3. 노드의 right만 있는 경우
        4. 노드의 left, right가 모두 없는 경우

        1,2 => left를 스택에 추가 
        3 => 현재 노드를 path에 추가하고 스택에서 제거, right를 스택에 추가
        4 => 현재 노드를 path에 추가하고 스택에서 제거 => 상위 노드로 이동 => 상위 노드는 1,2인 상태지만 left가 없는 상태로 취급해줘야 함(즉, 3,4로 취급되어야 함)
    */ 

    let stack = [];
    let path = [];
    let flag = true;
    let curNode = root;

    while (curNode !== null || stack.length > 0) {
        if (curNode !== null) {
            stack.push(curNode);
            curNode = curNode.left; 
        } else {
            curNode = stack.pop();
            path.push(curNode.val);
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
    
    let left = inorderTraversal(root.left);
    let right = inorderTraversal(root.right);
    
    return [...left, root.val, ...right];
    */
};