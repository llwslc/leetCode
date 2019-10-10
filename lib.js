function ListNode(val) {
  this.val = val;
  this.next = null;
}

let fillList = (arr, h) => {
  let hd = null;
  arr.forEach((_, i) => {
    if (i == 0) {
      h = new ListNode(_);
      hd = h;
    } else {
      h.next = new ListNode(_);
      h = h.next;
    }
  });
  return hd;
};

let printList = hd => {
  let list = [];
  while (hd) {
    list.push(hd.val);
    hd = hd.next;
  }
  console.log(list);
};

module.exports.ListNode = ListNode;
module.exports.fillList = fillList;
module.exports.printList = printList;
