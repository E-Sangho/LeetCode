
var MinStack = function() {
    this.stack= [];
    this.minStack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    if (this.minStack.length === 0) {
        this.minStack.push([val, 1]);
        return;
    }
    if (this.minStack.at(-1)[0] >= val) {
        if (this.minStack.at(-1)[0] === val) {
            let [val, times] = this.minStack.at(-1);
            this.minStack[this.minStack.length - 1] = [val, times + 1]; 
            return;
        }
        this.minStack.push([val, 1]);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let topVal = this.stack.pop();
    if (topVal === this.minStack.at(-1)[0]) {
        let [val, times] = this.minStack.at(-1);
        if (times === 1) {
            this.minStack.pop();
            return;
        }
        this.minStack[this.minStack.length - 1] = [val, times - 1];
    } 
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack.at(-1);
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack.at(-1)[0];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */