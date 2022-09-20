/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
  let heap = new Heap(k);
  for (let row of matrix) {
    for (let col of row) {
      heap.push(col); 
    }
  }
  
  console.log(heap);
    
  return heap.pop();
};

class Heap {
  constructor(k) {
    this.data = new Array(1).fill(0);
    this.k = k
  }
  
  push(x) {
    if (this.size() < this.k) {
      this.data.push(x);
      let child = this.size();
      let parent = Math.floor(child / 2);

      while (child > 1 && this.data[child] > this.data[parent]) {
        this.swap(child, parent);
        child = parent;
        parent = Math.floor(child / 2); 
      }  
    } else {
      if (x < this.data[1]) {
        this.pop();  
        this.push(x);
      }
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

      if (this.data[left] > this.data[parent] || this.data[right] > this.data[parent]) {
        if (this.data[right] === undefined || this.data[right] < this.data[left]) {
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