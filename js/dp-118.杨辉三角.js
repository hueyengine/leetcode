/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    const triangle = [];
    for (let i = 0; i < numRows; i++) {
        const row = Array(i + 1).fill(1); // 初始化当前行，所有元素为1
        for (let j = 1; j < row.length - 1; j++) {
            row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j]; // 当前行的非边界元素等于上一行的两个相邻元素之和
        }
        triangle.push(row); // 将当前行添加到三角形中
    }

    return triangle; // 返回生成的杨辉三角
};

// Example usage:
console.log(generate(5)); // 输出: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]
