// Given the root of a binary tree, return the preorder traversal of its nodes' value

// Input: root = [1,null,2,3]
// Output: [1,2,3]
// Example 2:

// Input: root = []
// Output: []
// Example 3:

// Input: root = [1]
// Output: [1]

Constraints:

// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100
 

// Follow up:

// Recursive solution is trivial, could you do it iteratively?


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

//  iterative way to solve


// if root doesnt exist return empty array
// create an empty stack nodeStack and push root node to stack
// while nodeStack is not empty
// * 2.1. Pop an item from stack and add it to the 'result' array.
//   2.2. Push 'right child' of popped item to stack.
//   2.3. Push 'left child' of popped item to stack.

var preorderTraversal = function(root){
    if(root == null){
        return []
    }
       
    let stack = []
    let result = []
    
    stack.push(root)
    
    while(stack.length > 0){
        let current = stack.pop()
        result.push(current.val)
        
        if(current.right) stack.push(current.right)
        if(current.left) stack.push(current.left)
    }
    
    return result
    };

    // recursive way to solve
    // create an empty array to pass in to the rucursive calls each time s that all the elements get added to a single array
    // check if root is empty
    // push the root value into accumulator
    // if a root on the left is not null recursive call preorderTraversal and add root into accumulator
    // if a root on the right is not null recursive call preorderTraversal and add root into accumulator
    // return accumulator
    var preorderTraversal = function(root, acc = []) {
       if(!!root){
           acc.push(root.val)
           if(root.left) preorderTraversal(root.left, acc)
           if(root.right) preorderTraversal(root.right, acc)
       }
        return acc
    };
        
