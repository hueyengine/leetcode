const arrayToTree = require('./tree-1-2.数组转二叉树.js');
const printTree = require('./tree-1-2.打印二叉树.js');
const TreeNode = require('./tree-1-1.生成二叉树节点.js');

/*
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
    if (!root) return 0;

    const rootSum = (root, targetSum) => {
        let ret = 0;

        if (!root) return 0;

        const val = root.val;

        if (val === targetSum) {
            ret = 1;
        }

        ret += rootSum(root.left, targetSum - val);
        ret += rootSum(root.right, targetSum - val);

        return ret;
    };

    let res = rootSum(root, targetSum);
    res += pathSum(root.left, targetSum);
    res += pathSum(root.right, targetSum);

    return res;
};

// 测试用例
const arr = [10, 5, -3, 3, 2, null, 11, 3, -2, null, 1];
const targetSum = 8;
const root = arrayToTree(arr);
printTree(root);
console.log(pathSum(root, targetSum)); // 输出：3
