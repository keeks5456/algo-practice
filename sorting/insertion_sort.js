function insertionSort(array){
    for(let i = 1; i < array.length; i++){
        //we want i to be at 1 b/c if we only have one element in our new sorted array, there is nothing to sort/ compare with
        let j = i - 1 
        //here we let j be 0 b/c we will have j be the "key" or current element we have jump from right to left to find its right placement.
        let temp = array[i]
        while(j >= 0 && array[j] > temp){ 
            // i = 1 --- array[i] = 7
            //  j = 0 --- array[j] = 9
            // 0 >= 0 && 9 > 7
            array[j + 1] = array[j]
            // array[0 + 1] -> 1
            j--
            // 1-- 
        }
        array[j + 1] = temp
        // array[0 + 1] = array[i] --> insertionSort([7,9,8,1,4])
    }
    return array
}
// insertionSort([9, 7, 8, 1, 4])

//alex solution
function insertionSort(arr){
  let block = arr.length
  for(let i = 0; i < block; i++){
    if(arr[i] < arr[i - 1]){
      var holder = arr[i]
      let count = i 
      while(holder < arr[count - 1]){
        arr[count] = arr[count - 1]
        arr[--count] = holder
        
        console.log(holder)
        console.log(count)
        console.log([count - 1])
      }
      console.log(arr, 'arr swap squence')
    }
  }
  return arr
}

insertionSort([22,4,1,66,5,3,7,99,20])

//udemy solution
function insertionSort(arr){
  //start looping at first index
  for(var i = 1; i < arr.length; i++){
    //assign a plae holder varible at the index of i to keep track f the value we are looking at
    var currentVal = arr[i]
    //start working backwards with variable j at the value behind i 
    // ex: if i = 9, we want to start comparing the value of i to the value of j --> j = 1
    //we need to keep going while j is greater than 0 (his up to the beginning of the array)
    //and while j is greater than currentVal variable 
    for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--){
          //ex: is currentVal = 9 smaller than arr[j] = 77 value, yes! then move arr[j] up in the array 
          //[2,4,5,20,77,77]            9 is waitning for its placement
      arr[j + 1] = arr[j]

    }
    //after the loop is done, we have found our placement for currentVal
    //we assign arr[j + 1] to currentVal b/c there will be a duplicate of arr[j] where it was before 
    //       j
    // [2,4,5,20,20,77]          9 waiting
    //       j+1 --> this is where 9 should be now
    arr[j + 1] = currentVal
    
  }
  return arr
}

insertionSort([2,4,5,20,77,9])








//deal with this later
//Flatiron Learn Lab
function findMinAndRemove(array){
    let min = array[0] 
    // we want our min number to be the smallest num in array
    let minIndex = 0 
    // we eventually want there to be a way to get that min number to splice it
    for(let i = 0; i < array.length; i++){
        if(array[i] < min){
            min = array[i]
            minIndex = i
        }
    }
    array.splice(minIndex, 1)
    return min
}

