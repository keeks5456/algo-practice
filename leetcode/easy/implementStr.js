//Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack. 
//when a problem in JS asks you to retun the index of an occurrence or -1 that just means to use indexOf() it handles that for you

// what should we return when +needle+ is empty string? <-- good interview question
// return 0 when empty

var strStr = function(haystack, needle) {
    if(needle === "") return 0 //edge case

    return haystack.indexOf(needle)
};


//input
// "hello"
// "ll"

// output
// => 2