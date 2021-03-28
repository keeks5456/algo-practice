/*
Contains Duplicates 2

Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

Example 1:

Input: nums = [1,2,3,1], k = 3
Output: true
Example 2:

Input: nums = [1,0,1,1], k = 1
Output: true
Example 3:

Input: nums = [1,2,3,1,2,3], k = 2
Output: false
 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
0 <= k <= 105
*/

// var containsNearbyDuplicate = function(nums, k) {
//     let numsMap = new Map()

//     for(let i = 0; i < nums.length; i++){
//       let num = nums[i]

//       if(numsMap.has(num) && i - numsMap.get(num) <= k){
//         return true
//       } else {
//         numsMap.set(num, i)
//       }
//     }
//     return false
// };


var containsNearbyDuplicate = function(nums, k) {
  let hash = new Map()

  for(let i = 0; i < nums.length; i++){
    if(hash.hasOwnProperty(nums[i]) && (i - hash.get(nums[i] <= k))){
      return true
    }
    hash.set(nums[i], i)
  }
  return false
};