/*

*******************************************************************************
868-BinaryGap-Easy.js
*******************************************************************************

// Description ******************************************************

	Given a positive integer n, find and return the longest distance between any
	two adjacent 1's in the binary representation of n.
	If there are no two adjacent 1's, return 0.

	Two 1's are adjacent if there are only 0's separating them (possibly no 0's).
	The distance between two 1's is the absolute difference between their bit positions.
	For example, the two 1's in "1001" have a distance of 3.



// Examples *********************************************************

	Example 1:
	Input: n = 22
	Output: 2
	Explanation: 22 in binary is "10110".
	The first adjacent pair of 1's is "10110" with a distance of 2.
	The second adjacent pair of 1's is "10110" with a distance of 1.
	The answer is the largest of these two distances, which is 2.
	Note that "10110" is not a valid pair since there is a 1 separating the two 1's underlined.

	Example 2:
	Input: n = 5
	Output: 2
	Explanation: 5 in binary is "101".


	Example 3:
	Input: n = 6
	Output: 1
	Explanation: 6 in binary is "110".


	Example 4:
	Input: n = 8
	Output: 0
	Explanation: 8 in binary is "1000".
	There aren't any adjacent pairs of 1's in the binary representation of 8, so we return 0.


	Example 5:
	Input: n = 1
	Output: 0
*/


/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {
	binaryNum = n.toString(2);
	var startVal = -1;
	var endVal = -1;
	var gap = 0;
	for(var i = 0; i < binaryNum.length; i++){
		if(binaryNum[i] == 1 && startVal == -1){
			startVal = i;
		}
		else if(binaryNum[i] == 1 && endVal == -1){
			endVal = i;
			if((endVal - startVal) > gap){
				gap = endVal - startVal;
			}
			startVal = endVal;
			endVal = -1;
		}
	}
	return gap;
};