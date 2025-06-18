function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
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

// 输出二叉树的结构
function printTree(node, level = 0) {
    if (!node) return;
    printTree(node.right, level + 1);
    console.log('  '.repeat(level) + node.val);
    printTree(node.left, level + 1);
}

// 测试数组转二叉树
const arr = [3, 9, 20, null, null, 15, 7];
const root = arrayToTree(arr);
printTree(root);

// 输出结果：
//       7
//    20
//       15
// 3
//    9