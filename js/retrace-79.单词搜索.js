/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    const m = board.length;
    const n = board[0].length;
    const visited = Array.from({ length: m }, () => Array(n).fill(false));

    const backtrack = (row, col, i) => {
        if (i === word.length) {
            return true;
        }

        if (row < 0 || row >= m || col < 0 || col >= n) {
            return false;
        }

        if (visited[row][col] || board[row][col] !== word[i]) {
            return false;
        }

        visited[row][col] = true;
        const found =
            backtrack(row + 1, col, i + 1) ||
            backtrack(row - 1, col, i + 1) ||
            backtrack(row, col + 1, i + 1) ||
            backtrack(row, col - 1, i + 1);

        if (found) {
            return true;
        }

        visited[row][col] = false; // 回溯：撤销标记，允许其他路径使用该单元格
        return false;
    };

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === word[0] && backtrack(i, j, 0)) {
                return true;
            }
        }
    }

    return false;
};

// Example usage:
console.log(
    exist(
        [
            ['A', 'B', 'C', 'E'],
            ['S', 'F', 'C', 'S'],
            ['A', 'D', 'E', 'E'],
        ],
        'ABCB',
    ),
); // Output: false
