/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    const dummy = new ListNode(null)
    dummy.next = head

    let cur = dummy

    while(cur.next) {
        if(cur.next.val === val) {
            cur.next = cur.next.next || null
        } else {
            cur = cur.next
        }
    }

    return dummy.next
};