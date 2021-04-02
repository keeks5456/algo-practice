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

