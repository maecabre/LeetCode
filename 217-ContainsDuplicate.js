/*

*******************************************************************************
217-ContainsDuplicate-Easy.js
*******************************************************************************

// Description ******************************************************

Given an integer array nums, return true if any value appears
at least twice in the array, and return false if every element is distinct.


// Examples *********************************************************

	Example 1:
		Input: nums = [1,2,3,1]
		Output: true

	Example 2:
		Input: nums = [1,2,3,4]
		Output: false

	Example 3:
		Input: nums = [1,1,1,3,3,4,3,2,4,2]
		Output: true

// Initial Thoughts/Notes *******************************************

	• increment through array
	• for each value, check if it's already in the set (unique values only)
		• if its already in the set, duplicate found, return true
		• else its not in the set, add to set
	• return false otherwise

*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
	let mySet = new Set();
	let duplicate = false;
	let i = 0;

	// Create set, as numbers are inserted check for duplicates
	while(!duplicate && i < nums.length){

		if(mySet.has(nums[i])){
			duplicate = true;
		} else{
			mySet.add(nums[i]);
			i++;
		}
	}

	return duplicate;
};