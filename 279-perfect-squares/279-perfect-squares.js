/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  const list = FindPerfectNumber(n); 
  let depth = 0;
  let dp = new Array(n + 1).fill(Number.MAX_VALUE);
  
  dp[0] = 0;
  
  for (let j = 1; j <= n; ++j) {
    for (let i = 0; i < list.length; ++i) {
      if (j - list[i] >= 0) {
        dp[j] = Math.min(dp[j], dp[j - list[i]] + 1);
      }
    }    
  }
  
  return dp[n];
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