const arrayToTree = require('./tree-1-2.数组转二叉树.js');
const printTree = require('./tree-1-2.打印二叉树.js');

/**
 * 方法一：前序遍历，左右子树要交换，并且左右子树内部的所有子树，都要进行左右子树的交换。
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// var invertTree = function(root) {
//     if (!root) return root;

//     const temp = root.left; // 暂存左子树
//     root.left = root.right; // 递归交换右子树
//     root.right = temp; // 递归交换左子树

//     invertTree(root.left); // 交换左子树的子树
//     invertTree(root.right); // 交换右子树的子树

//     return root; // 返回交换后的根节点
// };

/**
 * 方法二：后序遍历，左右子树要交换，并且左右子树内部的所有子树，都要进行左右子树的交换。
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
    if (!root) return root;

    invertTree(root.left); // 交换左子树的子树
    invertTree(root.right); // 交换右子树的子树

    const temp = root.left; // 暂存左子树
    root.left = root.right; // 递归交换右子树
    root.right = temp; // 递归交换左子树

    return root; // 返回交换后的根节点
};

// 测试数据
const arr = [4, 2, 7, 1, 3, 6, 9];
const root = arrayToTree(arr);
// 打印二叉树
console.log(printTree(root));
// 测试 invertTree 函数
console.log(printTree(invertTree(root))); // 输出交换后的二叉树
// // 测试 invertTree 函数的边界情况
// console.log(printTree(invertTree(null))); // 输出 null
// // 测试 invertTree 函数的单节点情况
// const singleNode = arrayToTree([1]);
// console.log(printTree(invertTree(singleNode))); // 输出单节点的二叉树
// // 测试 invertTree 函数的完全二叉树情况
// const completeTree = arrayToTree([1, 2, 3, 4, 5, 6, 7]);
// console.log(printTree(invertTree(completeTree))); // 输出完全二叉树交换后的结果
// // 测试 invertTree 函数的左偏树情况
// const leftSkewedTree = arrayToTree([1, 2, null, 3, null, 4]);
// console.log(printTree(invertTree(leftSkewedTree))); // 输出左偏树交换后的结果
// // 测试 invertTree 函数的右偏树情况
// const rightSkewedTree = arrayToTree([1, null, 2, null, 3, null, 4]);
// console.log(printTree(invertTree(rightSkewedTree))); // 输出右偏树交换后的结果
// // 测试 invertTree 函数的重复节点情况
// const duplicateNodeTree = arrayToTree([1, 1, 2, 2, null, null, 3]);
// console.log(printTree(invertTree(duplicateNodeTree))); // 输出重复节点树交换后的结果
// // 测试 invertTree 函数的多层嵌套情况
// const nestedTree = arrayToTree([1, 2, 3, 4, 5, 6, 7, null, null, null, null, 8]);
// console.log(printTree(invertTree(nestedTree))); // 输出多层嵌套树交换后的结果
// // 测试 invertTree 函数的空树情况
// const emptyTree = arrayToTree([]);
// console.log(printTree(invertTree(emptyTree))); // 输出空树交换后的结果
// // 测试 invertTree 函数的单侧树情况
// const singleSideTree = arrayToTree([1, 2, 3, null, null, 4, 5]);
// console.log(printTree(invertTree(singleSideTree))); // 输出单侧树交换后的结果
// // 测试 invertTree 函数的平衡树情况
// const balancedTree = arrayToTree([1, 2, 3, 4, 5, 6, 7, null, null, null, null]);
// console.log(printTree(invertTree(balancedTree))); // 输出平衡树交换后的结果
// // 测试 invertTree 函数的深度树情况
// const deepTree = arrayToTree([1, 2, 3, 4, 5, null, null, 6, null, null, 7]);
// console.log(printTree(invertTree(deepTree))); // 输出深度树交换后的结果
