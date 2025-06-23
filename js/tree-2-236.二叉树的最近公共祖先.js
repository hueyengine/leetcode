const arrayToTree = require('./tree-1-2.数组转二叉树.js');
const printTree = require('./tree-1-2.打印二叉树.js');
const TreeNode = require('./tree-1-1.生成二叉树节点.js');
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let ans;

    const dfs = (node, p, q) => {
        if (!node) return false;

        const lson = dfs(node.left, p, q);
        const rson = dfs(node.right, p, q);

        if ((lson && rson) || ((node.val === p.val || node.val === q.val) && (lson || rson))) {
            ans = node;
        }

        return lson || rson || (node.val === p.val || node.val === q.val);

    }

    dfs(root, p, q);

    return ans;
};

// 测试用例
const arr = [3,5,1,6,2,0,8,null,null,7,4];
const root = arrayToTree(arr);
console.log('原始二叉树：');
printTree(root);
console.log(lowestCommonAncestor(root, new TreeNode(5), new TreeNode(1)).val); // 输出：3