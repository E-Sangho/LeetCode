/**
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.queue = new MyQueue(size); 
    
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    this.queue.push(val);
    return this.queue.avg();
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */

class QueueNode {
    constructor(val) {
        this.val = (val === undefined ? null : val);
        this.next = null;
    }
}

class MyQueue {
    constructor(k) {
        this.head = null;
        this.tail = null;
        this.size = 0;
        this.maxSize = k
    }
    
    push(val) {
        let newNode = new QueueNode(val);
        if (this.size === this.maxSize) {
            this.head = this.head.next;
            this.tail.next = newNode;
            this.tail = newNode;    
            return;
        }    
        
        if (this.size === 0) {
            this.head = newNode;
            this.tail = newNode;
            ++this.size;
            return;
        }
        
        this.tail.next = newNode;
        this.tail = newNode;
        ++this.size;
        return;
    }
    
    avg() {
        let avg = 0;
        let curNode = this.head;
        
        while (curNode !== null) {
            avg += curNode.val;
            curNode = curNode.next; 
        }
        
        return avg / this.size;
    }
}