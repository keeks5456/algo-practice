// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
 

// Example 1:

// Input: s = "()"
// Output: true

// Example 2:

// Input: s = "()[]{}"
// Output: true

// Example 3:

// Input: s = "(]"
// Output: false

// Example 4:

// Input: s = "([)]"
// Output: false

// Example 5:

// Input: s = "{[]}"
// Output: true


// 1 Initialize a stack S.
// 2 Process each bracket of the expression one at a time.
// 3 If we encounter an opening bracket, we simply push it onto the stack. This means we will process it later, let us simply move onto the sub-expression ahead.
// 4 If we encounter a closing bracket, then we check the element on top of the stack. If the element at the top of the stack is an opening bracket of the same type, then we pop it off the stack and continue processing. Else, this implies an invalid expression.
// 5 In the end, if we are left with a stack still having elements, then this implies an invalid expression.

var isValid = function(s) {
    let stack = []
    for(let i = 0; i < s.length; i++){
        let c = s.charAt(i)
        switch(c){
            case '(': stack.push(')')
            break;
            case '[': stack.push(']')
            break;
            case '{': stack.push('}')
            break;
            default:
                if(c !== stack.pop()){
                    return false
                }
        }
       
    }
    return stack.length === 0

};

// - Initialize a stack S.
// - Process each bracket of the expression one at a time.
// - If we encounter an opening bracket, we simply push it onto the stack. This means we will process it later, let us simply move onto the sub-expression ahead.
// - If we encounter a closing bracket, then we check the element on top of the stack. If the element at the top of the stack is an opening bracket of the same type, then we pop it off the stack and continue processing. Else, this implies an invalid expression.
// - In the end, if we are left with a stack still having elements, then this implies an invalid expression.

//more notes

white boarding

// the key is use a stack
// the only thing added to the stack are these [ { (
// if you come across any f these open symbols, add to stack 
// if not one of these, compare to whats at top of stack


// [()]
// start with first element [ <-- open? yes -- add to stack 
// next element ( <-- open ? yes -- add to stack 
// next ) <-- open ? no -- compare to an open parenthesis @ stack, does it close ? yes 
// pop this off top of stack
//  

// solution with a for of loop

var isValid = function(s){
    let stack = new stack()

    for(character of s){ //iterate over every character in the string
        if(character === '(' || character === '{' || character === '['){ // push any of these open symbols to the stack
         stack.push(character)
        } else if(!stack.isEmpty() && character === ')' && stack.peek() === '('){ //as long as the stack is nt empty we can do these -->. peek at the top to see if this closing symbol has a valid opening symbol, also, check if character is closing symbol
            stack.pop()
        } else if(!stack.isEmpty() && character === '}' && stack.peek() === '{'){
            stack.pop()
        } else if(!stack.isEmpty() && character === ']' && stack.peek() === '['){
            stack.pop()
        } else { //have the case in which if these are nt valid we return false
            return false
        }
    }
    return stack.isEmpty() //check to see if stack is empty
}