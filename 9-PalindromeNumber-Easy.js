/*

*******************************************************************************
9-PalindromeNumber-Easy.js
*******************************************************************************

// Description ******************************************************

	Given an integer x, return true if x is palindrome integer.

	An integer is a palindrome when it reads the same backward as forward.
	For example, 121 is palindrome while 123 is not.

// Examples *********************************************************

	Example 1:
		Input: x = 121
		Output: true

	Example 2:
		Input: x = -121
		Output: false
		Explanation:
			From left to right, it reads -121. From right to left, it becomes 121-.
			Therefore it is not a palindrome.

	Example 3:
		Input: x = 10
		Output: false
		Explanation:
			Reads 01 from right to left.
			Therefore it is not a palindrome.

	Example 4:
		Input: x = -101
		Output: false
*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
	var palindromeStatus = true;
	var firstHalfElem;
	var secHalfElem;

	// if length is even
	if((x.toString().length % 2) == 0){
		var medianCeiling = x.toString().length/2;

		for(var i = 0; i < medianCeiling; i++){

			firstHalfElem = x.toString()[i];
			secHalfElem = x.toString()[x.toString().length - 1 - i];
			if(firstHalfElem != secHalfElem){
				palindromeStatus = false;
			}
		}
	}

	// if length is odd
	if((x.toString().length % 2) == 1){
		var median = Math.floor(x.toString().length/2);

		for(var i = 0; i < median; i++){

			firstHalfElem = x.toString()[i];
			secHalfElem = x.toString()[x.toString().length - 1 - i];
			if(firstHalfElem != secHalfElem){
				palindromeStatus = false;
			}
		}
	}

	return palindromeStatus;
};

