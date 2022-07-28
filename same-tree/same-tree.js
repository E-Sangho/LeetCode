/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  
  return Iteration(p, q);
  
  function Iteration(p, q) {
    let pStack = [],
        qStack = [];

    pStack.push(p);
    qStack.push(q);

    while (pStack.length > 0) {
      let pNode = pStack.pop();
      let qNode = qStack.pop();
      
      if (!Check(pNode, qNode)) {
        return false;  
      }
      
      if (pNode !== null) {
        if (!Check(pNode.left, qNode.left)) {
          return false;
        }
        
        if (pNode.left !== null) {
          pStack.push(pNode.left);
          qStack.push(qNode.left);
        }
        
        if (!Check(pNode.right, qNode.right)) {
          return false; 
        }  
        
        if (pNode.right !== null) {
          pStack.push(pNode.right); 
          qStack.push(qNode.right);
        }
      }

    }
      
    return true;
  }
  
  function Check(p, q) {
    if (p === null && q === null) {
      return true;
    }
    
    if (p === null || q === null) {
      return false;
    }
    
    if (p.val !== q.val) {
      return false;
    }
    
    return true;
  }

  function Recursion(p, q) {
    if (p === null && q === null) {
      return true;
    }
    
    if (p === null || q === null) {
      return false;
    }
    
    if (p.val !== q.val) {
      return false;
    }
    
    return Recursion(p.right, q.right) && Recursion(p.left, q.left);
  }   
};