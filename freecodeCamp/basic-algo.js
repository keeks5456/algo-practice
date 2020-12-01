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
  