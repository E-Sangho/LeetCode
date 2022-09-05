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
var insertionSortList = function(head) {
  let node = head;
  let ans = new ListNode();

  while (node !== null) {
    let curNode = ans;

    while (curNode.next !== null && node.val > curNode.next.val) {
      curNode = curNode.next;
    }
    
    let temp = node.next;
    
    node.next = curNode.next;
    curNode.next = node;
    node = temp;
    
  }
    
  return ans.next;
};