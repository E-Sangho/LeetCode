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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (root === null) {
    return [];
  }
  
  let ans = [];
  let queue = new MyQueue();

  queue.push(root);

  while (queue.size > 0) {
    const N = queue.size;
    let top;
    let curLevel = [];

    for (let i = 0; i < N; ++i) {
      top = queue.pop();
      curLevel.push(top.val);
      if (top.left !== null) {
        queue.push(top.left);
      }
      if (top.right !== null) {
        queue.push(top.right);
      }
    }
    ans.push(curLevel);
  }
  
  return ans;
};

class Node {
  constructor(val) {
    this.val = (val === undefined ? null : val);
    this.next = null;
  }
}

class MyQueue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  
  push(val) {
    const newNode = new Node(val);
    
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.size = 1;
      return;
    }  
    
    this.tail.next = newNode;
    this.tail = newNode;
    this.size++;  
  }
  
  pop() {
    if (this.size === 0) {
      return false;
    }
    
    const returnVal = this.head.val;
    this.head = this.head.next;
    this.size--;
    
    return returnVal;
  }
}