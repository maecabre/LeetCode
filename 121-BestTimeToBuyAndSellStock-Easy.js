/*

*******************************************************************************
121-BestTimeToBuyAndSellStock-Easy.js
*******************************************************************************

// Description ******************************************************

You are given an array prices where prices[i]
is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day
to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction.
If you cannot achieve any profit, return 0.


// Examples *********************************************************

	Example 1:
		Input: prices = [7,1,5,3,6,4]
		Output: 5
		Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
		Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

	Example 2:
		Input: prices = [7,6,4,3,1]
		Output: 0
		Explanation: In this case, no transactions are done and the max profit = 0.

*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

	let lowIndex = prices.length - 2;
	let highIndex = prices.length - 1;
	let low = prices[lowIndex];
	let high = prices[highIndex];
	let maximum = 0;

	for(let i = prices.length - 2; i >= 0; i--){

		if(prices[i] < low){
			lowIndex = i;
			low = prices[lowIndex];
		}

		if(prices[i] > high && i != 0){
			highIndex = i;
			high = prices[highIndex];
			lowIndex = i - 1;
			low = prices[lowIndex];
		}
		
		if(high - low > maximum){
			maximum = high - low;
		}
	}

	if(maximum > 0){
		return maximum;
	} else{
		return 0;
	}
};