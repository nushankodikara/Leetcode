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
    var n1 = [];
    var n2 = [];

    while (l1) {
        n1.push(l1.val);
        l1 = l1.next;
    }

    while (l2) {
        n2.push(l2.val);
        l2 = l2.next;
    }

    var maxLength = 0;

    if (n1.length > n2.length) {
        maxLength = n1.length;
    } else {
        maxLength = n2.length;
    }

    var res = [];

    for (var i = 0; i < maxLength; i++) {
        var x = n1[i] ? n1[i] : 0;
        var y = n2[i] ? n2[i] : 0;
        res.push(x + y);
    }

    var carry = 0;

    for (i in res) {
        if (carry > 0) {
            res[i] += 1;
            carry -= 1;
        }

        if (res[i] > 9) {
            res[i] -= 10;
            carry += 1;
        }
    }

    if (carry > 0) {
        res.push(1);
    }

    var ret = new ListNode(res[0]);
    var cur = ret;

    for (var i = 1; i < res.length; i++) {
        cur.next = new ListNode(res[i]);
        cur = cur.next;
    }

    return ret;
};
