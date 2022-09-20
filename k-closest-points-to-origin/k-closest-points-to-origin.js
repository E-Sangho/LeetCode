/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
  let heap = new Heap(k);
  let ans = [];

  for (let [x, y] of points) {
    heap.push([x * x + y * y, x, y]);
  }
  
  while (heap.size() > 0) {
    let [_, x, y] = heap.pop();
    ans.push([x, y]);
  }
    
  return ans;
};

class Heap {
  constructor(k) {
    this.data = new Array(1).fill(0);
    this.k = k;
  }
  
  push(x) { // x:= [distance, x, y]
    if (this.size() < this.k) {
      this.data.push(x);
      let child = this.size();
      let parent = Math.floor(child / 2);

      while (child > 1 && this.data[child][0] > this.data[parent][0]) {
        this.swap(child, parent);     
        child = parent;
        parent = Math.floor(child / 2);
      } 
    } else {
      if (x[0] < this.data[1][0]) {
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
      if (this.data[left][0] > this.data[parent][0] || 
          (this.data[right] !== undefined && this.data[right][0] > this.data[parent][0])
      ) {
        if (this.data[right] === undefined || this.data[left][0] > this.data[right][0]) {
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
    let temp = this.data[a].slice();
    this.data[a] = this.data[b].slice();
    this.data[b] = temp;
  }
  
  size() {
    return this.data.length - 1;
  }
}