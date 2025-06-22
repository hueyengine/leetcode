const arrayToTree = require('./tree-1-2.数组转二叉树.js');
const printTree = require('./tree-1-2.打印二叉树.js');

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
    const list = [];

    const preorderTraversal = (root) => {
        if(root) {
            list.push(root);
            preorderTraversal(root.left);
            preorderTraversal(root.right);
        }
    }

    preorderTraversal(root);

    const len = list.length;
    for(let i = 1; i < len; i++) {
        const pre = list[i - 1], cur = list[i];
        pre.left = null;
        pre.right = cur;
    }
};

// 测试用例
const arr = [1, 2, 5, 3, 4, null, 6];
const treeRoot = arrayToTree(arr);
printTree(treeRoot);
flatten(treeRoot);
console.log('------------------');
printTree(treeRoot);
