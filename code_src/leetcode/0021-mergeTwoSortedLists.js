/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/** 递归
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if(l1 == null) {
        return l2
    } else if(l2 == null) {
        return l1
    } else if(l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    }else {
        l2.next = mergeTwoLists(l1, l2.next)
        return l2
    }
};

/** 迭代
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let new_head = new NodeList(-1)

    let cur = new_head

    while(l1!=null && l2!=null) {
        if(l1.val < l2.val) {
            cur.next = l1
            l1 = l1.next
        } else {
            cur.next = l2
            l2 = l2.next
        }
        cur = cur.next
    }

    cur.next = l1 || l2
    return new_head.next
};