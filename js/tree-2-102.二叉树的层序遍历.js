const arrayToTree = require('./tree-1-2.数组转二叉树.js');
const printTree = require('./tree-1-2.打印二叉树.js');

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    const ret = [];
    if (!root) return ret;

    const q = [];
    q.push(root);
    while (q.length) {
        const currentLevelSize = q.length;
        ret.push([]);
        for (let i = 1; i <= currentLevelSize; i++) {
            const node = q.shift();
            ret[ret.length - 1].push(node.val);
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }
    }

    return ret;
};

// 测试用例
const tree1 = arrayToTree([3,9,20,null,null,15,7]);
console.log('树的层序遍历结果：');
console.log(levelOrder(tree1)); // [[3],[9,20],[15,7]]
console.log('tree1');
printTree(tree1); // 打印树结构
// 测试用例2
const tree2 = arrayToTree([1,2,3,4,5,null,null]);
console.log('树的层序遍历结果：');
console.log(levelOrder(tree2)); // [[1],[2,3],[4,5]]
console.log('tree2');
printTree(tree2); // 打印树结构
// 测试用例3
const tree3 = arrayToTree([]);
console.log('树的层序遍历结果：');
console.log(levelOrder(tree3)); // []
console.log('tree3');
printTree(tree3); // 打印树结构
// 测试用例4
const tree4 = arrayToTree([1]);
console.log('树的层序遍历结果：');
console.log(levelOrder(tree4)); // [[1]]
console.log('tree4');
printTree(tree4); // 打印树结构
