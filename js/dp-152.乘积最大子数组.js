/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let res = nums[0];
    let preMin = preMax = nums[0];
    let temp1 = 0, temp2 = 0;

    for (let i = 1; i < nums.length; i++) {
        temp1 = preMax * nums[i];
        temp2 = preMin * nums[i];
        preMax = Math.max(nums[i], temp1, temp2);
        preMin = Math.min(nums[i], temp1, temp2);
        res = Math.max(res, preMax);
    }

    return res;
};

// Example usage:
console.log(maxProduct([2, 3, -2, 4])); // Output: 6
console.log(maxProduct([-2, 0, -1])); // Output: 0