/*

*******************************************************************************
242-ValidAnagram-Easy.js
*******************************************************************************

// Description ******************************************************

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
typically using all the original letters exactly once.


// Examples *********************************************************

	Example 1:
		Input: s = "anagram", t = "nagaram"
		Output: true

	Example 2:
		Input: s = "rat", t = "car"
		Output: false

	Example 3:
	Input: s = "aacc", t = "ccac"
	Output: false

*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

	let hashSetS = {};
	let hashSetT = {};

	// Check length
	if(s.length != t.length){
		return false;
	} else{

		// Populate Hash Sets
		for(let i = 0; i < s.length; i++){
			
			// hashSetS
			if(!hashSetS[s[i]]){
				hashSetS[s[i]] = 1;
			} else{
				hashSetS[s[i]]++;
			}

			// hashSetT
			if(!hashSetT[t[i]]){
				hashSetT[t[i]] = 1;
			} else{
				hashSetT[t[i]]++;
			}
		}

		// Verify same key value pairs
		for(let [key, value] of Object.entries(hashSetS)){
			if(hashSetT[key] !== hashSetS[key]){
				return false;
			}
		}

		return true;
	}
};