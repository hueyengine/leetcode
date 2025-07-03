/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = [];

    const backtrack = (lRemain, rRemain, str) => {
        if (str.length === 2 * n) {
            res.push(str);
            return;
        }
        if (lRemain > 0) {
            backtrack(lRemain - 1, rRemain, str + '(');
        }
        if (rRemain > lRemain) {
            backtrack(lRemain, rRemain - 1, str + ')');
        }
    };

    backtrack(n, n, '');
    return res;
};

// Example usage:
console.log(generateParenthesis(3)); // Output: ["((()))","(()())","(()(())","()(())","()()()"]
console.log(generateParenthesis(1)); // Output: ["()"]
console.log(generateParenthesis(2)); // Output: ["(())","()()"]