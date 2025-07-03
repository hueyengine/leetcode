/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits.length === 0) return [];
    let res = [];

    const phoneMap = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };

    const backtrack = (curStr, index) => {
        if (index > digits.length - 1) {
            res.push(curStr);
            return;
        }

        const letter = phoneMap[digits[index]];
        for (let i = 0; i < letter.length; i++) {
            backtrack(curStr + letter[i], index + 1); // Append the current letter and move to the next digit
        }
    };

    backtrack('', 0); // Start the backtracking process with an empty string and index 0
    return res;
};

// Example usage:
console.log(letterCombinations("23")); // Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]