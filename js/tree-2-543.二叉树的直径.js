const arrayToTree = require('./tree-1-2.数组转二叉树.js');
const printTree = require('./tree-1-2.打印二叉树.js');

var diameterOfBinaryTree = function (root) {
    let ans = 0;
    function dfs(node) {
        if (node === null) {
            return -1; // 对于叶子来说，链长就是 -1+1=0
        }
        const lLen = dfs(node.left) + 1; // 左子树最大链长+1
        const rLen = dfs(node.right) + 1; // 右子树最大链长+1
        ans = Math.max(ans, lLen + rLen); // 两条链拼成路径
        return Math.max(lLen, rLen); // 当前子树最大链长
    }
    dfs(root);
    return ans;
};

// 测试用例
const tree1 = arrayToTree([1, 2, 3, 4, 5]);
const tree2 = arrayToTree([1, 2, 3, null, 4, null, 5]);
const tree3 = arrayToTree([1,2]);
console.log('树1和树2的直径：');
console.log(diameterOfBinaryTree(tree1)); // 3
console.log(diameterOfBinaryTree(tree2)); // 4
console.log(diameterOfBinaryTree(tree3)); // 0
console.log('---tree1---');
printTree(tree1); // 打印树结构
console.log('---tree2---');
printTree(tree2); // 打印树结构
// 以上代码实现了计算二叉树直径的功能，并提供了测试用例和打印树结构的功能。
// 该代码使用递归方法计算二叉树的直径，直径定义为树中任意两个节点之间的最长路径长度。
