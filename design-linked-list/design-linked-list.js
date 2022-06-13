var Node = function(val) {
    this.val = val;
    this.prev =null;
    this.next = null; 
};

var MyLinkedList = function() {
    this.head = null;
    this.tail = null;
    this.size = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (index > this.size - 1 || 0 > index || this.size === 0) {
        return -1;
    }
    
    let curNode = this.head;
    
    for (let i = 0; i < index; ++i) {
        curNode = curNode.next;
    }
    
    return curNode.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    const newHead = new Node(val);
    
    if (this.size !== 0) {
        newHead.next = this.head; 
        this.head.prev = newHead;
    } else {
        this.tail = newHead;
    }
    
    this.head = newHead;
    ++this.size;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    const newTail = new Node(val);
    
    if (this.size !== 0) {
        newTail.prev = this.tail;
        this.tail.next = newTail;
    } else {
        this.head = newTail;
    }
    
    this.tail = newTail;
    ++this.size;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index > this.size || 0 > index) {
        return;
    }
    
    if (index === 0) {
        this.addAtHead(val);
        return;
    }
    
    if (index === this.size) {
        this.addAtTail(val);
        return;
    }
    
    let nextNode = this.head;
    let newNode = new Node(val);

    for (let i = 0; i < index; ++i) {
        nextNode = nextNode.next;
    }
    
    let prevNode = nextNode.prev;
    
    newNode.next = nextNode;
    newNode.prev = prevNode;
    nextNode.prev = newNode;
    prevNode.next = newNode;
    ++this.size;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index > this.size - 1 || 0 > index) {
        return;
    }
    
    if (index === 0) {
        this.head = this.head.next;
        --this.size;
        return;
    }
    
    let deletedNode = this.head;
    
    for (let i = 0; i < index; ++i) {
        deletedNode = deletedNode.next;
    }
    
    if (deletedNode.next === null) {
        this.tail = deletedNode.prev;
        this.tail.next = null;
    } else {
        let prevNode = deletedNode.prev;
        let nextNode = deletedNode.next;
        
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
    }
        --this.size; 
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */