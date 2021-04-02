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


