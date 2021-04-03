//recursion
function selectionSort(array){
  let newMin; 
  let sorted = []
  while(array.length != 0){
      newMin = findMinAndRemove(array)
       //this function has an already sorted array, and assign it to our newMin variable

       //then we can push all the sorted elements to our sorted variable
       sorted.push(newMin)
  }
  return sorted 
  //return our new sorted array
  console.log(sorted)
}



const selectionSort = (arr) => {
  //first iterate over the array with variable i
  for(let i = 0; i < arr.length; i++){
    //assign i as lowest value seen
    let low = i
  }
  //iterate over the loop again, with variable j starting i + 1 
  for(let j = i + 1; j < arr.length; j++){
    //compare j and low, if j is smallest, low will be that new smallest number
    if(arr[j] < arr[low]){
      low = j 
    }
  

  if(i !== low){
  //this is where we start t make our swapping sequence.
  //have a temp variable and assign it to the index of i in arr
  let temp = arr[i]
  //swap our arr[i] witht the lowest index found at variable low
  arr[i] = arr[low]
  //swap low at temp to hold its place for the next lowest integer
  arr[low] = temp
  }
}
return arr

}

function selectionSort(arr){
  for(var i = 0; i < arr.length; i++){
      var lowest = i;
      for(var j = i+1; j < arr.length; j++){
          if(arr[j] < arr[lowest]){
              lowest = j;
          }
      }
      
      if(i !== lowest){
          //SWAP!
          var temp = arr[i];
          console.log(temp, 'temp')
          arr[i] = arr[lowest];
          console.log(arr[i], 'arr[i]')
          arr[lowest] = temp;
          console.log(arr[lowest], 'lowest')
      }
  }
  return arr;
}