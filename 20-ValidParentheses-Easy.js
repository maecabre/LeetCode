/*

*******************************************************************************
20-ValidParentheses-Easy.js
*******************************************************************************

// Description ******************************************************

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.


// Examples *********************************************************

	Example 1:
		Input: s = "()"
		Output: true

	Example 2:
		Input: s = "()[]{}"
		Output: true

	Example 3:
		Input: s = "(]"
		Output: false

	Example 4:
		Input: s = "["
		Output: false

// Initial Thoughts/Notes *******************************************

	• think stack, push, pop
	• create stackArray
	• increment through string s
		• case (
			• add to stack
		• case {
			• add to stack
		• case [
			• add to stack
		• case )
			• if top of stack == (
				• pop
			• else
				• return false
		• case }
			• if top of stack == {
				• pop
			• else
				• return false
		• case ]
			• if top of stack == [
				• pop
			• else
				• return false

*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stackArray = [];

		for(let i = 0; i < s.length; i++){

			switch(s[i]) {

				case "(":
				case "{":
				case "[":
					stackArray.push(s[i]);
					break;

				case ")":
					if(stackArray[stackArray.length - 1] == "("){
						stackArray.pop();
					} else{
						return false;
					}
					break;

				case "}":
					if(stackArray[stackArray.length - 1] == "{"){
						stackArray.pop();
					} else{
						return false;
					}
					break;

				case "]":
					if(stackArray[stackArray.length - 1] == "["){
						stackArray.pop();
					} else{
						return false;
					}
					break;

				default:
					console.log('switch-case error');
					break;
			}
		}
    
		if(stackArray.length === 0){
			return true;
		} else{
			return false;
		}
};