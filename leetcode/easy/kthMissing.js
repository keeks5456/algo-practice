/*
Kth Missing Positive Number

Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.

Find the kth positive integer that is missing from this array.

*/

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

/*
    what is known? 
- we know that when we count through the array, we can see that our missing numbers are [1,5,6,8,9,10,12,13,...],
- in the 5th place , 9 is the numver we want to reach.
- we can use a for loop to go through the array and say
'when a number from array[i] !== i && it is i === k, we return that number missing.' 

if i starts at 1 && arr[i] starts at 2 we can say that i is missing
but if i is nt the same # as k we dont return it, we keep looping
[2,3,4,7,11]

- Find the difference between 2 consecutive integer in array. (start is the first element and arr[i] is the next element)
- If the difference is greater or equal to current k, substract the difference from k.
- If difference is less than current k, return (start + k) Since the answer is between current consecutive elements.

*/
var findKthPositive = function(arr, k) {
    
    let start = 0 //will be first element
    
    for(let i = 0; i < arr.length; i++){
        if(k > arr[i] -start-1){
            k -= (arr[i] - start - 1)
        } else return start + k
            start = arr[i]
    }
        return arr[arr.length -1] + k
    };
    
    
    /*
      for (let i = 1, j = 0; ; i++)
        if (i === arr[j]) j++;
        else if (k === i - j) return i;
    */
    