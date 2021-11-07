/*

*******************************************************************************
28-Implement-strStr()-Easy.js
*******************************************************************************

// Description ******************************************************

	Implement strStr().

	Return the index of the first occurrence of the needle in a haystack,
	or -1 if needle is not part of haystack.

	Clarification:
	What should we return when needle is an empty string?
	For the purpose of this problem, we will return 0 when needle
	is an empty string. This is consistent to C's strstr() and Java's indexOf().


// Examples *********************************************************

	Example 1:
		Input: haystack = "hello", needle = "ll"
		Output: 2

	Example 2:
		Input: haystack = "aaaaa", needle = "bba"
		Output: -1

	Example 3:
		Input: haystack = "", needle = ""
		Output: 0

*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    
    // Return 0 if no needle exists
	if(needle == ''){
		return 0;
	}

	var needleIndex = 0;
	var needleCopy = '';

    // Search for needle substring in haystack
    for(var i = 0; i < haystack.length; i++){
    	// if needle is empty, assemble needleCopy
    	// else if needle not empty, exhange
    	if(needleCopy.length != needle.length){
    		needleCopy += haystack[i];
    	} else if(needleCopy.length == needle.length){
    		needleCopy += haystack[i];
    		needleCopy = needleCopy.substring(1,needleCopy.length);
    	}

        // Was needle found?
    	if(needleCopy == needle){
    		return i - needleCopy.length + 1;
    	} 
    }
    
    // Needle was not found
    return -1;
};

