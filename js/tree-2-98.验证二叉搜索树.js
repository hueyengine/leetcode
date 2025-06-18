const arrayToTree = require('./tree-1-2.数组转二叉树.js');
const printTree = require('./tree-1-2.打印二叉树.js');

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    const helper = (root, lower, upper) => {
        if (!root) return true; // 如果当前节点是null，返回true

        if (root.val <= lower || root.val >= upper) return false; // 如果当前节点的值不在合法范围内，返回false

        return helper(root.left, lower, root.val) && helper(root.right, root.val, upper); // 递归检查左子树和右子树
    }

    return helper(root, -Infinity, Infinity);
};

// 测试用例
const tree1 = arrayToTree([2, 1, 3]);
const tree2 = arrayToTree([5, 1, 4, null, null, 3, 6]);
console.log('树1和树2是否是有效的二叉搜索树：');
console.log(isValidBST(tree1)); // true
console.log(isValidBST(tree2)); // false
console.log('tree1');
printTree(tree1); // 打印树结构
console.log('tree2');
printTree(tree2); // 打印树结构
// 输出结果应该是：
// 树1和树2是否是有效的二叉搜索树：
// true
// false
// tree1
// 打印树结构
// tree2
// 打印树结构
// 注意：这里的打印树结构函数需要根据实际情况实现，确保能够正确显示二叉树的结构。