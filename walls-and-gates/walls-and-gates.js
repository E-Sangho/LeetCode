/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
    const M = rooms.length;
    const N = rooms[0].length;
    const moveX = [0, 0, 1, -1];
    const moveY = [1, -1, 0, 0];
    let queue = new MyQueue;
    
    for (let r = 0; r < M; ++r) {
        for (let c = 0; c < N; ++c) {
           if (rooms[r][c] === 0) {
               queue.push([r, c]);
           } 
        }
    }
    
    while (queue.size > 0) {
        let [r, c] = queue.pop();

        for(let i = 0; i < 4; ++i) {
            let [newR, newC] = [r + moveX[i], c + moveY[i]];
            console.log(r, c, newR, newC);
            if (isInBox(newR, newC)) {
                if (rooms[r][c] + 1 < rooms[newR][newC]) {
                    rooms[newR][newC] = rooms[r][c] + 1;
                    queue.push([newR, newC]); 
                }
            }
        }
    }
    
    return rooms;

    function isInBox (m, n) {
        if (0 <= n && n < N && 0 <= m && m < M) {
            return true;
        }
        
        return false;
    }
};


class MyNode {
    constructor(value) {
        this.val = (value === undefined ? null : value);
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
        
        let front = this.head.val;
        
        this.head = this.head.next;
        --this.size;
        return front;
    }
    
    fornt() {
        return this.head.val;
    }
}