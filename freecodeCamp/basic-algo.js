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


  