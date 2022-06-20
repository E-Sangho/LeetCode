/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let N = inorder.length;
    let indexer = {};
    
    for (let i = 0; i < N; ++i) {
        indexer[inorder[i]] = i;
    }
    
    return DFSUtil(0, N - 1, 0, N - 1);
    
    function DFSUtil(is, ie, ps, pe) {
        if (ps > pe) {
            return null;
        }

        let root = preorder[ps];
        let rootIndex = indexer[root];

        let left = DFSUtil(is, rootIndex - 1, ps + 1, ps + rootIndex - is);
        let right = DFSUtil(rootIndex + 1, ie, pe - ie + rootIndex + 1, pe);
        
        return new TreeNode(root, left, right);
    }
};

