/**
 * @param {number[]} nums
 * @return {number}
 */
// var longestConsecutive = function(nums) {
//     if (nums.length === 0) return 0; // 如果数组为空，返回 0
//     let count = 1, max = 1;
//     nums.sort((a, b) => a - b); // 对数组进行排序
//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] === nums[i - 1]) {
//             continue; // 跳过重复的数字
//         } else if (nums[i] === nums[i - 1] + 1) {
//             count++; // 如果是连续的数字，计数加一
//         } else {
//             count = 1; // 重置计数
//         }
//         max = Math.max(max, count); // 更新最大连续长度
//     }

//     return max; // 返回最大连续长度
// };

var longestConsecutive = function(nums) {
    
};