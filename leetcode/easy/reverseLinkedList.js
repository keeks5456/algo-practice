/**
 206. Reverse Linked List

Given the head of a singly linked list, reverse the list, and return the reversed list.

 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 
 I: head = [1,2,3,4,5]
 O: [5,4,3,2,1]
 
 +++ iterative way
initialize three pointers 
prev = null
current = head 
next = null

iterate thru list:
before we move to the next node of current, we store that next node 
next = current.next

then change t next node of current
reversal happens here:
have the current.next = our prev 

move current & prev forward
prv = current 
current = next



 */
var reverseList = function(head) {
 
    prev = null
    current = head
    
    while(current !== null){
        next = current.next 
        // points to next node that will be targetted 
        current.next = prev 
        //this will now be our current number 
        
        //this is where reversal happens
        prev = current // make this element now our new current head
        current = next
        //move to the next element ..?
        
        head = prev 
    }
    return prev // we return prev b/c it will be the new head of our list that points to its descending notes
};

// var reverseList = function(head) {
 
//     let prev = null
//     head.next = prev
//     next = head.next
    
//     if(next == null){
//         return head.next = prev
//     } else {
//         return reverseList(head, next)
//     }

// }; come back to this :)