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
    let Indexer = {};
    let N = postorder.length;
        
    for (let i = 0; i < N; ++i) {
        Indexer[inorder[i]] = i;
    }
    
    return Recursive(0, N - 1);

    function Recursive(is, ie) {
        if (is > ie) {
            return null;
        } 
        
        let root = postorder.pop();
        let rootIndex = Indexer[root];

        let right = Recursive(rootIndex + 1, ie);
        let left = Recursive(is, rootIndex - 1)
        
        return new TreeNode(root, left, right);
    }  
};
