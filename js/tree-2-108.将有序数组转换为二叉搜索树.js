const arrayToTree = require('./tree-1-2.数组转二叉树.js');
const printTree = require('./tree-1-2.打印二叉树.js');
const TreeNode = require('./tree-1-1.生成二叉树节点.js');

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    const buildBST = (nums, start, end) => {
        if (start > end) return null; // 递归终止条件：start大于end，说明没有元素可以构建树

        const midIndex = (start + end) >>> 1; // 计算中间索引，使用位运算提高效率
        const root = new TreeNode(nums[midIndex]); // 创建当前节点

        root.left = buildBST(nums, start, midIndex - 1); // 递归构建左子树
        root.right = buildBST(nums, midIndex + 1, end); // 递归构建右子树

        return root; // 返回当前节点
    };

    return buildBST(nums, 0, nums.length - 1); // 从整个数组构建平衡二叉搜索树
};

// 测试用例
const nums1Tree = [-10, -3, 0, 5, 9];
const nums2Tree = [1, 3];
const tree1 = sortedArrayToBST(nums1Tree);
const tree2 = sortedArrayToBST(nums2Tree);
console.log('树1：');
printTree(tree1); // 打印树结构
console.log('树2：');
printTree(tree2); // 打印树结构
