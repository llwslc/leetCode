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

function ListNode(val) {
  this.val = val;
  this.next = null;
}

let h = null;
let hd = null;
h = new ListNode(1);
h.next = new ListNode(2);
console.log(removeNthFromEnd(h, 2));

h = new ListNode(1);
hd = h;
h.next = new ListNode(2);
h = h.next;
h.next = new ListNode(3);
h = h.next;
h.next = new ListNode(4);
h = h.next;
h.next = new ListNode(5);
console.log(removeNthFromEnd(hd, 2));
