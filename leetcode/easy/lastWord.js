/**
 * Length Of Last Word
 * 
Given a string s consists of some words separated by spaces, return the length of the last word in the string. If the last word does not exist, return 0.

A word is a maximal substring consisting of non-space characters only.

 

Example 1:

Input: s = "Hello World"
Output: 5
Example 2:

Input: s = " "
Output: 0

 * 
 * @param {string} s
 * @return {number}
 
 know that:
 counts white space
 can start from end and traverse backwards till first white space found -==> " "
 
- find the last element of last word: traverse from the end and find first non-space symbol.
- continue traverse and find first space symbol (or beginning of string)
- return end - beg.


 */
var lengthOfLastWord = function(s) {
    
    let lastWord = s.trim().split(' ') //trim out the white space then split each word with " "
    console.log(lastWord[lastWord.length - 1].length)
    return lastWord[lastWord.length - 1].length // return the count of our lastWord string at the last index and get the length of that last word.
  
};
