
// credit to this solution goes out to the Dev Blog created by Elizabeth Diang. I Am not a mathmatical person at all, following thier blog was helpful and insightful! 

// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
// Follow up: Could you solve it without converting the integer to a string?



const isPalindrome = (x) =>{
    if(x < 0) return false
    
    let reversed = 0, y = x

    while( y > 0){
        const lastDigit = y % 10
        reversed = (reversed * 10 ) + lastDigit
        y = (y / 10) | 0
    }
    return x === reversed
}

isPalindrome(-121)

// First, we check and see if the number is negative. If it is, then we know it's not a palindrome because the numbers will read differently backwards and forwards.

// If the number is positive, we'll create two variables. The first variable reversed will store our reversed number, and the second variable y is copy of our input number. y will be used to reverse the input number without modifying our original input.

// Get the last digit of the number using the modulo (%) operator. This is one trick that can help you isolate the last digit for future problems. Here, we're dividing y by 10 and returning the remainder. Let's refer to the example input 121. The hundreds column 100 is divided by 10 with a remainder of 0, and the tens column 20 is divided by 10 with a remainder of 0. When we divided the ones column 1 by 10, we'll get a remainder of 1 since 1 can't be divided by 10 evenly. 

// We append the last digit to reversed. We have to multiply reversed by 10 on the right side of the assignment to ensure that we're always appending lastDigit to the ones column.

// Remove the last digit from y by dividing it by 10, and truncating the last decimal. We can do this using the bitwise OR operator |. This is another trick that can help you in future JS problems. In this case, we're converting the result into an integer, and then return the new integer:

// This solution saved us from having to traverse an array of string digits, which means we didn't have to use extra storage for this problem! When trying to find a mathematical approach to a coding question, think about any patterns you notice, and ask yourself if you need to read one digit at a time. If so, you can definitely traverse a number's digits with modulo arithmetic and division.


