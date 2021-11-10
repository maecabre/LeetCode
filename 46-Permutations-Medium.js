/*

*******************************************************************************
46-Permutations-Medium.js
*******************************************************************************

// Description ******************************************************

	Given an array nums of distinct integers,
	return all the possible permutations.
	You can return the answer in any order.



// Examples *********************************************************

	Example 1:
		Input: nums = [1,2,3]
		Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

	Example 2:
		Input: nums = [0,1]
		Output: [[0,1],[1,0]]

	Example 3:
		Input: nums = [1]
		Output: [[1]]

*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    var newNums = new Array();

    // Return array of single nums array
    if(nums.length == 1){
        newNums.push(nums);
        return newNums;
    }

    // Assemble array of two arrays
    if(nums.length == 2){
        newNums.push([nums[0], nums[1]]);
        newNums.push([nums[1], nums[0]]);
    }

    // Handle arrays larger than length 2 through recursion
    if(nums.length > 2){

        var tempNewNums = new Array();
        var numsCopy = nums.slice();    // create copy;
        var numsCopyCursor;

        // For each element in nums
        // Remove first value (numsCopyCursor)
        // Compute permute of smaller array, calling itself (tempNewNums)
        // Append first value to permute output (tempNewNums.unshift(numsCopyCursor))
        // Add arrays to final answer array (newNums.push(tempNewNums))
        // Add first value that was removed to the end of array (numsCopy.push(tempNums))
        for(let i = 0; i < nums.length; i++){

            numsCopyCursor = numsCopy.shift();
            tempNewNums = permute(numsCopy);
            for(let j = 0; j < tempNewNums.length; j++){
                tempNewNums[j].unshift(numsCopyCursor);
                newNums.push(tempNewNums[j]);
            }
            
            numsCopy.push(numsCopyCursor);
        }
    }
        
    return newNums;
};