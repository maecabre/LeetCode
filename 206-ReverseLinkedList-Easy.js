/*

*******************************************************************************
206-ReverseLinkedList-Easy.js
*******************************************************************************

// Description ******************************************************

	Given the head of a singly linked list, reverse the list, and return the reversed list.


// Examples *********************************************************

	Example 1:
		Input: head = [1,2,3,4,5]
		Output: [5,4,3,2,1]

	Example 2:
		Input: head = [1,2]
		Output: [2,1]

	Example 3:
		Input: head = []
		Output: []

*/

// Definition for singly-linked list.
function ListNode(val, next) {
	this.val = (val===undefined ? 0 : val)
	this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
	if(head == null){
		return head;
	}

	let curr = head;
	let prev = null;
	let temp = null;


	while(curr != null){
		prev = curr;
		curr = curr.next;
		prev.next = temp;
		temp = prev;
	}

	return prev;
};