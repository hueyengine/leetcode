function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// class ListNode {
//   constructor(val, next) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }

// 辅助函数：数组转链表
function arrayToList(arr) {
  let dummy = new ListNode();
  let current = dummy;

  for (const val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }

  return dummy.next;
}

// 辅助函数：打印链表
function printList(head) {
  const values = [];
  let current = head;

  while (current) {
    values.push(current.val);
    current = current.next;
  }

  console.log(values.join(" → "));
}

// 生成链表
const l1 = arrayToList([2, 4, 3]);
const l2 = arrayToList([5, 6, 4]);

// 验证结果
printList(l1); // 2 → 4 → 3
printList(l2); // 5 → 6 → 4

function addTwoNumbers(l1, l2) {
  let head = null,
    tail = null; // 相加链表的头尾指针
  let carry = 0; // 进位

  while (l1 || l2) {
    const n1 = l1 ? l1.val : 0; // 获取l1当前节点的值
    const n2 = l2 ? l2.val : 0; // 获取l2当前节点的值
    const sum = n1 + n2 + carry; // 计算当前位的和
    carry = Math.floor(sum / 10); // 更新进位

    if (!head) {
      head = tail = new ListNode(sum % 10); // 初始化头节点和尾节点
    } else {
      tail.next = new ListNode(sum % 10); // 创建新节点并连接到尾节点
      tail = tail.next; // 更新尾节点
    }

    if (l1) l1 = l1.next; // 移动l1到下一个节点
    if (l2) l2 = l2.next; // 移动l2到下一个节点
  }

  if (carry > 0) {
    tail.next = new ListNode(carry); // 如果还有进位，添加到链表末尾
  }

  return head; // 返回相加后的链表头节点
}

// 测试 addTwoNumbers 函数
const result = addTwoNumbers(l1, l2);
printList(result); // 7 → 0 → 8

// 解释：
// 342 + 465 = 807，所以结果链表为 7 → 0 → 8
// 这里的链表表示的是逆序存储的数字，
// 即个位在前，十位在后，百位在最末尾。
// 例如：链表 2 → 4 → 3 表示数字 342，
// 链表 5 → 6 → 4 表示数字 465，
// 相加后得到的链表 7 → 0 → 8 表示数字 807。
// 这个实现使用了两个指针 l1 和 l2 来遍历两个链表，
// 同时使用一个指针 tail 来构建结果链表。
// 通过逐位相加并处理进位，最终返回结果链表的头节点。
// 这个实现的时间复杂度是 O(max(m, n))，其中 m 和 n 分别是两个链表的长度。
// 空间复杂度是 O(max(m, n))，因为结果链表的长度可能与输入链表的长度相同。
// 这个实现的核心思想是模拟手动相加的过程，
// 逐位相加并处理进位，直到两个链表都遍历完。
// 这种方法简单直观，易于理解和实现。
