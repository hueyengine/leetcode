const arrayToTree = require('./tree-1-2.数组转二叉树.js');
const printTree = require('./tree-1-2.打印二叉树.js');

/**
 * 方法一：前序遍历递归
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (!root) return 0;
    const leftMaxDepth = maxDepth(root.left);
    const rightMaxDepth = maxDepth(root.right);
    return 1 + Math.max(leftMaxDepth, rightMaxDepth);
};

// 测试数据
const arr = [3, 9, 20, null, null, 15, 7];
const root = arrayToTree(arr);
// 打印二叉树
console.log(printTree(root));
// 测试 maxDepth 函数
console.log(maxDepth(root)); // 输出：3
// 测试 maxDepth 函数的边界情况
console.log(maxDepth(null)); // 输出：0
