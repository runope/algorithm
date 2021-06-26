# [0024] 两两交换链表中的节点

> 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
>
> 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
>
> 示例 1：
>
> 输入：head = [1,2,3,4]
>
> 输出：[2,1,4,3]
>
> 示例 2：
>
>
> 输入：head = []
>
> 输出：[]
>
> 示例 3：
>
>
> 输入：head = [1]
>
> 输出：[1]

没啥好写的

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let new_head = new ListNode(-1)
    new_head.next = head
    let cur = new_head

    while(cur.next !== null && cur.next.next !== null) {
        const node1 = cur.next
        const node2 = cur.next.next
        cur.next = node2
        node1.next = node2.next
        node2.next = node1
        cur = node1

    }

    return new_head.next
};
```