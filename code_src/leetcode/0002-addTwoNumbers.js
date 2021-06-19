/*
 * @Author: Runope
 * @Date: 2021-06-15 19:46:55
 * @LastEditors: Runope
 * @LastEditTime: 2021-06-15 19:47:32
 * @Description: file content
 * @contact: runope@qq.com
 */
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
 var addTwoNumbers = function(l1, l2) {
    let head1 = l1
    let head2 = l2

    // fs :is carry forward?
    let fs = 0

    // before: point to one before head1
    let before = l1
    while(head1 && head2) {
        const sum = head1.val + head2.val + fs
        head1.val = sum % 10
        // JavaScript中number其实都是由浮点数形式存储，这里需要处理一下
        fs = (sum - head1.val) / 10
        before = head1
        head1 = head1.next
        head2 = head2.next
    }
    if (head1) {
        if (fs) {
            before.next = addTwoNumbers(head1, new ListNode(fs))
        }else {
            before.next = head1
        }
    } else if (head2) {
        if (fs) {
            before.next = addTwoNumbers(head2, new ListNode(fs))
        } else {
            before.next = head2
        }
    } else if (fs) {
        before.next = new ListNode(fs)
    }
    return l1
};