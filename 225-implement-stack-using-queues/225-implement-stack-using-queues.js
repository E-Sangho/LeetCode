
var MyStack = function() {
  this.stack = new MyQueue();
    
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this.stack.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
  let tempQueue = new MyQueue();

  while (this.stack.size !== 1) {
    tempQueue.push(this.stack.pop());
  } 
  
  const front = this.stack.pop();
  
  this.stack = tempQueue;
  
  return front;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
  return this.stack.tail.val;    
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  if (this.stack.size > 0) {
    return false;
  }    
  
  return true;
};

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
    let newNode = new MyNode(val);
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
}
/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */