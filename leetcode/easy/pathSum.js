/*Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

A leaf is a node with no children.

Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
Output: true

*/

/*
I: root = [5,4,8,11,null,13,4,7,2,null,null,null,1]
    targetSum = 22
O: true
C: value of node is greater than 0 and less than 100
    target is non negative and less than 1000
    
what methods can we use?
    1. recursion: where we recursively call from root down to the left or right leaves and add them up together and compare it to target sum
    2. we can do a depth First search and traverse down the tree to the smallest numbers first and add them up then compare them to target sum
    
    pseudo: use recursion calls
    if tree is empty return false
   create a count 
 while root isnt null{
 while left isnt null & right isnt null
 
for every encounter we have going left or right we get that leaf and plus equal it to our count recursively calling left or right till null 
then at end of traversal we compare our count to the targetSum, and return true if they are equal, otherwise keep traversing.

return false if none of the numbers down the tree add up to the targetSum
 }
    
*/
var hasPathSum = function(root, targetSum) {
    if(root === null) {
        return false 
    }
    
    if(root.left == null && root.right == null && targetSum == root.val) return true
    
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
};

//The basic idea is to subtract the value of current node from sum until it reaches a leaf node and the subtraction equals 0, then we know that we got a hit. Otherwise the subtraction at the end could not be 0.

/*
we want to check if the root left and right are both null, we know that our targetSum is the same as the root value

in order to traverse the tree and see if the left or the right has the exact values to add up to our target, we can recursively call left and subtract our taarget to that root value and return it

OR 
do the same idea but going right and return that recursive call
*/
// var hasPathSum = function(root, targetSum) {
//     if(root === null) {
//         return false 
//     }

//     if(root.left == null && root.right == null ) return targetSum == root.val
    
//     return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
// };


