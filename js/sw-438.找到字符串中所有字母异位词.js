/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    let ans = [];
    let sLen = s.length,
        pLen = p.length;
    let sCount = Array(26).fill(0);
    let pCount = Array(26).fill(0);
    for (let i = 0; i < pLen; i++) {
        sCount[s[i].charCodeAt() - 'a'.charCodeAt()]++; // 统计 s 的长为 len(p) 的子串 s' 的每种字母的出现次数
        pCount[p[i].charCodeAt() - 'a'.charCodeAt()]++; // 统计 p 的每种字母的出现次数
    }

    if (sLen < pLen) return ans;

    if (sCount.toString() === pCount.toString()) {
        ans.push(0);
    }

    for (let i = 0; i < sLen - pLen; i++) {
        sCount[s[i].charCodeAt() - 'a'.charCodeAt()]--; // 移除窗口左侧字符的频率
        sCount[s[i + pLen].charCodeAt() - 'a'.charCodeAt()]++; // 添加窗口右侧新字符的频率

        if (sCount.toString() === pCount.toString()) {
            ans.push(i + 1);
        }
    }

    return ans;
};

// console.log('a'.charCodeAt()); // 97
// console.log('z'.charCodeAt()); // 122
// console.log('z'.charCodeAt() - 'a'.charCodeAt()); // 25
// console.log('a'.charCodeAt() - 'a'.charCodeAt()); // 0

// Example usage:
console.log(findAnagrams('cbaebabacd', 'abc')); // Output: [0, 6]
console.log(findAnagrams('abab', 'ab')); // Output: [0, 1, 2] (since "ab" appears at indices 0, 1, and 2)
