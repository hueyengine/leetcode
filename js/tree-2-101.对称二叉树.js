const arrayToTree = require('./tree-1-2.数组转二叉树.js');
const printTree = require('./tree-1-2.打印二叉树.js');

/**
 * 方法一：层序遍历递归
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    const check = (left, right) => {
        if (!left && !right) {
            // 两个子树都为null，是对称的
            return true;
        }
        if (left && right) {
            // 两个子树都存在，则需要：root值相同，且他们的子树也满足镜像
            return left.val == right.val && check(left.left, right.right) && check(left.right, right.left);
        }

        return false; // 一个子树存在一个不存在，肯定不对称
    };

    if (!root) {
        // 如果传入的root就是null，对称
        return true;
    }

    return check(root.left, root.right); // 否则，判断它的左右子树是否满足对称
};

// 测试用例
const tree1 = arrayToTree([1, 2, 2, 3, 4, 4, 3]);
const tree2 = arrayToTree([1, 2, 2, null, 3, null, 3]);
console.log('树1和树2是否对称：');
console.log(isSymmetric(tree1)); // true
console.log(isSymmetric(tree2)); // false
console.log('tree1');
printTree(tree1); // 打印树结构
console.log('tree2');
printTree(tree2); // 打印树结构