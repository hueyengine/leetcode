const arrayToTree = require('./tree-1-2.数组转二叉树.js');
const printTree = require('./tree-1-2.打印二叉树.js');

/**
 * 方法一：先递归右子树，再递归左子树，当某个深度首次到达时，对应的节点就在右视图中
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
    const res = [];
    function dfs(root, depth) {
        if (!root) return;
        if (depth === res.length) {
            res.push(root.val);
        }
        // 先遍历右子树，再遍历左子树
        dfs(root.right, depth + 1);
        dfs(root.left, depth + 1);
    }
    dfs(root, 0);
    return res;
};

/**
 * 方法二：层序遍历，记录每层的最后一个节点
 * @param {TreeNode} root
 * @return {number[]}
 */
rightSizeView = function (root) {
    const res = [],
        queue = [];
    if (!root) return res;
    queue.push(root);
    while (queue.length) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            if (i === size - 1) {
                res.push(node.val); // 只记录每层的最后一个节点
            }
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
    return res;
};

// 测试用例
const tree1 = arrayToTree([1, 2, 3, null, 5, null, 4]);
const tree2 = arrayToTree([1, null, 2, null, 3, null, 4, null, 5]);
console.log('树1的右视图:', rightSideView(tree1)); // 输出: [1, 3, 4]
console.log('树2的右视图:', rightSideView(tree2)); // 输出: [1, 2, 3, 4, 5]
console.log('tree1');
printTree(tree1); // 打印树结构
console.log('tree2');
printTree(tree2); // 打印树结构
// 输出结果应该是：
// 树1的右视图: [1, 3, 4]
// 树2的右视图: [1, 2, 3, 4, 5]
// tree1
// 打印树结构
// tree2
// 打印树结构
// 注意：这里的打印树结构函数需要根据实际情况实现，确保能够正确显示二叉树的结构。
module.exports = rightSideView;
