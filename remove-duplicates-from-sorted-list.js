/*
https://leetcode.com/problems/remove-duplicates-from-sorted-list/submissions/1511857993/
*/

var deleteDuplicates = function (head) {
  if (!head) return null;
  let current = head;
  while (current && current.next) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
};
