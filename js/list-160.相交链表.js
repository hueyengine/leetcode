/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (headA === null || headB === null) {
        return null;
    }
    let pA = headA;
    let pB = headB;
    while (pA !== pB) {
        pA = pA === null ? headB : pA.next;
        pB = pB === null ? headA : pB.next;
    }
    return pA;
};

// Example usage:
const ListNode = require('./list-node');
const headA = new ListNode(1);
headA.next = new ListNode(2);
const headB = new ListNode(3);
headB.next = headA.next; // Intersection at node with value 2
const intersectionNode = getIntersectionNode(headA, headB);
console.log(intersectionNode ? intersectionNode.val : null); // Output: 2
