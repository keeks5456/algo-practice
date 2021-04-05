function bubbleSort(arr){
  //create a variable called noSwaps
  var noSwaps;
  //iterate through the array with variable i starting at the end off array towards beginning 
  for(var i = arr.length; i > 0; i--){
    //this stays true as long as no swaps are being made
    noSwaps = true
    //iterate thr the array again with variable j starting at the beginning of the array till i - 1 (with each iteration the length of i decreases)
    for(var j = 0; j < i - 1; j++){
      //if our element @ j is greater than the element j + 1 
      if(arr[j] > arr[j + 1]){
        //create swap here 
        var temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        //if there is a swap that happens we set this to false, then iterate over the array again for anther swap
        noSwaps = false
      }
    }
    //this will break out of the iteration if there are no more swaps happening
    if(noSwaps) break;
    console.log("pass complete")
  }
  return arr
}

bubbleSort([37,45,29,8])


// ES2015 Version
function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

//Alex solution
function bubbleSort(arr){
  //assign a block variable to the length of the array
  let block = arr.length 
  //while the block length is not empty
  while(block){ 
    //iterate thrugh the array
    for(let i = 0; i < block; i++){
      //if the item on the left is greater than the item on the right, swap them
      if(arr[i] > arr[i + 1]){
        //assign the holder variable to the larger value item
        var holder = arr[i]
        //assign the smaller value item in place of larger value item
        arr[i] = arr[i + 1]
        // smller value item is now at place of holder which is where it needs t be
        arr[i + 1] = holder
        console.log(arr[i + 1], 'large')
        console.log(arr[i], 'small')
        console.log(holder, "holder")
      }
    }
    //decrement the length of block so that we have less swaps to go through
    block --
  }
  return arr
}

bubbleSort([13,2,1,23,5,43,554,653])

//first memorization 
bubbleSort([8,1,2,3,4,5,6,7]);

function bubbleSort(arr){
  var noSwaps;
  for(let i = arr.length; i > 0; i--){
    noSwaps = true 
    for(let j = 0; j < i - 1; j++){
      if(arr[j] > arr[j + 1]){
        var temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        noSwaps = false 
      }
    }
    if(noSwaps) break
  }
  return arr
}

function bubbleSort(arr){
  let block = arr.length 
  while(block){
    for(let i = 0; i < block; i++){
      if(arr[i] > arr[i + 1]){
        let holder = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = holder
      }
    }
    block --
  }
  return arr
}


function bubbleSort(arr){
  let noSwaps;
  for(var i = arr.length; i > 0; i--){
    noSwaps = true 
    for(let j = 0; j > i - 1; j++){
      if(arr[j] > arr[j + 1]){
        var temp = arr[i]
        arr[i] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
    if(noSwaps) break
  }
  return arr
}

function bubbleSort(arr){
  let block = arr.length
  for(let i = 0; i < block; i++){
    while(block){
      if(arr[i] > arr[i + 1]){
        let holder = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = holder
      }
    }
    block --
  }
  return arr
}