const arrayToTree = require('./tree-1-2.数组转二叉树.js');
const printTree = require('./tree-1-2.打印二叉树.js');
const TreeNode = require('./tree-1-1.生成二叉树节点.js');

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
    let maxSum = Number.MIN_SAFE_INTEGER; // 最大路径和

    const dfs = (root) => {
        if (!root) return 0; // 遍历到 null 收益为 0

        const left = dfs(root.left); // 左子树提供的最大路径和
        const right = dfs(root.right); // 右子树提供的最大路径和

        const innerMaxSum = left + root.val + right; // 当前子树内部的最大路径和
        maxSum = Math.max(maxSum, innerMaxSum); // 挑战最大记录

        const outputMaxSum = root.val + Math.max(0, left, right); // 当前子树对外提供的最大和

        return outputMaxSum;
    };

    dfs(root); // 递归的入口

    return maxSum;
};

// 测试用例
const arr = [-10, 9, 20, null, null, 15, 7];
const root = arrayToTree(arr);
printTree(root);
console.log(maxPathSum(root)); // 输出：42
