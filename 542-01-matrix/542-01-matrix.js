/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
  return BFS(mat);
};

function BFS(mat) {
  const rMax = mat.length,
        cMax = mat[0].length;
  const neighbor = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  let dp = [...new Array(rMax)].map(() => new Array(cMax).fill(Number.MAX_SAFE_INTEGER));
  let queue = new MyQueue();
  
  for (let r = 0; r < rMax; ++r) {
    for (let c = 0; c < cMax; ++c) {
      if (mat[r][c] === 0) {
        dp[r][c] = 0;
        queue.push([r, c]);       
      }
    }
  }
  
  while (queue.size > 0) {
    let [r, c] = queue.pop();
    
    for (let i = 0; i < 4; ++i) {
      let [newR, newC] = [r + neighbor[i][0], c + neighbor[i][1]];
    
      if (InTheBox(newR, newC)) {
        if (dp[newR][newC] > dp[r][c] + 1) {
          dp[newR][newC] = dp[r][c] + 1;
          queue.push([newR, newC]);
        }
      }
    }
    
  }

  return dp;
  
  function InTheBox (r, c) {
    if (0 <= r && r < rMax && 0 <= c && c < cMax) {
      return true;
    }
    
    return false;
  }
}

class MyNode {
    constructor(val) {
        this.val = (val === undefined ? null : val);
        this.next = null;
    }
}

class MyQueue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    push(val) {
        let newNode =  new MyNode(val);
        if (this.size === 0) {
            this.head = newNode;
            this.tail = newNode;
            ++this.size;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
            ++this.size;
        }
    }

    pop() {
        if (this.size === 0) {
            return;
        }

        let front = this.head.val;
        this.head = this.head.next;
        if (this.head === null) {
            this.tail = null;
        }
        --this.size;
        return front;
    }

    font() {
        return this.head;
    }

    back() {
        return this.tail;
    }

    empty() {
        if (this.size === 0) {
            return true;
        }
        return false;
    }

    size() {
        return this.size;
    }
}