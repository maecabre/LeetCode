/*

*******************************************************************************
169-MajorityElement-Easy.js
*******************************************************************************

// Description ******************************************************

	Given an array nums of size n, return the majority element (mode in a set).

	The majority element is the element that appears more than ⌊n / 2⌋ times.

	You may assume that the majority element always exists in the array.


// Examples *********************************************************

	Example 1:
		Input: nums = [3,2,3]
		Output: 3

	Example 2:
		Input: nums = [2,2,1,1,1,2,2]
		Output: 2

*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
	// Sort array
	// Return median
    nums.sort((a, b) => (a - b));
    return nums[Math.floor(nums.length/2)];
};
