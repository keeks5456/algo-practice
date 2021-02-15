// Implement a function that first finds and removes the smallest element in a sorted array.
// we use shift() here to remove the first element from the array and return it

function findMinAndRemoveSorted(array) {
    return array.shift()
}

// Implement the merge function to combine two sorted arrays into one larger array.
// first we define an empty array to put our sorted elements in
// we need to check to see if both elements are not empty using a while loop
// while one or the ther array is not empty --> if FSA[0] is a lower number than SSA[0] 
// we want to push that lowest number to our sorted array variable to hold
// finally, when one array is empty, that means the remaining elements in the other array are basically sorted -- so we now can concat to pur sorted array the first and second subarrays to get all the elements in sorted variable

function merge(firstSubarray, secondSubArray){
  let sorted = []
  while(firstSubarray.length != 0 && secondSubArray.length != 0){
    if(firstSubarray[0] < secondSubArray[0]){
      sorted.push(findMinAndRemoveSorted(firstSubarray))
    } else {
      sorted.push(findMinAndRemoveSorted(secondSubArray))
    }
  }
  return sorted.concat(firstSubarray).concat(secondSubArray)
}

// Implement the mergeSort algorithm using the previous functions that you wrote.
// we need to split our array in 2 
// indicate the first and second halves by definsing them
// declare and empty sorted variable
// we need to make sure our firstHalf has more than one element, b/c then it is already sorted(?)
// with recursion we call our merge function and pass in our mergeSort function twice passing in firstHalf and secondHalf
// have our sorted variable equal the merge operation b/c then we can return our sorted array

function mergeSort(array){
    let midpoint = array.length / 2
    let firstHalf = array.slice(0, midpoint)
    let secondHalf = array.slice(midpoint, array.length)
    let sorted;


    if(firstHalf < 2){
        return array 
    } else {
         sorted = merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }
    return sorted
}


// By Flatiron Learn Lab