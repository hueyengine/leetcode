# Tree
## 二叉搜索树

有效二叉搜索树定义如下：如果该二叉树的左子树不为空，则左子树上所有节点的值均小于它的根节点的值； 若它的右子树不空，则右子树上所有节点的值均大于它的根节点的值；它的左右子树也为二叉搜索树。

- 节点的左子树只包含 小于 当前节点的数。
- 节点的右子树只包含 大于 当前节点的数。
- 所有左子树和右子树自身必须也是二叉搜索树。

二叉树的中序遍历即按照访问左子树——根结点——右子树的方式遍历二叉树；在访问其左子树和右子树时，我们也按照同样的方式遍历；直到遍历完整棵树。

# Retrace
需要知道结束递归的条件
需要知道撤销当前的选择

# Heap
堆是具有下列性质的完全二叉树：每个结点的值都大于或等于其左右孩子结点的值，称为大顶堆；或者每个结点的值都小于或等于其左右孩子结点的值，称为小顶堆。

## 堆排序

堆排序的基本思想是将待排序的序列构造成一个大顶堆。此时整个序列的最大值就是堆顶的的根结点。将它移走（其实就是将其与堆数组的末尾元素交换，此时末尾元素就是最大值），然后将剩余的 n - 1 个序列重新构造成一个堆，这样就会得到 n 个元素中的次小值。如此反复执行，便能得到一个有序序列了。

# Binary Search
## 边界处理的理解
```javascript
var searchInsert = function (nums, target) {
    let left = 0,
        right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left;
};
```
这段代码实现了二分查找来确定目标值`target`在有序数组`nums`中应该插入的位置。这段代码的二分查找逻辑如下：
1. **初始化**：`left`指向数组起始位置（0），`right`指向数组末尾位置（`nums.length - 1`）。
2. **循环条件**：`left <= right`，确保搜索区间有效。
3. **中间值判断**：
   - 如果`nums[mid] < target`，说明`target`应插入在`mid`的右侧，更新`left = mid + 1`。
   - 否则（`nums[mid] >= target`），说明`target`应插入在`mid`或其左侧，更新`right = mid - 1`。
4. **终止条件**：当`left > right`时，循环结束，此时`left`即为插入位置。


### **为什么返回`left`？**
#### 1. **插入位置的定义**
插入位置是指数组中第一个**大于等于**`target`的元素索引。如果所有元素都小于`target`，则插入位置为数组末尾（即`nums.length`）。

#### 2. **循环不变量**
在循环过程中，`left`始终指向**当前搜索区间左侧第一个可能大于等于`target`的位置**，而`right`始终指向**当前搜索区间右侧最后一个小于`target`的位置**。具体来说：
- **当`nums[mid] < target`**：`left`被更新为`mid + 1`，此时`left`左侧的所有元素都小于`target`。
- **当`nums[mid] >= target`**：`right`被更新为`mid - 1`，此时`right`右侧的所有元素都大于等于`target`。

#### 3. **循环结束时的状态**
当循环终止时，`left > right`，此时：
- **`left`的值**：恰好是第一个大于等于`target`的位置。
- **`right`的值**：恰好是最后一个小于`target`的位置。

例如：
- 若`target`存在于数组中，`left`会指向第一个等于`target`的位置。
- 若`target`不存在，`left`会指向第一个比`target`大的元素位置（即插入点）。
- 若`target`大于所有元素，`left`会递增到`nums.length`。


### **示例验证**
1. **数组中有`target`**：  
   `nums = [1, 3, 5, 6]`, `target = 5`  
   - 初始：`left = 0`, `right = 3`  
   - 第一次循环：`mid = 1`, `nums[1] = 3 < 5` → `left = 2`  
   - 第二次循环：`mid = 2`, `nums[2] = 5 >= 5` → `right = 1`  
   - 终止：`left = 2`, `right = 1`，返回`left = 2`（正确插入位置）。

2. **数组中没有`target`**：  
   `nums = [1, 3, 5, 6]`, `target = 4`  
   - 初始：`left = 0`, `right = 3`  
   - 第一次循环：`mid = 1`, `nums[1] = 3 < 4` → `left = 2`  
   - 第二次循环：`mid = 2`, `nums[2] = 5 >= 4` → `right = 1`  
   - 终止：`left = 2`, `right = 1`，返回`left = 2`（正确插入位置）。

3. **`target`大于所有元素**：  
   `nums = [1, 3, 5, 6]`, `target = 7`  
   - 最终：`left = 4`, `right = 3`，返回`left = 4`（数组末尾）。


### **为什么不返回`right`？**
`right`指向最后一个小于`target`的位置，若返回`right`，插入位置会偏左，导致错误。例如：
- 对于`nums = [1, 3, 5, 6]`, `target = 5`，循环结束时`right = 1`（对应元素3），但正确插入位置是2。

