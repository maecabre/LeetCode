/*

*******************************************************************************
125-ValidPalindrome-Easy.js
*******************************************************************************

// Description ******************************************************

A phrase is a palindrome if, after converting all uppercase letters into
lowercase letters and removing all non-alphanumeric characters,
it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.


// Examples *********************************************************

	Example 1:
		Input: s = "A man, a plan, a canal: Panama"
		Output: true
		Explanation: "amanaplanacanalpanama" is a palindrome.

	Example 2:
		Input: s = "race a car"
		Output: false
		Explanation: "raceacar" is not a palindrome.

	Example 3:
		Input: s = " "
		Output: true
		Explanation: s is an empty string "" after removing non-alphanumeric characters.
		Since an empty string reads the same forward and backward, it is a palindrome.

// Initial Thoughts/Notes *******************************************

	• remove non-alphanumeric characters
	• convert uppercase letters to lowercase
	• 2 pointers: head, tail
	• while head and tail do not cross, compare head and tail
		• if head does not equal tail, not a palindrome, return false
		• else head and tail crossed, exit while-loop

*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // Remove non-alphanumeric characters, Set to LowerCase
	// ^ = NOT, a-z = letters, 0-9 = numbers, g = replace all occurences found, i = ignore cases
	let sModified = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
	let head = 0;
	let tail = sModified.length - 1;

	while(head < tail){
		if(sModified[head] != sModified[tail]){
			return false;
		} else{
			head++;
			tail--;
		}
	}

	return true;
};