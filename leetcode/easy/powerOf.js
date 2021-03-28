/*
Power of Three
Given an integer n, return true if it is a power of three. Otherwise, return false.

An integer n is a power of three, if there exists an integer x such that n == 3x.

  */
/**
 * @param {number} n
 * @return {boolean}
 
 we know that 1 power of 3 is true 
 
most nums divisible by 3 will be true
even numbs will return false 
 */

//recursive
var isPowerOfThree = function(n) {
    if(n == 1) return true
    
    if(n % 3 != 0 || n == 0) return false
    
    return isPowerOfThree(n/3)
};
//iteratively
var isPowerOfThree = function(n) {
    if(n == 0) return false
    
    while(n != 1){
        if(n % 3 != 0){
            return false 
        }
        n = n / 3
    }
    return true
};