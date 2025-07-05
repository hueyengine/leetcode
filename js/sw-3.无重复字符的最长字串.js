/**
 * 首先需要准备两个指针，以及遍历整个字符串
 * 左指针 start 在出现重复字符时更新，右指针 i 随着遍历更新
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let maxLength = 0; // 记录最长无重复子串的长度
    let start = 0; // 滑动窗口的左边界（起始位置）
    const charIndexMap = {}; // 哈希表：记录字符 => 最后出现位置的映射

    for (let i = 0; i < s.length; i++) {
        // i 是右边界，不断向右扩展
        const char = s[i];

        // 检查当前字符是否在窗口内重复出现，charIndexMap[char] >= start 检查该字符的上次出现位置是否在当前窗口内。
        if (charIndexMap[char] !== undefined && charIndexMap[char] >= start) {
            // 如果重复，将左边界移动到重复位置的下一个位置
            start = charIndexMap[char] + 1;
        }

        // 更新当前字符的最后出现位置
        charIndexMap[char] = i;

        // 计算当前窗口长度，并更新最大长度
        maxLength = Math.max(maxLength, i - start + 1);

    }

    return maxLength; // 返回最长无重复子串的长度
};
console.log(lengthOfLongestSubstring('abcabcbb')); // 3
console.log(lengthOfLongestSubstring('bbbbb')); // 1
console.log(lengthOfLongestSubstring('pwwkew')); // 3
console.log(lengthOfLongestSubstring('')); // 0
console.log(lengthOfLongestSubstring('a')); // 1
console.log(lengthOfLongestSubstring('dvdf')); // 3
