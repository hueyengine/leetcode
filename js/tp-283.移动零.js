/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let i_0 = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            // Swap the current non-zero element with the element at i_0
            [nums[i], nums[i_0]] = [nums[i_0], nums[i]];
            i_0++; // Move the pointer for the next non-zero element
        }
    }
};

// Example usage:
const nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums); // Output: [1, 3, 12, 0, 0]
const nums2 = [0, 0, 1];
moveZeroes(nums2);
console.log(nums2); // Output: [1, 0, 0]
const nums3 = [1, 2, 3];
moveZeroes(nums3);
console.log(nums3); // Output: [1, 2, 3]
const nums4 = [0, 0, 0];
moveZeroes(nums4);
console.log(nums4); // Output: [0, 0, 0]