function heapSort(arr) {
    const n = arr.length;

    // 第一步：构建最大堆
    // 从最后一个非叶子节点开始向前遍历，依次调整每个节点，确保父节点比子节点大。
    // 最后一个非叶子节点的索引是 Math.floor(n / 2) - 1
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    // 第二步：一个个交换元素
    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]]; // 交换堆顶与当前未排序部分的最后元素
        heapify(arr, i, 0); // 重新调整堆
    }

    return arr;
}

function heapify(arr, n, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    // 如果左子节点大于根节点
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    // 如果右子节点大于当前最大节点
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    // 如果最大节点不是根节点，交换并继续调整
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest); // 递归调整受影响的子树
    }
}

// Example usage:
const arr = [5, 3, 8, 6, 7, 2];
console.log(heapSort(arr)); // 输出: [2, 3, 5, 6, 7, 8]
