/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
  let ans = 0;
  let heap = new Heap();
  
  intervals.sort((a, b) => {
    return a[0] - b[0];
  });

  for (let [sTime, eTime] of intervals) {
    while (sTime >= heap.top()) {
      heap.pop();
    }
    heap.push(eTime); 
    ans = Math.max(ans, heap.size());
  }
  
  return ans;
};

class Heap {
  constructor() {
    this.data = new Array(1).fill(0); 
  }
  
  push(x) {
    this.data.push(x);
    let child =  this.size();
    let parent = Math.floor(child / 2);

    while (child > 1 && this.data[child] < this.data[parent]) {
      this.swap(child, parent);
      child = parent;
      parent = Math.floor(child / 2); 
    }
  }

  top() {
    return this.data[1];
  }
  
  pop() {
    const returnVal = this.data[1]; 
    this.data[1] = this.data[this.size()];
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
    
  size() {
    return this.data.length - 1;
  }
}