
var MedianFinder = function() {
  this.maxHeap = new Heap((a, b) => {
    return a < b;
  });
  this.minHeap = new Heap((a, b) => {
    return a > b;
  });
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
  this.minHeap.push(num);
  this.maxHeap.push(this.minHeap.pop());
  
  if ((this.maxHeap.size() - this.minHeap.size() > 1)) {
    this.minHeap.push(this.maxHeap.pop());    
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
  if(this.maxHeap.size() === this.minHeap.size()) {
    return (this.maxHeap.top() + this.minHeap.top()) / 2; 
  }
  
  return this.maxHeap.top();
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

class Heap {
  constructor(compareFunction) {
    this.data = new Array(1).fill(0);
    this.compare = compareFunction;
  }
  
  push(x) {
    this.data.push(x);
    let child = this.size();
    let parent = Math.floor(child / 2);
    
    while (child > 1 && this.compare(this.data[parent], this.data[child])) {
      this.swap(child, parent);
      child = parent;
      parent = Math.floor(child / 2);
    }
  }
  
  pop() {
    const returnVal = this.data[1];
    this.data[1] = this.data.at(-1);
    this.data.pop();
    
    let parent = 1;
    const leafBoundary = Math.floor(this.size() / 2);
    
    while (parent <= leafBoundary) {
      let left = parent * 2,
          right = parent * 2 + 1;
      if (
        this.compare(this.data[parent], this.data[left]) ||
        this.compare(this.data[parent], this.data[right])
      ) {
        if (
          this.data[right] === undefined ||
          this.compare(this.data[right], this.data[left]) 
        ) {
          this.swap(left, parent);
          parent = left;
        } else {
          this.swap(right, parent);
          parent = right;
        }
      } else {
        break;
      } 
    }
    
    return returnVal;
  }
  
  top() {
    return this.data[1];
  }
  
  swap(a, b) {
    let temp = this.data[a];
    this.data[a] = this.data[b];
    this.data[b] = temp;
  }
    
  compare(a, b) {
    return this.compare(a, b);
  }
  
  size() {
    return this.data.length - 1;
  }
}