const ListNode = require('./list-node');

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// var hasCycle = function(head) {
//     const map = new Map();

//     while (head) {
//         if (map.has(head)) {
//             return true;
//         }
//         map.set(head, true);
//         head = head.next;
//     }

//     return false;
// };

var hasCycle = function(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next; // Move slow pointer by 1 step
        fast = fast.next.next; // Move fast pointer by 2 steps

        if (slow === fast) {
            return true; // Cycle detected
        }
    }

    return false; // No cycle detected
};

// Example usage:
const head = new ListNode(3);
head.next = new ListNode(2);
head.next.next = new ListNode(0);
head.next.next.next = new ListNode(-4);
head.next.next.next.next = head.next; // Creates a cycle
console.log(hasCycle(head)); // Output: true