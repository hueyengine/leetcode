/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 整个流程就是上浮下沉
var findKthLargest = function (nums, k) {
    let heapSize = nums.length;
    // 构建好一个大顶堆
    for (let i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
        heapify(nums, heapSize, i);
    }

    // 进行k-1次交换
    for (let i = nums.length - 1; i >= nums.length - k + 1; i--) {
        // 交换堆顶和当前未排序部分的最后一个元素
        [nums[0], nums[i]] = [nums[i], nums[0]];
        heapSize--; // 减小堆的大小
        heapify(nums, heapSize, 0); // 重新调整堆
    }

    return nums[0]; // 返回堆顶元素，即第k大的元素

    function heapify(nums, heapSize, i) {
        let largest = i; 
        let left = 2 * i + 1;
        let right = 2 * i + 2;

        if (left < heapSize && nums[left] > nums[largest]) {
            largest = left;
        }
        if (right < heapSize && nums[right] > nums[largest]) {
            largest = right;
        }
        if (largest !== i) {
            [nums[i], nums[largest]] = [nums[largest], nums[i]];
            heapify(nums, heapSize, largest); // 递归调整受影响的子树
        }
    }
}

// Example usage:
const nums = [3, 2, 1, 5, 6, 4];
const k = 2;
console.log(findKthLargest(nums, k)); // 输出: 5
const nums2 = [3, 2, 3, 1, 2, 4, 5, 5, 6];
const k2 = 4;
console.log(findKthLargest(nums2, k2)); // 输出: 4