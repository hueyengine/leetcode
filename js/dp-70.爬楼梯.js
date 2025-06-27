/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const dp = Array(n + 1).fill(0);
    dp[0] = 1; // 0阶梯有1种方法（不动）
    dp[1] = 1; // 1阶梯有1种方法（一步到达）
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]; // 当前阶梯的方式等于前一个阶梯和前两个阶梯的方式之和
    }
    return dp[n]; // 返回到达n阶梯的方法数
};