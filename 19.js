/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let first = dummy;
  let second = dummy;
  let i = 1;
  while (first.next) {
    first = first.next;
    if (i > n) second = second.next;
    i++;
  }

  if (second.next) {
    second.next = second.next.next;
  } else {
    dummy = null;
  }

  return dummy.next;
};

let { ListNode, fillList, printList } = require('./lib');

let h = null;
let hd = null;

hd = fillList([1, 2], h);
console.log(printList(removeNthFromEnd(hd, 2)));

hd = fillList([1, 2, 3, 4, 5], h);
console.log(printList(removeNthFromEnd(hd, 2)));
