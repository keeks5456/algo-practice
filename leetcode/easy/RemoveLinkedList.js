
// Remove Linked List Element

// Remove all elements from a linked list of integers that have value val.

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
    if(!head) return head
   
    if(!head.next){
        return head = null
    } 
    
    let prev = this.head
    let tail = head.next
    
    while(tail.next !== null){
        prev = tail
        tail = tail.next
    }
    prev.next = null;
   return head;
};