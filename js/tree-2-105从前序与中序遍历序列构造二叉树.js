const arrayToTree = require('./tree-1-2.数组转二叉树.js');
const printTree = require('./tree-1-2.打印二叉树.js');
const TreeNode = require('./tree-1-1.生成二叉树节点.js');

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    if (!inorder.length || !preorder.length) {
        return null;
    }

    // 前序遍历的第一个元素是根节点
    const root = new TreeNode(preorder[0]);
    // 找到根节点在中序遍历中的位置
    const index = inorder.indexOf(preorder[0]);
    // 中序遍历的左子树是根节点左边的部分，右子树是根节点右边的部分
    const leftInorder = inorder.slice(0, index);
    const rightInorder = inorder.slice(index + 1);
    // 前序遍历的左子树是根节点后面的部分，长度与左子树的中序遍历长度相同
    const leftPreorder = preorder.slice(1, 1 + leftInorder.length);
    const rightPreorder = preorder.slice(1 + leftInorder.length);
    // 递归构建左子树和右子树
    root.left = buildTree(leftPreorder, leftInorder);
    root.right = buildTree(rightPreorder, rightInorder);

    return root;
};

// 测试用例
const preorder = [3, 9, 20, 15, 7];
const inorder = [9, 3, 15, 20, 7];
const root = buildTree(preorder, inorder);
console.log('前序遍历与中序遍历构造的二叉树：');
printTree(root);
