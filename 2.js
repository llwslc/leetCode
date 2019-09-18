/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let head = new ListNode(0);
  let res = head;
  while (l1 != null || l2 != null) {
    if (res.next) res = res.next;
    let a = l1 ? l1.val : 0;
    let b = l2 ? l2.val : 0;
    let cur = res.val + a + b;
    res.val = cur % 10;
    res.next = new ListNode(parseInt(cur / 10));
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  if (res.next.val == 0) res.next = null;
  return head;
};
