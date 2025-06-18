const arrayToTree = require('./tree-1-2.数组转二叉树.js');
const printTree = require('./tree-1-2.打印二叉树.js');

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    const res = [];
    const inOrder = root => {
        if(!root) return;
        inOrder(root.left);
        res.push(root.val);
        inOrder(root.right);
    }

    inOrder(root);

    return res[k - 1];
};

// 测试用例
const tree1 = arrayToTree([3, 1, 4, null, 2]);
const tree2 = arrayToTree([5, 3, 6, 2, 4, null, null, 1]);
console.log('树1的第2小元素:', kthSmallest(tree1, 2)); // 输出: 2
console.log('树2的第3小元素:', kthSmallest(tree2, 3)); // 输出: 3
console.log('tree1');
printTree(tree1); // 打印树结构
console.log('tree2');
printTree(tree2); // 打印树结构
// 输出结果应该是：
// 树1的第2小元素: 2
// 树2的第3小元素: 3
// tree1
// 打印树结构
// tree2
// 打印树结构
// 注意：这里的打印树结构函数需要根据实际情况实现，确保能够正确显示二叉树的结构。
module.exports = kthSmallest;