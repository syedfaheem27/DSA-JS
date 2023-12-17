const { SinglyLinkedListI, ListNode } = require("./linked_list");

const ll_1 = new SinglyLinkedListI();
const node = new ListNode(4);

ll_1.add(2).add(3).add(9);
console.log(ll_1.updateElement(1, node));
console.log(ll_1);
