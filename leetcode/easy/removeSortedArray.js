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
//we 