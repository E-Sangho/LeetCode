/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if (postorder.length === 0) {
        return null;
    }
    let root = postorder.pop();
    let rootIndex = inorder.findIndex(e => e === root);
    let leftInorder = inorder.slice(0, rootIndex);
    let rightInorder= inorder.slice(rootIndex + 1);
    let leftPostorder = postorder.slice(0, leftInorder.length);
    let rightPostorder = postorder.slice(leftInorder.length, postorder.length);
    
    let left = buildTree(leftInorder, leftPostorder);
    let right = buildTree(rightInorder, rightPostorder);
    
    let rootNode = new TreeNode(root, left, right);
    return rootNode;
};
/*
 inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
    root = 3, [9], [15, 20, 7],  [9], [15, 7, 20]
    root = 9 [], []
    root = 20 [15], [7], [15], [7]
    root = 15 [], []
    root = 7 [], [] 
        
*/