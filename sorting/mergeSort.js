/*
 The merge method operates by copying all the elements from the target array segment into a helper array, keeping track of where the start of the left and right halves should be (helperleft and helperRight). We then iterate through helper, copying the smaller element from each half into the array. At the end, we copy any remaining elements into the target array.
*/


//create the merge function, it takes in two arrays 
const merge = (arr1, arr2) =>{
  //create a reults array to return merge srted array
  let results = []
  //assign i and j to 0 as comparison pointers 
  let i = 0, j = 0
  //create a while loop going through both arr1 & arr2 loping at each index
  // while there are still elements in our arrays, do this
  while(i < arr1.length && j < arr2.length){
    //ask if arr1[i] is less that arr2[j]
    if(arr1[i] < arr2[j]){
      //if arr1[i] is smaller, push that number in our results array
      results.push(arr1[i])
      //move to the next value in arr1
      i++
    } else {
      //if arr2[j] is smallest instead push that to our array
      results.push(arr2[j])
    }
  }
  //since there is a possiblity of remaining elements in either of the arrays we must lop through them again while they are not empty
  //while there are still elements in arr1, iterate through them and push them to results array, these remaining elements will already be sorted becasue of merge helper funtion
  while(i < arr1.length){
    results.push(arr1[i])
    i++
  }
   //while there are still elements in arr2, iterate through them and push them to results array, these remaining elements will already be sorted becasue of merge helper funtion
  while(j < arr2.length){
    results.push(arr2)
    j++
  }
}

//helper method to sort the array
const mergeSort = (arr) =>{
  //base case if our array length is too small.
  if(arr.lenght <= 1) return arr 

  //first split the array in half
  let mid = Math.floor(arr.length / 2)
  //assign the left half of the array from beginning to middle
  let left = mergeSort(arr.slice(0, mid))
  //assign the right half of the array from mid to end of array
  let right = mergeSort(arr.slice(mid))
  //return sorted array by calling merge function to merge the now sorted pieces together
  return mergeSort(left, right)
}



function mergeSort(arr) {

  function merge(arr1, arr2) {
     //create a results array
    const newArr = []
    //iterate thru both arrays while they are not empty
    while (arr1.length && arr2.length) { 
      //use the shift method becasue it removes the first element in array.
      if (arr1[0] < arr2[0]) newArr.push(arr1.shift()); 
      else newArr.push(arr2.shift());
      // console.log('newArr', newArr)
    }
    //concat  our sorted elements together into the new array
    return newArr.concat(arr1).concat(arr2);
  } //merging ends here
  
  if (arr.length < 2) return arr; //base case
  const split = Math.floor(arr.length / 2);
  const left = arr.slice(0, split);
  const right = arr.slice(split);
  // console.log('left', left)
  // console.log('right', right)
  // console.log('arr', arr)
  //recursively call our two arrays while merging them by calling our merge function
  return merge(mergeSort(left), mergeSort(right))
}
console.log(mergeSort([13, 2, 1, 23, 5, 432, 2554, 453]))

/*
the time complexity BEST CASE of this is O(n log n)
AVERAGE & WORST depends

Merge sort divides the array in half, sorts each of those halves, and then merges them back together. Each of those halves has the same sorting algorithm applied to it. Eventually, you are merging just two single­ element arrays. It is the "merge" part that does all the heavy lifting.
*/