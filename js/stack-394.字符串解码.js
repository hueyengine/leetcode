/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let numStack = [], strStack = [];
    let num = 0; // 用于计算倍数
    let result = '';

    for (let char of s) {
        if (!isNaN(char)) {
            num = num * 10 + parseInt(char); // 处理多位数字
        } else if (char === '[') {
            numStack.push(num);
            num = 0; // 重置数字
            strStack.push(result);
            result = ''; // 重置当前字符串
        } else if (char === ']') {
            let repeatCount = numStack.pop(); // 获取重复次数
            let lastStr = strStack.pop(); // 获取上一个字符串
            result = lastStr + result.repeat(repeatCount); // 重复当前字符串并拼接
        } else {
            result += char; // 累加当前字符到结果字符串
        }
    }

    return result; // 返回最终解码后的字符串
};

// Example usage:
console.log(decodeString("3[a]2[bc]")); // "aaabcbc"
console.log(decodeString("3[a2[c]]")); // "accaccacc"
console.log(decodeString("2[abc]3[cd]ef")); // "abcabcddcdef"