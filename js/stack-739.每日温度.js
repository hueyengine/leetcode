/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const res = new Array(temperatures.length).fill(0);

    const stack = []; // Stack to keep track of indices of temperatures

    for (let i = temperatures.length - 1; i >= 0; i--) {
        while (stack.length && temperatures[i] >= temperatures[stack[stack.length - 1]]) {
            stack.pop(); // Pop indices of temperatures that are not warmer
        }
        if (stack.length > 0) {
            res[i] = stack[stack.length - 1] - i; // Calculate the number of days until a warmer temperature
        }
        stack.push(i); // Push the current index onto the stack
    }

    return res; // Return the result array
};

// Example usage:
const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(dailyTemperatures(temperatures)); // Output: [1, 1, 4, 2, 1, 1, 0, 0, 0]
