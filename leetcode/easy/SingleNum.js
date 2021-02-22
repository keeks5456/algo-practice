
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
    if(nums.length === 1) return 1
     
    let sorted = nums.sort()

   for(let i = 0; i < sorted.length; i++){
        if(sorted[i - 1] !== sorted[i] && sorted[i+1] !== sorted[i]){
            return sorted[i]
        }
    }
}
//time complexity O(n log n) b/c of sorting

//breakdown
// if the length of our array is 1 ,return 1
// first we need to sort pur array
// then iterate over that sorted array
// if the last  element does not equate to the first element && the 2nd element does not equate to the first element 
//then return that single element 

// Array.sort() => [1,2,2]
// if(array(2) NOT equal array(1) && array(2) NOT equal array(1)) <== true 
// return array(1)



    var singleNumber = function(nums){
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

// breakdown 
// create a hash table
// for each number in num Array
// if the number exist in our hash, we delete it
// if it doesnt assign it a value of one b/c that's our unquie element 
//return the key of our object at first index