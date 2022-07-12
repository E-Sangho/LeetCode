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
  if (head === null) {
    return null;
  }
  
  let nextNode = head.next;
  
  if (nextNode === null) {
    return head;
  }
  
  head.next = swapPairs(nextNode.next); 
  nextNode.next = head;

  return nextNode;
};