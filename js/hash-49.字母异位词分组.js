/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const m = new Map();
    for (const str of strs) {
        // 将字符串排序作为键
        const key = str.split('').sort().join('');
        if (!m.has(key)) {
            m.set(key, []);
        }
        // 将原字符串添加到对应的分组中
        m.get(key).push(str);
    }
    // 返回所有分组的数组
    return Array.from(m.values());
};

// Example usage:
const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
const result = groupAnagrams(input);
console.log(result); // Output: [["eat","tea","ate"],["tan","nat"],["bat"]]