/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  let heap = new Heap();
  
  for (let num of nums) {
    heap.push(num);
  } 
  
  console.log(heap);

  for (let i = 1; i < k; ++i) {
    heap.pop();
  }
  
  return heap.pop();
};

class Heap {
  constructor () {
    this.data = new Array(1);  
    this.data[0] = 0;
  }
  
  push(x) {
    this.data.push(x);  
    let child = this.data.length - 1;
    let parent = Math.floor(child / 2);    
    
    while (child > 1 && this.data[child] > this.data[parent]) {
      let temp = this.data[child];
      this.data[child] = this.data[parent];
      this.data[parent] = temp;
      child = parent;
      parent = Math.floor(child / 2);
    }
  }
  
  pop() {
    let lastIndex = this.data.length - 1;  
    let removeVal = this.data[1];
    this.data[1] = this.data[lastIndex];
    this.data.pop();
    lastIndex -= 1;
    
    let parent = 1;
    
    while (parent <= Math.floor(lastIndex / 2)) {
      let left = parent * 2,
          right = (parent * 2) + 1;
      if (this.data[parent] < this.data[left] || this.data[parent] < this.data[right]) {
        if (this.data[right] === undefined || this.data[right] < this.data[left]) {
          let temp = this.data[parent];
          this.data[parent] = this.data[left];
          this.data[left] = temp;
          parent = left;
        } else {
          let temp = this.data[parent];
          this.data[parent] = this.data[right];
          this.data[right] = temp;
          parent = right;
        }
      } else {
        break;
      }
    }
    
    return removeVal;
  }
}