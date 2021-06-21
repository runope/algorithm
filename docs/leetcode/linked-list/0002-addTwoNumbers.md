# [0002] 两数相加

> 给你两个非空的链表，表示两个非负的整数。它们每位数字都是按照逆序的方式存储的，并且每个节点只能存储一位数字。
>
> 请你将两个数相加，并以相同形式返回一个表示和的链表。
>
> 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
>
> 示例：
>
> 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
>
> 输出：7 -> 0 -> 8
>
> 原因：342 + 465 = 807

链表问题首先设立头结点head，作为链表的起始节点，这样方便之后的每次的插入行为。
其次注意进位问题，以及边界问题

```js
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
```