## 证明
当二分查找的循环条件为 `left <= right` 时，循环结束的条件是 `left > right`。此时，`left` 恰好是目标值 `target` 应该插入的位置。这一结论可以通过以下步骤严格证明：


### **1. 二分查找的循环不变量**
在每次循环开始前，以下条件成立：
- **`nums[0..left-1]` 中的所有元素都小于 `target`**（如果 `left > 0`）。
- **`nums[right+1..n-1]` 中的所有元素都大于等于 `target`**（如果 `right < n-1`）。

**初始化**：  
- 初始时，`left = 0`，`right = n-1`，此时：
  - `nums[0..-1]` 为空，条件自然成立。
  - `nums[n..n-1]` 为空，条件自然成立。

**循环过程**：  
- **若 `nums[mid] < target`**：  
  更新 `left = mid + 1`。由于 `nums[mid] < target`，`mid` 及其左侧的所有元素都小于 `target`，因此 `nums[0..left-1]` 中的元素仍小于 `target`。
  
- **若 `nums[mid] >= target`**：  
  更新 `right = mid - 1`。由于 `nums[mid] >= target`，`mid` 及其右侧的所有元素都大于等于 `target`，因此 `nums[right+1..n-1]` 中的元素仍大于等于 `target`。


### **2. 循环结束时的状态**
当循环终止时，`left > right`。此时：
- **`left` 的最小值为 `0`**（初始值）。
- **`right` 的最大值为 `n-1`**（初始值）。

因此，`left > right` 只能是以下两种情况之一：
1. **`left = right + 1`**（循环最后一次更新 `left` 或 `right` 导致）。
2. **`left = n` 且 `right = n-1`**（当 `target` 大于所有元素时）。


### **3. 插入位置的严格证明**
根据循环不变量，循环结束时：
- **`nums[0..left-1]` 中的所有元素都小于 `target`**。
- **`nums[right+1..n-1]` 中的所有元素都大于等于 `target`**。

由于 `left = right + 1`，上述区间可合并为：
- **`nums[0..left-1]` 中的所有元素都小于 `target`**。
- **`nums[left..n-1]` 中的所有元素都大于等于 `target`**。

因此，`left` 是第一个大于等于 `target` 的位置，即插入位置。


### **4. 示例验证**
#### **例1：`target` 存在于数组中**
```python
nums = [1, 3, 5, 6]
target = 5
```
- **初始**：`left = 0`, `right = 3`
- **第一次循环**：`mid = 1`, `nums[1] = 3 < 5` → `left = 2`
- **第二次循环**：`mid = 2`, `nums[2] = 5 >= 5` → `right = 1`
- **终止**：`left = 2`, `right = 1`，此时：
  - `nums[0..1] = [1, 3]` 均小于 `5`。
  - `nums[2..3] = [5, 6]` 均大于等于 `5`。
  - 插入位置为 `2`，即 `left`。

#### **例2：`target` 不存在，需插入中间**
```python
nums = [1, 3, 5, 6]
target = 4
```
- **初始**：`left = 0`, `right = 3`
- **第一次循环**：`mid = 1`, `nums[1] = 3 < 4` → `left = 2`
- **第二次循环**：`mid = 2`, `nums[2] = 5 >= 4` → `right = 1`
- **终止**：`left = 2`, `right = 1`，此时：
  - `nums[0..1] = [1, 3]` 均小于 `4`。
  - `nums[2..3] = [5, 6]` 均大于等于 `4`。
  - 插入位置为 `2`，即 `left`。

#### **例3：`target` 大于所有元素**
```python
nums = [1, 3, 5, 6]
target = 7
```
- **初始**：`left = 0`, `right = 3`
- **循环过程**：`left` 不断右移，最终：
  - `left = 4`, `right = 3`
  - `nums[0..3] = [1, 3, 5, 6]` 均小于 `7`。
  - `nums[4..3]` 为空，无元素大于等于 `7`。
  - 插入位置为 `4`（数组末尾），即 `left`。


### **5. 数学归纳法辅助理解**
- **归纳基础**：  
  若数组长度为 `0`，则 `left = 0`，`right = -1`，插入位置为 `0`，正确。

- **归纳假设**：  
  对于长度为 `k` 的数组，算法正确找到插入位置。

- **归纳步骤**：  
  对于长度为 `k+1` 的数组，二分查找将问题规模缩小到左侧或右侧子数组（长度 ≤ `k`）。根据归纳假设，子数组的插入位置正确，结合循环不变量，最终 `left` 仍为整体数组的插入位置。


### **结论**
当 `left > right` 时，`left` 恰好是第一个大于等于 `target` 的位置，因此是正确的插入位置。这一结论由二分查找的循环不变量和终止条件严格保证，适用于所有有序数组的插入场景。