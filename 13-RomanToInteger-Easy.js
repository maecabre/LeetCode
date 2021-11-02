/*

*******************************************************************************
13-RomanToInteger-Easy.js
*******************************************************************************

// Description ******************************************************

	Symbol       Value
	I             1
	V             5
	X             10
	L             50
	C             100
	D             500
	M             1000

	Given a roman numeral, convert it to an integer.


// Examples *********************************************************

	Example 1:
		Input: s = "III"
		Output: 3

	Example 2:
		Input: s = "IV"
		Output: 4

	Example 3:
		Input: s = "IX"
		Output: 9

	Example 4:
		Input: s = "LVIII"
		Output: 58
		Explanation: L = 50, V= 5, III = 3.

	Example 5:
		Input: s = "MCMXCIV"
		Output: 1994
		Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

*/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
	var integer = 0;
	var lastNum = 0;
	var currentNum = 0;

	// read string right to left
	for(var i = s.length - 1; i > -1; i--){

		if(i < s.length - 1){
			lastNum = currentNum;
		}

		switch(s[i]){
			case "I":
				currentNum = 1;
				break;
			case "V":
				currentNum = 5;
				break;
			case "X":
				currentNum = 10;
				break;
			case "L":
				currentNum = 50;
				break;
			case "C":
				currentNum = 100;
				break;
			case "D":
				currentNum = 500;
				break;
			case "M":
				currentNum = 1000;
				break;
			default:
				currentNum = 0;
				break;
		}

		if(currentNum >= lastNum){
			integer += currentNum;
		} else if(currentNum < lastNum){
			integer -= currentNum;
		}

	}

	console.log(integer);
	return integer;
};