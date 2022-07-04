/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  const list = FindPerfectNumber(n); 
  let depth = 0;
  let dp = new Array(n + 1).fill(Number.MAX_VALUE);
  let queue = new Set();

  queue.add(n);
  
  while (queue.size > 0) {
    ++depth;
    let newQueue = new Set();
    
    for (let [_, val] of queue.entries()) {
      for (let i = 0; i < list.length; ++i) {
        if (val === list[i]) {
          return depth;
        }
        
        if (val > list[i]) {
          newQueue.add(val - list[i]); 
        }     
      }
    } 
    
    queue = newQueue;
  }
};


function FindPerfectNumber(n) {
  let ans = [];
  for (let i = 1; i * i <= n; ++i) {
     ans.push(i * i); 
  } 
  
  return ans.reverse();
}

class MyNode {
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
    const newNode = new MyNode(val);

    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
      ++this.size;
      
      return;
    }
    
    this.tail.next = newNode;
    this.tail = newNode;
    ++this.size;
  }
  
  pop() {
    if (this.size === 0) {
      return false;
    }
    
    const front = this.head.val;
    this.head = this.head.next;
    --this.size;
    
    return front; 
  }
  
  empty() {
    if (this.size === 0) {
      return true;
    }
    
    return false;
  }
}