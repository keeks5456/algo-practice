// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// Example


// There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. 
//The number of pairs is 2.

// Function Description

// Complete the sockMerchant function in the editor below.

// sockMerchant has the following parameter(s):

// int n: the number of socks in the pile
// int ar[n]: the colors of each sock
// Returns

// int: the number of pairs

// Input Format

// The first line contains an integer n, the number of socks represented in ar.
// The second line contains n space-separated integers, ar[i], the colors of the socks in the pile.

// Constraints

//  where 
// Sample Input

// STDIN                       Function
// -----                       --------
// 9                           n = 9
// 10 20 20 10 10 30 50 10 20  ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
// Sample Output

// 3

// Complete the sockMerchant function below.

function sockMerchant(n, ar) {
  if(!ar || ar.length !== n) return 0

let pairs = 0
let obj = {}

for(let num of ar){
  obj[num] = obj[num] + 1 || 1

}
for(let num of ar ){
    obj[num] = obj[num] % 2 === 0
    pairs += obj[num]
}
return pairs

}

//we need a counter to keep track of the pairs
// create an empty object -- this is for speed (google hash tables for more information)

// basically for every number we want to be our key that will take in a value of each time we come across these numbers -->
// 10: 1 + 1 + 1 + 1
// 20: 1 + 1 + 1
// 30: 1 
// 50: 1

// with every pair we come across we increment our pair variable by one -->

// 10: (1 + 1 + 1 + 1) pair = 1
// 20: (1 + 1) pair = 3
// 30: 1 pair = 3
// 50: 1 pair = 3

// to put in terms i understand -->

// for every number in array, assign the object at key of number to either append to 0 or 1 (this is for every encounter we have through the loop) 
// fr every number in the array, assign the object at key of number when its divisible by 2 and equates to 0
// increment and equal our pairs counter to the number that the object[number] at that number
// return the total pairs







