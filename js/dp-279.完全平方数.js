/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
    const f = Array(n + 1).fill(0);
    f[0] = 0; // 0的完全平方数个数为 0
    for (let i = 1; i <= n; i++) {
        f[i] = Infinity; // 初始化为无穷大
        for (let j = 1; j * j <= i; j++) {
            f[i] = Math.min(f[i], f[i - j * j] + 1); // 更新最小的完全平方数个数
        }
    }
    return f[n]; // 返回n的完全平方数个数
};

// Example usage:
console.log(numSquares(12)); // Output: 3 (4 + 4 + 4)
console.log(numSquares(13)); // Output: 2 (4 + 9)
