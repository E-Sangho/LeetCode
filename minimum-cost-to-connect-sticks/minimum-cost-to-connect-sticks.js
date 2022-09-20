/**
 * @param {number[]} sticks
 * @return {number}
 */
var connectSticks = function(sticks) {
  let heap = new Heap();
  let ans = 0;

  for (let stick of sticks) {
    heap.push(stick);
  }  
  
  while (heap.size() > 1) {
    let a = heap.pop(),
        b = heap.pop();
    ans += (a + b);
    heap.push(a + b); 
  }
  
  return ans; 
};

class Heap {
  constructor() {
    this.data = new Array(1).fill(0);
  }
  
  push(x) {
    this.data.push(x);
    let child = this.size();
    let parent = Math.floor(child / 2);

    while (child > 1 && this.data[child] < this.data[parent]) {
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

      if (this.data[left] < this.data[parent] || this.data[right] < this.data[parent]) {
        if (this.data[right] === undefined || this.data[left] < this.data[right]) {
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
  
  swap(a, b) {
    let temp = this.data[a];
    this.data[a] = this.data[b];  
    this.data[b] = temp;
  }
  
  compare(x, y) {
    if (x < y) {
      return true;
    } 
    
    return false;
  }
    
  size() {
    return this.data.length - 1;
  }
}