/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null;
    let current = head;

    while (current) {
        const next = current.next; // Store the next node
        current.next = prev; // Reverse the current node's pointer
        prev = current; // Move prev to the current node
        current = next; // Move to the next node
    }

    return prev; // New head of the reversed list
};

// Definition for singly-linked list.
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

// Example usage:
const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
const reversedHead = reverseList(head);
let current = reversedHead;
while (current) {
    console.log(current.val); // Output: 5 4 3 2 1
    current = current.next;
}