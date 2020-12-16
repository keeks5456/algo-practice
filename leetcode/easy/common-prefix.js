// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".


//  * @param {string[]} strs
//  * @return {string}
 
var longestCommonPrefix = function(strs) {
    let prefix = ''
    
    if(strs.length === 0 || strs === null) return prefix
    
    for(let i = 0; i < strs[0].length; i++){
      const char = strs[0][i]
      for(let j = 1; j < strs.length; j++){
          if(strs[j][i] !== char) return prefix  
      }
        prefix = prefix + char
    }
    return prefix
}; 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 0 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lower-case English letters.


//we first need to create an empty string variable to equate to the longest common prefix
//we need to make sure the array is not empty or null
//we can now start with a for loop, we can create a nested loop where the first loop iterates over and seearch for first prefix
//the second loop will be the comparison 
//if the prefix in the second loop does not match the first loop, we can return the empty string
//if they do match, we can call our empty string and concat the string to the prefixed word

function longestCommonPre(string){
    prefix = willHoldPrefixes

    arrayEmpty || arrayNull ? return prefix

    for(i=0, i < stringFirstIndex.length, i++){
        characters = stringAtFirstIndexAndI
        for(j = 1, j < string.length, j++){
            if(stringAtJAndI does not equate to charactersVariable) return thePrefix
            otherwise ==> if is equal
        }
        prefix = prefix concat characters
    }
    return thePrefix
}