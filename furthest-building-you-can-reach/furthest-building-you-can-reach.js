/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */

var furthestBuilding = function(heights, bricks, ladders) {
  const N = heights.length - 1;
  let heap = new Heap();
  let i;
  
  for (i = 0; i < N; ++i) {
    let diff = heights[i + 1] - heights[i];
    if (diff > 0) {
      heap.push(diff);
      bricks -= diff;
      
      if (bricks < 0) {
        while (bricks < 0 && ladders > 0) {
          bricks += heap.pop();
          --ladders;
        }
        
        if (bricks < 0) {
          return i; 
        }
      }
    }
  } 

  return N;
};

class Heap {
  constructor() {
    this.data = new Array(1).fill(0);
  }
  
  push(x) {
    this.data.push(x);  
    let child = this.size(),
        parent = Math.floor(child / 2);
    
    while (child > 1 && this.data[child] > this.data[parent]) {
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
      
      if (this.data[parent] < this.data[left] || this.data[parent] < this.data[right]) {
        if (this.data[right] === undefined || this.data[left] > this.data[right]) {
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
  
  size() {
    return this.data.length - 1;
  }
}