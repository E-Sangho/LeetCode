/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
  const n = mat.length;
  let heap = new Heap();
  let ans = [];
    
  for (let i = 0; i < n; ++i) {
    let count = 0;
    for (let col of mat[i]) {
      if (col === 1) {
        ++count;
      }  
    }
    heap.push([count, i]);
  }
  
  console.log(heap);
  
  for (let i = 0; i < k; ++i) {
    ans.push(heap.pop()[1]);
    console.log(heap);
  }
  
  return ans;
};

class Heap {
  constructor() {
    this.data = new Array(1).fill(0);
  }
  
  push(x) {
    this.data.push(x);
    let child = this.data.length - 1;
    let parent = Math.floor(child / 2);

    while (child > 1 && this.leftIsSmall(child, parent)) {
      this.swap(child, parent);
      child = parent;
      parent = Math.floor(child / 2);  
    }
  }
  
  pop() {
    const returnVal = this.data[1];
    this.data[1] = this.data.at(-1).slice();
    this.data.pop();
    
    let parent = 1;
    const leafBoundary = Math.floor((this.data.length - 1) / 2);

    while (parent <= leafBoundary) {
      let left = parent * 2,
          right = parent * 2 + 1;
      if (this.leftIsSmall(left, parent) || (this.data[right] !== undefined && this.leftIsSmall(right, parent))) {
        if (this.data[right] === undefined || this.leftIsSmall(left, right)) {
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
    
  leftIsSmall(a, b) {
    if (this.data[a][0] < this.data[b][0]) {
      return true;
    }
    
    if (this.data[a][0] === this.data[b][0] && this.data[a][1] < this.data[b][1]) {
      return true;
    }
    
    return false;
  }
  
  swap(a, b) {
    let temp = this.data[a].slice();
    this.data[a] = this.data[b].slice();
    this.data[b] = temp;
  }
}