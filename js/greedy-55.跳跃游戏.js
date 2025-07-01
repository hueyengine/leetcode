/**
 * 动态规划解法
 * @param {number[]} nums
 * @return {boolean}
 */
// var canJump = function (nums) {
//     let end = nums.length - 1;

//     for (let i = nums.length - 2; i >= 0; i--) {
//         // 小于 i 的位置如果能到 end 位置，那么一定能到 i 位置，所以这里只需要判断能否到 i 位置即可。
//         if (end - i <= nums[i]) {
//             end = i;
//         }
//     }

//     return end === 0;
// };

/**
 * 贪心解法
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let maxReach = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i > maxReach) {
            return false; // 如果当前索引超过了最大可达位置，则无法到达
        }
        maxReach = Math.max(maxReach, i + nums[i]); // 更新最大可达位置
        if (maxReach >= nums.length - 1) {
            return true; // 如果已经可以到达最后一个位置，返回 true
        }
    }

    return true; // 如果遍历完数组都没有返回 false，则可以到达最后一个位置
}

// Example usage:
console.log(canJump([2, 3, 1, 1, 4])); // true
console.log(canJump([3, 2, 1, 0, 4])); // false