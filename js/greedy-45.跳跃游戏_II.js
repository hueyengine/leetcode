// /**
//  * 反向贪心算法
//  * 从最后一个位置开始，向前寻找可以跳到当前位置的最小步数
//  * @param {number[]} nums
//  * @return {number}
//  */
// var jump = function(nums) {
//     let position = nums.length - 1;
//     let steps = 0;
    
//     while (position > 0) {
//         for (let i = 0; i < position; i++) {
//             if (i + nums[i] >= position) {
//                 position = i;
//                 steps++;
//                 break;
//             }
//         }
//     }

//     return steps;
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let steps = 0; // 当前跳跃次数
    let curRight = 0; // 当前跳跃能到达的最远位置
    let nextRight = 0; // 下一次跳跃能到达的最远位置

    for (let i = 0; i < nums.length - 1; i++) {
        nextRight = Math.max(nextRight, i + nums[i]); // 更新下一次跳跃能到达的最远位置
        if (i === curRight) { // 如果到达当前跳跃的最远位置
            steps++; // 增加跳跃次数
            curRight = nextRight; // 更新当前跳跃能到达的最远位置
        }
    }
    return steps; // 返回总的跳跃次数
};