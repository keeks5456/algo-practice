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

we can have a pointer called zero = 0

if i is not 0, assign zero to i to replace it with a none zero number, increment zero at the same time.

then in another loop, let i = zero variable
*/
var moveZeroes = function(nums) {
    let zero = 0
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] != 0){
            nums[zero++] = nums[i]
        }
    }
        
        for(i = zero; i < nums.length; i++){
            console.log(i)
            nums[i] = 0
            
    }
};

/*
check if nums length s 0 or 1, return either

have two pointers
left and right both at zero
temp for moving elements in place

right checks for 0 ints, if right sees a 0 it will swap with left and increment
left will stay put for swapping, when it does swap itll also increment, left will consistently look at 0 elements



*/

var moveZeroes = function(nums) {

    if(nums.length == 0 || nums.length == 1){
        return nums
    }
    
    let right = 0, left = 0
    // let temp;
    
    while(right < nums.length){
        if(nums[right] == 0){
            right ++
        } else {
            temp = nums[left]
            console.log(temp, 'temp')
            nums[left] = nums[right]
            console.log(left, 'left')
            console.log(right, 'right')
            nums[right] = temp
            
            
            left++
            right ++
        }
    }

};
