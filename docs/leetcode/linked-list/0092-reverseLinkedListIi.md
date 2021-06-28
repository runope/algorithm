# [0092] 反转链表

> 给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。
>
> 示例 1：
>
> 输入：head = [1,2,3,4,5], left = 2, right = 4
>
> 输出：[1,4,3,2,5]
>
> 示例 2：
>
> 输入：head = [5], left = 1, right = 1
>
> 输出：[5]

与0024差不多，就是要加两个变量去把断点的位置存起来，之后再把他们复原

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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 var reverseBetween = function(head, left, right) {
    if (left === right) return head 
    const dummy = new ListNode(null)
    dummy.next = head

    let beforeNode = dummy
    let cnt = 1

    while(cnt < left) {
        beforeNode = beforeNode.next
        cnt++
    }

    let endNode = beforeNode
    while(cnt <= right) {
        endNode = endNode.next
        cnt++
    }

    let tmp_end = endNode.next
    let tmp_start = beforeNode.next
    
    let prev = tmp_start, cur = prev.next
    while(cur!==tmp_end) {
        let next = cur.next
        cur.next = prev
        prev = cur
        cur = next
    }

    beforeNode.next = endNode
    tmp_start.next = tmp_end
    

    return dummy.next
};
```

