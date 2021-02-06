// Given an array nums and a value val, remove all instances of that value in-place and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// The order of elements can be changed. It doesn't matter what you leave beyond the new length.

// Clarification:
// Confused why the returned value is an integer but your answer is an array?

// Note that the input array is passed in by reference, which means a modification to the input array will be known to the caller as well.

// Internally you can think of this:

// // nums is passed in by reference. (i.e., without making a copy)
// int len = removeElement(nums, val);

// // any modification to nums in your function would be known by the caller.
// // using the length returned by your function, it prints the first len elements.
// for (int i = 0; i < len; i++) {
//     print(nums[i]);
// }

// Example 1:

// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2]
// Explanation: Your function should return length = 2, with the first two elements of nums being 2.
// It doesn't matter what you leave beyond the returned length. For example if you return 2 with nums = [2,2,3,3] or nums = [2,2,0,0], your answer will be accepted.


// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2]
var removeElement = function(nums, val) {
    if(nums.length === 0){
        return 0
    } //edge case first

    let start = 0
    let end = nums.length - 1

    while(start <= end){
      if(nums[start] === val){
          nums[start] = nums[end]
          end --
      } else {
          begin ++
      }
    return begin
    }
};

//we need to remove all instance of our value 
// so if value = 3 
// remove from our array = [2,3,3,2] all instances of 3 
// with returns [2,2]

// we dont need to create a new Array, just modify the array in place **
//return that same modified array


// for every element in array 
// if element === value in array
// remove that element 
// return array without duplicate element

// First, we take care of the edge case of an empty array and return 0. Then we use two pointers to organize the order of unique numbers. Since the input array is sorted, all the duplicate numbers will group together. We could define a new array and push unique elements there, but we were asked to modify the given array in-place with O(1) space complexity. We will keep two pointers; one pointer (j) iterates over all the elements in the original array and another pointer (i) will place the new non-duplicate element.
// Whenever we encounter a duplicate element, we move j to the next non-duplicate element. When we see a unique element, we reassign it to the position next to the last non-duplicate number we have encountered. This process doesn’t remove the duplicates in the original array, it just pushes the unique numbers to the left/front of the array. We repeat the same process until the loop finishes and then the function returns the length of the non-duplicate numbers. Note that the pointer i keeps track of the last unique element in the array.