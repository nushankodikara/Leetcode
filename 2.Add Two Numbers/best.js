/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let head = new ListNode();
    let curr = head;
    let rem = 0;

    while (l1 || l2 || rem) {
        let l1Val = l1 ? l1.val : 0;
        let l2Val = l2 ? l2.val : 0;
        let sum = l1Val + l2Val + rem;
        rem = ~~(sum / 10);

        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
        curr.next = new ListNode(sum % 10);
        curr = curr.next;
    }

    return head.next;
};
