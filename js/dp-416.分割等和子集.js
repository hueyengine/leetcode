/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const n = nums.length;
    if (n < 2) return false;
    
    let sum = 0, maxNum = 0;
    for (let num of nums) {
        sum += num;
        maxNum = Math.max(maxNum, num);
    }

    const target = sum / 2;
    if (sum % 2 !== 0 || maxNum > target) return false;

    const dp = new Array(n).fill(0).map(() => new Array(target + 1).fill(false));
    for (let i = 0; i < n; i++) {
        dp[i][0] = true; // 0 sum is always achievable
    }
    dp[0][nums[0]] = true; // first number can form its own subset

    for (let i = 1; i < n; i++) {
        const num = nums[i];
        for (let j = 0; j <= target; j++) {
            if (j >= num) {
                dp[i][j] = dp[i - 1][j] || dp[i - 1][j - num];
            } else {
                dp[i][j] = dp[i - 1][j]; // can't include current number
            }
        }
    }

    return dp[n - 1][target];
};

// Example usage:
console.log(canPartition([1, 5, 11, 5])); // true
console.log(canPartition([1, 2, 3, 5])); // false
console.log(canPartition([1, 2, 5])); // false