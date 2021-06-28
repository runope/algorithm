# [0206] 反转链表

> 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
>
> 示例 1：
>
> 输入：head = [1,2,3,4,5]
>
> 输出：[5,4,3,2,1]
>
> 示例 2：
>
>
> 输入：head = [1,2]
>
> 输出：[2,1]
>
> 示例 3：
>
> 输入：head = []
> 输出：[]

相当于考链表的基础操作，操作方法其实类似交换两个数，假设a0，a1。先tmp = a0, 之后a0 = a1, 最后a1 = tmp. 
我们采取头插法搞这个题，当前要新加入放入头结点的为cur，我们先存下cur的next，因为我们紧接着要改变cur的next为我们已经处理好的链表，接下来cur.next = prev， prev = cur。最后移动我们下一步要处理的节点cur = next

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
 var reverseList = function(head) {
    let prev = null, cur = head
    while(cur) {
        const next = cur.next
        cur.next = prev
        prev = cur
        cur = next
    }
    return prev
};
```

这里其实递归就是一个倒序过程，使用递归就是把迭代的头插转化成了尾插法，然后使用newHead当做一个tmp变量把头结点一直返回回来。

假设进行到最后一步，有两个a，b（b是原链表的尾结点，next为none），


a         b
|         |
head      head.next

const newHead = reverseList(head.next); 这里是直接返回b节点
由于b是最后一个，所以我们b的next为null
我们要交换这个两个顺序
head.next.next = head    (相当于b.next = a)
head.next = null (相当于a.next = b.next = null)

return newHead(相当于return b节点)

从上述操作中我们可以看出newHead的作用相当于一个最后一个节点的tmp，也就是转换之后的头结点，它的值一直都没有变动是上述中的b节点。
在每次递归时，我们分为前部分和后部分（递归是从内向外），每一个时刻点，我们的后部分其实是已经倒序的，此时前半部分的尾部节点k(n)的next节点k(n+1)，其实已经是经过倒序后放在了最后，此时的k(n+1)的next已经是null
这里其实递归就是一个倒序过程，使用递归就是把迭代的头插转化成了尾插法，然后使用newHead当做一个tmp变量把头结点一直返回回来。
有一说一，这个题用递归的人，除了为了装逼而装逼，我看不出任何理由。递归的使用，一般都是用空间换取思维难度，而该题复杂了思维难度，完全就是脱裤子放屁

```js
var reverseList = function(head) {
    if (head == null || head.next == null) {
        return head;
    }
    const newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
};

```