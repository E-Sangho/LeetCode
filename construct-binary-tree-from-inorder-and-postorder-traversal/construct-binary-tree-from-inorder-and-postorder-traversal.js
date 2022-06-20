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
    
    let answer = Recursive(0, N - 1, 0, N - 1);

    return answer;

    function Recursive(is, ie, ps, pe) {
        if (ps > pe) {
            return null;
        } 
        let root = postorder[pe];
        let rootIndex = Indexer[root];

        let left = Recursive(is, rootIndex - 1, ps, ps + rootIndex - is - 1);
        let right = Recursive(rootIndex + 1, ie, ps + rootIndex - is, pe - 1);
        let newNode = new TreeNode(root, left, right);
        return newNode;
    }  
};
