/**
 * This algorithm implements a two-dimensional search for a specific value in a 2D array.
 * It uses a binary search-like approach to efficiently locate the target value.
 * The key idea is to treat the 2D array as a sorted list and apply binary search principles.
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    const rowsLen = matrix.length;
    const colsLen = matrix[0].length;

    // 第一层二分：定位目标所在行
    let top = 0,
        bottom = rowsLen - 1;
    while (top <= bottom) {
        const mid = Math.floor((top + bottom) / 2);

        if (target < matrix[mid][0]) {
            bottom = mid - 1;
        } else if (target > matrix[mid][colsLen - 1]) {
            top = mid + 1;
        } else {
            top = mid;
            break;
        }
    }

    if (top > bottom) return false;

    const row = matrix[top];
    let left = 0,
        right = colsLen - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (row[mid] === target) {
            return true;
        } else if (row[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return false;
};

// Example usage:
const matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 50],
    [60, 61, 62, 63]
];
const target = 3;
console.log(searchMatrix(matrix, target)); // Output: true
const target2 = 13;
console.log(searchMatrix(matrix, target2)); // Output: false
const target3 = 50;
console.log(searchMatrix(matrix, target3)); // Output: true