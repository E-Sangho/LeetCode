var Node = function(val) {
    this.val = val;
    this.next = null; 
};

var MyLinkedList = function() {
    this.head = null;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (this.head === null) {
        return -1;
    }
    
    let count = 0;
    let curNode = this.head;
    
    while (count !== index && curNode.next !== null) {
        curNode = curNode.next;
        ++count;
    }
    
    if (count !== index) {
        return -1;
    }
    
    return curNode.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    const newHead = new Node(val);

    if (this.head !== null) {
        newHead.next = this.head;
    }
    this.head = newHead;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    const newTail = new Node(val);
    
    if (this.head !== null) {
        let curNode = this.head;
        
        while (curNode.next !== null) {
            curNode = curNode.next;
        }
        
        curNode.next = newTail;
        
        return; 
    }
    
    this.head = newTail;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (this.head === null) {
        if (index === 0) {
            this.addAtHead(val);
        }
        return;
    }
    
    if (index === 0) {
        this.addAtHead(val);
    }
    
    let count = 0;
    let curNode = this.head;
    let newNode = new Node(val);
    
    while (count < index - 1 && curNode.next !== null) {
        ++count;
        curNode = curNode.next;
    }
    
    if (count === index - 1) {
        newNode.next = curNode.next;
        curNode.next = newNode;
    }
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (this.head === null) {
        return;
    }
    
    if (index === 0) {
        this.head = this.head.next;
    }
    
    let count = 0;
    let curNode = this.head;
    
    while (count < index - 1 && curNode.next !== null) {
        ++count;
        curNode = curNode.next;
    }
    
    if (count === index - 1) {
        if (curNode.next !== null) {
            curNode.next = curNode.next.next;
        }
    }
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