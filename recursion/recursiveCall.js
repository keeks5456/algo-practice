
function printString(myString){
    console.log(myString[0])
   if(myString.length > 1){
       let ourSubString = myString.substring(1, myString.length)
       printString(ourSubString)
   } else {
       return true
   }
}


function reverseString(str){
    if(str === ""){
        return ""
    } else {
        return reverseString(str.substring(1)) + str.charAt(0)
    }
}

function isPalindrome(string){
    let strLen = string.length
    string = string.toLowerCase()
    if(strLen === 0 || strLen === 1){
        return true;
    } 
    if(string[0] === string[strLen - 1]){
        return isPalindrome(string.slice(1, strLen-1))
    }
    return false
}

function addUpTo(array, index){
   return index ? array[index] + addUpTo(array, --index)  : array[index]
   
}

function maxOf(array){
    if(array.length === 1){
        return array[0]
    } else {
        return Math.max(array.pop(), maxOf(array))
    }
}

function includesNumber(array, index){
    if(!array.length) {
        return false 
    } else if (array[0] === index){
       return true 
    } else {
        return includesNumber(array.slice(1), index)
    }
}

