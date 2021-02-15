
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?
/*
Example 1:

Input: nums = [2,2,1]
Output: 1
Example 2:

Input: nums = [4,1,2,1,2]
Output: 4
Example 3:

Input: nums = [1]
Output: 1
 

Constraints:

1 <= nums.length <= 3 * 104
-3 * 104 <= nums[i] <= 3 * 104
Each element in the array appears twice except for one element which appears only once.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // if(nums.length === 1) return 1
     
//     let sorted = nums.sort()

//    for(let i = 0; i < sorted.length; i++){
//         if(sorted[i - 1] !== sorted[i] && sorted[i+1] !== sorted[i]){
//             return sorted[i]
//         }
//     }
    
    let hash = {}
    nums.forEach((n) =>{
        if(hash[n]){
            delete hash[n]
        } else {
            hash[n] = 1
        }
    })
   
    return Object.keys(hash)[0]
};