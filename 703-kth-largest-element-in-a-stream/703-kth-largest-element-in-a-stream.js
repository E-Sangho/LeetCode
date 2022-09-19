/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
  this.heap = new Heap();
  this.k = k;
  
  for (let num of nums) {
    this.heap.push(num);
  }

  while (this.heap.realSize() > this.k) {
    this.heap.pop();
  }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  this.heap.push(val);
  
  if (this.heap.realSize() > this.k) {
    this.heap.pop();
  }
  
  return this.heap.data[1];
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

class Heap {
  constructor() {
    this.data = new Array(1).fill(0);
  }

  realSize() {
    return this.data.length - 1;
  }
  
  push(x) {
    this.data.push(x);
    let childIndex = this.data.length - 1;
    let parentIndex = Math.floor(childIndex / 2);

    while (childIndex > 1 && this.data[childIndex] < this.data[parentIndex]) {
      this.swap(childIndex, parentIndex);
      childIndex = parentIndex; 
      parentIndex = Math.floor(childIndex / 2);
    }
  }
  
  pop() {
    if (this.data.length < 2) {
      console.log("You can't pop on the empty heap.");
      return false;
    }
    
    let returnVal = this.data[1];
    this.data[1] = this.data.at(-1);
    this.data.pop();

    let parentIndex = 1;
    const leafBoundary = Math.floor((this.data.length - 1) / 2);

    while (parentIndex <= leafBoundary) {
      let left = parentIndex * 2,
          right = parentIndex * 2 + 1;

      if (this.data[left] < this.data[parentIndex] || this.data[right] < this.data[parentIndex]) {
        if (this.data[right] === undefined || this.data[left] < this.data[right]) {
          this.swap(parentIndex, left);
          parentIndex = left;
        } else {
          this.swap(parentIndex, right);
          parentIndex = right;
        }
      } else {
        break;
      }       
    }
    
    return returnVal;
  }
  
  swap(a, b) {
    let temp = this.data[a];
    this.data[a] = this.data[b];
    this.data[b] = temp;
  }
}