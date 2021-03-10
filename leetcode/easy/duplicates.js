/**
 * 
 
Contains Duplicates
 Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.


 * @param {number[]} nums
 * @return {boolean}
 */

/*
I: [1,2,3,1]
O: boolean true

pseudocode:

if length of array is empty return false

has mapping = {}

for every element in nums, we assign our key to 1 if first encounter
or 
assign + 1 if we encounter that number again

loop through array and see if our has map at index of i has a value greater than 1 we can return true


*/
var containsDuplicate = function(nums) {
    
    let mapCounter = {}
    
    for(let element of nums){
       mapCounter[element] = (mapCounter[element] + 1 || 1 )
    }
    
    for(let i = 0; i < nums.length; i++){
        if(mapCounter[nums[i]] > 1){
            console.log(mapCounter[nums[i]])
            console.log(nums[i])
            return true
        }
    }
    return false 
};