var MinStack = function () {
    this.stack = [];
    this.minStack = [Number.MAX_SAFE_INTEGER]; // Initialize with a large number
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    this.stack.push(val);
    this.minStack.push(Math.min(val, this.minStack[this.minStack.length - 1]));
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.stack.pop();
    this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.minStack[this.minStack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

// Example usage:
var obj = new MinStack();
obj.push(-2);
obj.push(0);
obj.push(-3);
console.log(obj.getMin()); // Returns -3
obj.pop();
console.log(obj.top());    // Returns 0
console.log(obj.getMin()); // Returns -2
obj.push(-1);
console.log(obj.getMin()); // Returns -2
obj.pop();
console.log(obj.top());    // Returns -1
console.log(obj.getMin()); // Returns -2

