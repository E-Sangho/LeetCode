
var MinStack = function() {
    this.data = [];
    this.min = Number.MAX_SAFE_INTEGER;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.data.push(val); 
    
    if (this.min > val) {
        this.min = val;
    } 
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.data.length === 0) {
        return;
    } 
    
    const popVal = this.data.pop();
    
    if (this.min === popVal) {
        this.min = Number.MAX_SAFE_INTEGER;
        for (let i = 0; i < this.data.length; ++i) {
            if (this.min > this.data[i]) {
                this.min = this.data[i];
            } 
        } 
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.data[this.data.length - 1]; 
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */