var removeDuplicates = function(nums) {
    
    if(nums.length === 0){
       return 0
       }
    
    let left = 0 //keep track of the current element
    let right = 1 //for unique elements

    while(right < nums.length){
        if(nums[left] != nums[right]){
            left ++
            nums[left] = nums[right]
        }
        right ++ 
    }
    return left + 1
};

// notes to look for 
// this is a sorted array! there for if we know there are removeDuplicates, we will know what place the duplicate will be which is directly after its next elements
//realize the first num is always unqiue so start at 1

// we want to compare the two numbers if they are the same, and if they arent the SyncManager, we want to place that number at our index

//pseudocode
// assign a pointer to the unique element 
// --iterate through the array 
// --if the current index is not the same as our unique element, we must place current index on whatever element we are on. 
// increment up 
// index should now hold last unique element in array, so return index

var removeDuplicates = function(nums) {
    
 let index = 1 // start at unique element

 for(let i = 0; i < nums.length -1; i++){ // we say -1 so that when comparing the 2nd to last element, we dont go out of bounds
     if(nums[i] != nums[i + 1]){ // if nums[0] not equal to nums[1] assign nums[1] to index (becasue that is a unique element)
         nums[index ++] = nums[i + 1] // increment index up to not overwrite the value 
     }
 }
 return index // index should be holding the last unique element in our array, which is the length of new array
};


// time complexity O(n) for both solutions because it has to iterate n times -- this is a linear search