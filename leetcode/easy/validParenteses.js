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