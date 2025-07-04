/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let vals = [];
    let current = head;
    while (current) {
        vals.push(current.val);
        current = current.next;
    }
    let left = 0;
    let right = vals.length - 1;
    while (left < right) {
        if (vals[left] !== vals[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}