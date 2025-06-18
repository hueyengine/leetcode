function printTree(root) {
    if (!root) return '';

    // 计算树的最大深度，用于确定缩进量
    function getDepth(node) {
        if (!node) return 0;
        return Math.max(getDepth(node.left), getDepth(node.right)) + 1;
    }
    const depth = getDepth(root);

    // 生成每一层的打印数组
    const result = [];
    for (let i = 0; i < depth; i++) {
        result.push([]);
    }

    // 递归填充每一层的节点值
    function fillNodes(node, level, pos) {
        if (!node) return;
        result[level][pos] = node.val;
        fillNodes(node.left, level + 1, pos - Math.pow(2, depth - level - 2));
        fillNodes(node.right, level + 1, pos + Math.pow(2, depth - level - 2));
    }
    fillNodes(root, 0, Math.pow(2, depth - 1) - 1);

    // 格式化输出每一层
    let output = '';
    for (let i = 0; i < depth; i++) {
        const line = result[i].map((val) => (val !== undefined ? val : '')).join(' ');
        // 去除行首尾的空字符
        output += line.trim() + '\n';
    }
    return output;
}

module.exports = printTree;
