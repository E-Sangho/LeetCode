var Node = function(val) {
    this.val = val;
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
    if (index > this.size - 1) {
        return -1;
    }
    
    if (0 > index) {
        return -1;
    }
    
    if (this.size === 0) {
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
        this.tail.next = newTail;
        this.tail = newTail;
        ++this.size;
        return;
    }
    
    this.head = newTail;
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
    
    let curNode = this.head;
    let newNode = new Node(val);

    for (let i = 0; i < index - 1; ++i) {
        curNode = curNode.next;
    }
    
    newNode.next = curNode.next;
    curNode.next = newNode;
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
    
    let curNode = this.head;
    
    for (let i = 0; i < index - 1; ++i) {
        curNode = curNode.next;
    }
    
    curNode.next = curNode.next.next;
    if (curNode.next === null) {
        this.tail = curNode;
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