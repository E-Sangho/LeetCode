/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  let counter = new Map();    
  let heap = new Heap();
  let ans = [];
  
  for (let num of nums) {
    if (counter.has(num)) {
      counter.set(num, counter.get(num) + 1);
    } else {
      counter.set(num, 1);
    }
  }
  
  for (let [key, val] of counter) {
    heap.push([val, key]);
  }
  
  for (let i = 0; i < k; ++i) {
    ans.push(heap.pop());
  }
  
  return ans;
};

class Heap {
  constructor() {
    this.data = new Array(1).fill(0);
  }
  
  push(x) {
    this.data.push(x);
    let child = this.data.length - 1,
        parent = Math.floor(child / 2); 
    
    while (child > 1 && this.data[child][0] > this.data[parent][0]) {
      this.swap(child, parent); 
      child = parent;
      parent = Math.floor(child / 2);
    }
  }
  
  pop() {
    let returnVal = this.data[1];
    this.data[1] = this.data.at(-1);
    this.data.pop();
    let lastIndex = this.data.length - 1;
    
    let parent = 1;
    
    while (parent <= Math.floor(lastIndex / 2)) {
      let left = parent * 2,
          right = parent * 2 + 1;
      
      if (this.data[left][0] > this.data[parent][0] || 
          (this.data[right] !== undefined && 
           this.data[right][0] > this.data[parent][0])
      ) {
        if (this.data[right] === undefined || this.data[right][0] < this.data[left][0]) {
          this.swap(parent, left);
          parent = left;    
        } else {
          this.swap(parent, right);
          parent = right;
        }
      } else {
        break;
      }
    }
    
    return returnVal[1];
  }

  swap(a, b) {
    let temp = this.data[a];
    this.data[a] = this.data[b];
    this.data[b] = temp;  
  }
}