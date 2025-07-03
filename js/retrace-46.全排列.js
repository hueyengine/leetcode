/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = [];
    let path = [];
    let used = new Array(nums.length).fill(false); // 用于标记数字是否被使用过

    const backtrack = (path) => {
        if (path.length === nums.length) {
            res.push(path.slice()); // 如果路径长度等于数字长度，说明找到一个完整的排列
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[nums[i]]) continue; // 如果数字已经被使用过，跳过
            used[nums[i]] = true; // 标记数字为已使用
            path.push(nums[i]); // 将数字添加到当前路径
            backtrack(path); // 递归调用
            path.pop(); // 回溯，移除最后一个数字
            used[nums[i]] = false; // 标记数字为未使用
        }
    }

    backtrack(path); // 开始回溯
    return res; // 返回所有排列结果
};

// Example usage:
console.log(permute([1, 2, 3])); // [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]