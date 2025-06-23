/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const start = lowerBound(nums, target);
    if (start === nums.length || nums[start] !== target) {
        return [-1, -1];
    }

    const end = lowerBound(nums, target + 1) - 1;

    return [start, end];
};

const lowerBound = (nums, target) => {
    let left = 0, right = nums.length - 1; // 闭区间 [left, right]
    let targetIndex = 0;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left
};

// Example usage:
const nums = [5, 7, 7, 8, 8, 10];
const target = 8;
console.log(searchRange(nums, target)); // Output: [3, 4]
const target2 = 6;
console.log(searchRange(nums, target2)); // Output: [-1, -1]
const target3 = 5;
console.log(searchRange(nums, target3)); // Output: [0, 0]
const target4 = 10;
console.log(searchRange(nums, target4)); // Output: [5, 5]
const target5 = 7;
console.log(searchRange(nums, target5)); // Output: [1, 2]
const target6 = 11;
console.log(searchRange(nums, target6)); // Output: [-1, -1]