/**
 * // Definition for a Node.
 * function Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function(root) {
  let head = new Node();
  let tail = new Node();
  
  
  return TreeToDoubleList(root);
    
  function TreeToDoubleList(root) {
    if (!root) return null;
    
    convert(root);
    tail.right = head;
    head.left = tail;
    return head;
  }
  
  function convert(node) {
    if (node === null) {
      return;
    }
    convert(node.left);

    if (tail.val !== null) {
      tail.right = node;
      node.left = tail;
      tail = node;
    } else {
      head = node;
      tail = node;
    }

    convert(node.right);
  }
};

