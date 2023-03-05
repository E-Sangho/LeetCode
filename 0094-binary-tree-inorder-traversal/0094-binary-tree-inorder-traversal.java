/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    List<Integer> path;
    public List<Integer> inorderTraversal(TreeNode root) {
        path = new LinkedList<>();    
        DFS(root);
        
        return path;
    }
    
    public void DFS(TreeNode node) {
        if (node == null) {
            return;
        }
        
        if (node.left != null) {
            DFS(node.left);
        }
        
        path.add(node.val);
        
        if (node.right != null) {
            DFS(node.right);
        }
    }
}