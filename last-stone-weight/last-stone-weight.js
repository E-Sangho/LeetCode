/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  let heap = new Heap();

  for (let stone of stones) {
    heap.push(stone);
  }
  
  console.log(heap);
  
  while (heap.size() > 1) {
    let first = heap.pop(),
        second = heap.pop();
    
    if (first !== second) {
      heap.push(first - second);
    } 
  }
    
  if (heap.size() === 0) {
    return 0;
  }
  
  return heap.pop();
};

class Heap {
  constructor() {
    this.data = new Array(1).fill(0);
  }
  
  push(x) {
    this.data.push(x);
    let child = this.data.length - 1;
    let parent = Math.floor(child / 2);

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
    const leafBoundary = Math.floor((this.data.length - 1) / 2);
    
    while (parent <= leafBoundary) {
      let left = parent * 2,
          right = parent * 2 + 1;
      if (this.data[parent] < this.data[left] || this.data[parent] < this.data[right]) {
        if (this.data[right] === undefined || this.data[left] > this.data[right]) {
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
    
    return returnVal;
  }
  
  size() {
    return this.data.length - 1;
  }
  
  swap(a, b) {
    let temp = this.data[a];
    this.data[a] = this.data[b];
    this.data[b] = temp;
  }
}