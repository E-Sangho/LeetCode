
var MyQueue = function() {
  this.data = [];
  this.index = 0;
  this.size = 0;
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.data.push(x);  
  ++this.size;
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  if (this.size === 0) {
    return;
  }
  
  const front = this.data[this.index++]; 
  --this.size;
  
  return front;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  return this.data[this.index];    
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  if (this.size === 0) {
    return true;
  }   
  
  return false;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */