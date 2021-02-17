Plus One

/*Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself. */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
// var plusOne = function(digits) {
   
//   for(let i = digits.length - 1; i >= 0; i-- ){
//      if(digits[i] !== 9){
//          digits[i] ++
//          return digits
//      } else {
//          digits[i] = 0
//      }
//   }
//     digits.unshift(1)
//     return digits
// };

var plusOne = function(digits) {
   
    let i = digits.length -1 
    
    while(i >= 0 && digits[i] === 9) {
           digits[i] = 0
           i --
    }
        if(i < 0){
            digits.unshift(1)
        }else {
            digits[i] += 1
        }
        return digits
    };
    