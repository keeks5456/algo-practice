// 7. Reverse Integer
// Easy

// 3908

// 6063

// Add to List

// Share
// Given a 32-bit signed integer, reverse digits of an integer.

// Note:
// Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

 

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
// Example 4:

// Input: x = 0
// Output: 0
 

// Constraints:

// -231 <= x <= 231 - 1




/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let numbers = ("" + x).split("").reverse().join("")
    console.log(numbers)
    return numbers
};
// this only works for positive numbers 

// var newNum = []
// const reverse = (x) =>{
//     let numbers = ("" + x).split("")
//     for(let i = 0; i < numbers.length; i++){
//     let popped = numbers.pop()
//     }
//     newNum.push(popped)
//     console.log(newNum)
    
//     return newNum.join("")
//     }

//still working on this one

var reverse = function(x) {
    
  const reversedInt = parseInt(Math.abs(x).toString().split('').reverse().join(''));
  
  if (reversedInt > 2**31) return 0;
  
  return reversedInt * Math.sign(x);
    
};

function reverse(x) {
    const neg = x < 0;
    let num = neg ? (x *= -1) : x;
    let result = neg ? "-" : "";
    while (num > 0) {
      let r = num % 10;
      num = (num - r) / 10;
      result += r.toString();
    }
    return parseInt(result);
  }
  console.log(reverse(123));
  console.log(reverse(-123));

  