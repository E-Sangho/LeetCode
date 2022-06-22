/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    let queue = new MyQueue();
    let count = 0;
    let visited = new Set();
    let dead = new Set(deadends);
    
    queue.push("0000");    
    visited.add("0000");
    
    while (queue.size > 0) {
        let curSize = queue.size;
        for (let i = 0; i < curSize; ++i) {
            let front = queue.pop();
            
            if (front === target) {
                return count;
            }
            
            if (!dead.has(front)) {
                for (let j = 0; j < 4; ++j) {
                    let newNumber = front.slice(0, j) + 
                                    String(((parseInt(front[j]) + 1) % 10)) + 
                                    front.slice(j + 1);

                    if (!visited.has(newNumber)) {
                        queue.push(String(newNumber));
                        visited.add(newNumber);
                    }

                    if (parseInt(front[j]) - 1 < 0) {
                        newNumber = front.slice(0, j) + 
                                    String(((parseInt(front[j]) + 9) % 10)) + 
                                    front.slice(j + 1);
                    } else {
                        newNumber = front.slice(0, j) + 
                                    String(((parseInt(front[j]) - 1) % 10)) + 
                                    front.slice(j + 1);
                    }

                    if (!visited.has(newNumber)) {
                        queue.push(String(newNumber));
                        visited.add(newNumber);
                    }
                }
            }

        }     
        ++count;
    }
    
    return -1;
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
}