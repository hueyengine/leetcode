function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// 辅助函数：数组转二叉树
function arrayToTree(arr) {
  if (!arr.length) return null;

  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;

  while (i < arr.length) {
    const node = queue.shift();

    if (arr[i] !== null) {
      node.left = new TreeNode(arr[i]);
      queue.push(node.left);
    }
    i++;

    if (i < arr.length && arr[i] !== null) {
      node.right = new TreeNode(arr[i]);
      queue.push(node.right);
    }
    i++;
  }

  return root;
}

// 辅助函数：打印二叉树（中序遍历）
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const res = [];

  const inorder = (node) => {
    if (!node) return;

    inorder(node.left); // 访问左子树
    res.push(node.val); // 访问根节点
    inorder(node.right); // 访问右子树
  };

  inorder(root);
  return res;
};

// 验证结果
const tree = arrayToTree([1, 2, 3, null, 4, 5]);
console.log(inorderTraversal(tree)); // [2, 1, 4, 3, 5]
console.log(inorderTraversal(tree)); // [2, 1, 4, 3, 5]
console.log(inorderTraversal(tree)); // [2, 1, 4, 3, 5]
console.log(inorderTraversal(tree)); // [2, 1, 4, 3, 5]
