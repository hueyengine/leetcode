/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // 第一步：统计每个元素的出现次数
    const countMap = new Map();
    for (const num of nums) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }
    const maxCount = Math.max(...countMap.values()); // 找到最大出现次数
    
    // 第二步：把出现次数相同的元素，放在同一个桶中
    const buckets = Array.from({ length: maxCount + 1 }, () => []);
    for (const [num, count] of countMap.entries()) {
        buckets[count].push(num);
    }
    
    // 第三步：倒序遍历 buckets，把出现次数前 k 大的元素加入答案
    const ans = [];
    for (let i = maxCount; i > 0 && ans.length < k; i--) {
        if (buckets[i].length > 0) {
            ans.push(...buckets[i]);
        }
    }

    return ans;
    
};

// // Example usage:
// const nums = [1, 1, 1, 2, 2, 3];
// const k = 2;
// console.log(topKFrequent(nums, k)); // Output: [1, 2]
// const nums2 = [1];
// const k2 = 1;
// console.log(topKFrequent(nums2, k2)); // Output: [1]
const nums3 = ['苹果', '香蕉', '苹果', '橘子', '香蕉', '香蕉', '香蕉'];
const k3 = 2;
console.log(topKFrequent(nums3, k3)); // Output: 