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
var mergeTwoLists = function(l1, l2) {
  let dummy = new ListNode(0);
  dummy.next = l1;
  let prel1 = dummy;

  while (l1) {
    if (l2 && l1.val > l2.val) {
      prel1.next = l2;
      let prel2 = l2;
      while (l2) {
        if (l1.val < l2.val) {
          break;
        }
        prel2 = l2;
        l2 = l2.next;
      }
      prel2.next = l1;
    }
    prel1 = l1;
    l1 = l1.next;
  }
  prel1.next = l2;

  return dummy.next;
};

let { ListNode, fillList, printList } = require('./lib');

let h1 = null;
let hd1 = null;
let h2 = null;
let hd2 = null;

hd1 = fillList([1, 2, 4], h1);
hd2 = fillList([1, 3, 4], h2);
console.log(printList(mergeTwoLists(hd1, hd2)));

hd1 = fillList([2], h1);
hd2 = fillList([1], h2);
console.log(printList(mergeTwoLists(hd1, hd2)));

hd1 = fillList([5], h1);
hd2 = fillList([1, 2, 4], h2);
console.log(printList(mergeTwoLists(hd1, hd2)));
