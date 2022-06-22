/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let R = grid.length;
    let C = grid[0].length;
    let moveR = [0, 0, 1, -1];
    let moveC = [1, -1, 0, 0];
    let queue = new MyQueue();
    let count = 0;
    
    for (let r = 0; r < R; ++r) {
        for (let c = 0; c < C; ++c) {
            if (grid[r][c] === "1") {
                grid[r][c] === "0";
                queue.push([r, c]);
                BFS();
                ++count;
            }
        }
    }
    
    return count;
    
    function BFS() {
        while (queue.size > 0) {
            let [r, c] = queue.pop();
            
            for (let i = 0; i < 4; ++i) {
                let [newR, newC] = [r + moveR[i], c + moveC[i]];
                if (isInBox(newR, newC)) {
                    if (grid[newR][newC] === "1") {
                        queue.push([newR, newC]);
                        grid[newR][newC] = "0";
                    } 
                }
            }
        }
    }
    
    function isInBox(row, col) {
        if (0 <= row && row < R && 0 <= col && col < C) {
            return true;
        } 
        
        return false;
    }
};

class MyNode {
    constructor(value) {
        this.val = (value === undefined ? null : value);
        this.next = null
    }
}

class MyQueue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;    
    }
    
    push(val) {
        let newNode = new MyNode(val);
            
        if (this.size === 0) {
            this.head = newNode;
            this.tail = newNode;
            ++this.size;    
            return;
        }
        
        this.tail.next = newNode;
        this.tail = newNode;
        ++this.size;    
    }
    
    pop() {
        if (this.size === 0) {
            return false;
        }        
        
        const front = this.head.val;
        
        this.head = this.head.next;
        --this.size;
        
        return front;
    }
}

