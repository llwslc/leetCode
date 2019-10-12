/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let pre = dummy;

  while (pre.next && pre.next.next) {
    let start = pre.next;
    let end = pre.next.next;

    pre.next = end;
    start.next = end.next;
    end.next = start;
    pre = start;
  }

  return dummy.next;
};

let { ListNode, fillList, printList } = require('./lib');

let h = null;
let hd = null;

hd = fillList([1, 2, 3, 4], h);

console.log(printList(swapPairs(hd)));
