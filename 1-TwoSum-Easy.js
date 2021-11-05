/*

*******************************************************************************
1-TwoSum-Easy.js
*******************************************************************************

// Description ******************************************************

	Given an array of integers nums and an integer target,
	return indices of the two numbers such that they add up to target.

	You may assume that each input would have exactly one solution,
	and you may not use the same element twice.
	
	You can return the answer in any order.


// Examples *********************************************************

	Example 1:
		Input: nums = [2,7,11,15], target = 9
		Output: [0,1]
		Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

	Example 2:
		Input: nums = [3,2,4], target = 6
		Output: [1,2]

	Example 3:
		Input: nums = [3,3], target = 6
		Output: [0,1]

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
		var difference = "";
		var arr = [];
		// For each element in array, find difference from target
		// Increment through array, find element that matches the difference
		for(var i = 0; i < nums.length; i++){
				difference = target - nums[i];
				for(var j = 0; j < nums.length; j++){
						if(difference == nums[j] && i < j){
								arr.push(i);
								arr.push(j);
								return arr;
						}
				}
		}
};