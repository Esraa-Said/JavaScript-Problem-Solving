/*
https://leetcode.com/problems/merge-two-sorted-lists/
*/


class ListNode{
    constructor(val = 0, next = null){
        this.val = val;
        this.next = next;
    }
}


var mergeTwoLists = function(list1, list2) {
    let headNode = new ListNode(0);   
    let currentNode = headNode;

    while(list1 && list2){
        if(list1.val <= list2.val){
            currentNode.next = list1;
            list1 = list1.next;
        }else{
            currentNode.next = list2;
            list2 = list2.next;  
        }
        currentNode = currentNode.next;
    }
    currentNode.next = list1 || list2;

    return headNode.next;
};

