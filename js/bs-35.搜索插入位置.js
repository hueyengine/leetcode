/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let left = 0,
        right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left;
};

// Example usage:
const nums = [1, 3, 5, 6];
const target = 5;
console.log(searchInsert(nums, target)); // Output: 2
const target2 = 2;
console.log(searchInsert(nums, target2)); // Output: 1
const target3 = 7;
console.log(searchInsert(nums, target3)); // Output: 4
const target4 = 0;
console.log(searchInsert(nums, target4)); // Output: 0
const target5 = 6;
console.log(searchInsert(nums, target5)); // Output: 3
