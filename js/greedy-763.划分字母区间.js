/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
    const mapPosition = {};
    for (let i = 0; i < s.length; i++) {
        mapPosition[s[i]] = i; // 记录每个字符最后出现的位置
    }

    let res = [];
    let start = 0; // 当前分区的起始位置
    let scannedCharMaxPosition = 0; // 当前分区内扫描到的字符的最大位置

    for (let i = 0; i < s.length; i++) {
        scannedCharMaxPosition = Math.max(scannedCharMaxPosition, mapPosition[s[i]]); // 更新当前分区内扫描到的字符的最大位置

        if (i === scannedCharMaxPosition) {
            // 如果当前索引等于最大位置，说明可以切分
            res.push(i - start + 1); // 计算当前分区的长度并添加到结果中
            start = i + 1; // 更新下一个分区的起始位置
        }
    }

    return res; // 返回所有分区的长度
};

// Example usage:
console.log(partitionLabels('ababcbacadefegdehijhklij')); // [9, 7, 8]
