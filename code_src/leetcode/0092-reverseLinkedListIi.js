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