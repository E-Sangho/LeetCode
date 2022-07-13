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
  if (head === null) {
    return head;
  }
  
  let newHead = null;
  
  Recursion(head);

  return newHead;
  
  function Recursion(tail) {
    if (tail.next === null) {
      newHead = tail;

      return tail;
    }
    
    let newTail = Recursion(tail.next);
    tail.next = null;
    newTail.next = tail;

    return tail;
  }
};