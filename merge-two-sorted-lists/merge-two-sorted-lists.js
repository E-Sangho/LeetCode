/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  if (list1 === null && list2 === null) {
    return null;
  }
  
  let ans = new ListNode();
  let tail;
  
  Recursion(list1, list2);

  return ans;

  function Recursion(first, second) {
    if (first === null && second === null) {
      return; 
    }
    
    if (first === null) {
     if (ans.val === 0) {
        ans = second;
        tail = second;
        second = second.next;
      } else {
        tail.next = second;
        tail = second;
        second = second.next; 
      }
      return;
    }
    
    if (second === null) {
      if (ans.val === 0) {
        ans = first;
        tail = first;
        first = first.next;
      } else {
        tail.next = first;
        tail = first;
        first = first.next;
      }
      return;
    }
    
    let l1 = first.val;
    let l2 = second.val;

    if (l1 >= l2) {
      if (ans.val === 0) {
        ans = second;
        tail = second;
        second = second.next;
      } else {
        tail.next = second;
        tail = second;
        second = second.next; 
      }
    } else {
      if (ans.val === 0) {
        ans = first;
        tail = first;
        first = first.next;
      } else {
        tail.next = first;
        tail = first;
        first = first.next;
      }
    }
    
    Recursion(first, second);
  }
};