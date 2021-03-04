/*implement a function called countUniqueValues which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will be sorted 

I: countUniqueValues([1,1,1,1,1,2]), O: 2
I: countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]), O: 7

approach: 
-can have two pointers, pointer A can start at [0], pointer B can start at 1
-we can create a counter variable that counts how many non equal (unique) elements we have encountered
-whenever A & B are not the same element, whatever B lands on we assign it to A and move up. if the values are the same only B moves up while A stays 
- whenever they are the same we do nothing.
-to see how many unique elements we have, we return A + 1 becasue A initially starts at 0
*/

function countUniqueValues(arr){
    if(arr.length === 0) return 0

    var i = 0 //initializea start variable
    for(let j = 1; j < array.length; j++){ //iterate thrugh the array with j starting at the 1st index and moving up.
        if(arr[i] !== arr[j]){ //if i and j dont match 
            i++ //move i up an index
            arr[i] = arr[j] //assign i to whatever that unique number is
        }
    }
    return i + 1 //return i + 1 b/c i is starting at 0 when the cunt should be at 1.
}

// Linear time O(n) only looping once 

