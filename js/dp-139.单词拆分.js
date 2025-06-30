/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    const dp = new Array(s.length + 1).fill(false);
    dp[0] = true;
    const wordSet = new Set(wordDict);

    for (let i = 1; i <= s.length; i++) {
        for (j = i - 1; j >= 0; j--) {
            const suffix = s.slice(j, i);
            if (dp[j] && wordSet.has(suffix)) {
                dp[i] = true;
                break; // Found a valid word, no need to check further
            }
        }
    }

    return dp[s.length];
};

// Example usage:
const s = "leetcode";
const wordDict = ["leet", "code"];
console.log(wordBreak(s, wordDict)); // Output: true (s can be segmented as "leet code")