// Convert Celsius to FahrenheitPassed

// The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
// You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.

function convertToF(celsius) {
    let fahrenheit;
    fahrenheit = (celsius * (9 / 5)) + 32
    return fahrenheit;
  }
  
  convertToF(30);

//   remember the PEMDAS - order of operation! 
// in order to find the fahrenheit, we need to multiply celsius to the result of 9 divided by 5 in parenthesis. 
// with the results of that we add 32 with it and that will be assigned to fahrenheit

// Reverse a String

// Reverse the provided string.
// You may need to turn the string into an array before you can reverse it.
// Your result must be a string.
  
function reverseString(str) {
    return str.split('').reverse().join(''); //using built in methods
  }
  reverseString("hello"); 

//   recursive way
  function reverseString(str){
      if(str === " "){
          return ""
      } else {
          return reverseString(str.subStr(1)) + str.charAt(0)
      }
  }

//The ** substr() method returns a portion of the string, starting at the specified index and extending for a given number of characters afterwards.

const str = 'Mozilla';

console.log(str.substr(1, 2));
// expected output: "oz"

console.log(str.substr(2));
// expected output: "zilla"



// Factorialize a Number

// Return the factorial of the provided integer.
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
// Factorials are often represented with the shorthand notation n!
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
// Only integers greater than or equal to zero will be supplied to the function.

// Recursive Solution
function factorialize(num) {
    if(num < 0){
      return -1
    } else if(num == 0){
      return 1
    } else {
     return num * factorialize(num - 1)
    }
  }
  
  factorialize(5);
  
//Using a For Loop
  const factorialize = (num) =>{
      for(var product = 1; num > 0, num --){
          product *= num 
      }
      return product
  }

//   Since the return values for the function will always be greater than or equal to 1, product is initialized at one. For the case where the number is 0, the for loop condition will be false, but since product is initialized as 1, it will have the correct value when the return statement is executed.

//   For all numbers passed to the function which are greater than one, the simple for loop will decrement num by one each iteration and recalculate product down to the value 1.
  

// Find Longest Word In A String

function findLongestWordLength(str) {
    let array = str.split(' ') 
    //split string into array
    console.log(array)
    let currentLen = 0; 
    //Declare a variable to keep track of the maximum length and loop from 0 to the length of the array of words.
    for(let i = 0; i < array.length; i++){
      if(array[i].length > currentLen){
        currentLen = array[i].length
      }
      //Then check for the longest word by comparing the current word to the previous one and storing the new longest word. At the end of the loop just return the number value of the variable currentLen.
    }
    return currentLen;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");

//   Using .map()

function findLongestWordLength(str) {
    return Math.max(...str.split(' ').map(word => word.length))
  }
  findLongestWordLength("The quick brown fox jumped over the lazy dog");

//   the breakdown

// using Math.max(), we will be able to find the max largest of the given numbers
// using .split() we want to split the string into an array 
// using .map(), we want to create another array, made from the length of each element from out split array
// ==> .map(word => word.length) this will give us the numbered length of each word
// using the spread operator (...) we can pass the array as an argument for Math.max()

