function insertionSort(array){
  //iterate thru the array with variable i starting at 1
    for(let i = 1; i < array.length; i++){
      //assign j to be behind i by 1
        let j = i - 1 
        //assign a temp array in place of arr[i] {this will be useful for the switch}
        let temp = array[i]
        //while j is greater than 0 && it's value is larger than temp
        while(j >= 0 && array[j] > temp){ 
          //move that larger value up in the array
            array[j + 1] = array[j]
            //move j down
            j--
        }
        //here j + 1 has a duplicate copy f self, there is where temp as the smaller value needs to be placed
        array[j + 1] = temp
    }
    //return fully sorted array
    return array
}
insertionSort([9, 7, 8, 1, 4])



//alex solution
function insertionSort(arr){
  //assign a block variable to the length of the array
  let block = arr.length 
  //with variable i, iterate thrugh the block array
  for(let i = 0; i < block; i++){
    //if the value at i is less than the value behind i 
    //ex: say we are at i = 20 sot i - 1 = 99
    if(arr[i] < arr[i - 1]){
      //assign a holder variable in place of index arr[i]
      var holder = arr[i]
      //create a count variable
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
    // ex: if i = 9, we want to start comparing the value of currentVal to the value of j --> j = 77
    //we need to keep going while j is greater than 0 (is up to the beginning of the array)
    //and while arr[j] is greater than currentVal variable 
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

//memorization practice
function insertionSort(arr){
  for(let i = 1; i < arr.length; i++){
    let currentVal = arr[i]
    for(let j = i - 1; j >= 0 && arr[j] > currentVal; j--){
      arr[j] = arr[j + 1]
    }
    arr[j + 1] = currentVal
  }
  return arr
}


function insertionSort(arr){
  for(var i = 1; i < arr.length; i++){
    let j = i - 1
    var temp = arr[i]
    while(j >= 0 && arr[j] > temp){
      arr[j+1] = arr[j]
      j--
    }
    arr[j+1] = temp
  }
  return arr
}
insertionSort([2,4,5,20,77,9])





function insertionSort(arr){
  for(let i = 1; i < arr.length; i++){
    let currentVal = arr[i]
    for(let j = i - 1; j >= 0 && arr[j] > currentVal; j--){
        arr[j + 1] = arr[j]
    }
    arr[j + 1] = currentVal
  }
  return arr
}

function insertionSort(arr){
  for(let i = 0; i < arr.length; i++){
    var j = i - 1
    var temp = arr[i]
    while(j >= 0 && arr[j] > temp){
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = temp
  }
  return arr
}