# [0021] 合并两个有序列表

> 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
>
> 示例 1：
>
> 输入：l1 = [1,2,4], l2 = [1,3,4]
>
> 输出：[1,1,2,3,4,4]
>
> 示例 2：
>
> 输入：l1 = [], l2 = []
>
> 输出：[]
>
> 示例 3：
>
> 输入：l1 = [], l2 = [0]
>
> 输出：[0]


水题，就是一个链表的应用。
第一种方法使用递归，我个人不太喜欢用递归，感觉递归只是用起来方便，在时间或者空间上始终不如迭代。其实写递归很简单，先把问题退出条件写好，之后分解问题递归去解
第二种方法使用迭代，维护一个头结点就好，链表的强项本来就是插入，直接比较插入

```js
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
```

