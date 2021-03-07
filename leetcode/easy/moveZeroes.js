/*Move Zeroes

Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.

*/


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/*
we need to move all zeros that we see in the array to the back 
we need to make sure they stay in relative order ==> [0,1,0,3,12] to [1,3,12,0,0]

we can have a pointer called start = 0
loop through the array with i starting at 1

if start is less than i, move start up a spot then start will equal i , i will already move up automatically.
*/
var moveZeroes = function(nums) {
    
};