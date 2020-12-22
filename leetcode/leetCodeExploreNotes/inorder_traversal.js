// Given the root of a binary tree, return the inorder traversal of its nodes' values.


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
// if root is empty return an empty array
//  create an empty stack
// assign a current variable to the root
// push current variable to stack and set current = to current.left till null
// if current === null && stack isnt empty then:
    // pop tp item from stack
    // print the popped item and set current to popped_item.right
    // repeat step 3
// if current === null && stack === empty then return result..?
var inorderTraversal = function(root) {
    if(root === null){
        return []
    }

    let stack = []
    let current = root 

    stack.push(current.left)
};