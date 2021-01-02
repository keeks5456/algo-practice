// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its level order traversal as:
// [
//   [3],
//   [9,20],
//   [15,7]
// ]

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
 * @return {number[][]}
 */

 //check if the root is empty
//  initialize a results array
//push our root into a queue array
// while th queues' length is not empty
// initialize another empty array (subarray)
// create a for loop to got through our tree leaf by leaf 
//with every leaf touched, pop off the last and let that be the current node 
// push the current node into our subarray
// if there is a leaf on the left of the current node, add to the front of our queue that left node leaf
// if there is a leaf on the right of the current node, add to the front of our queue that right node leaf
// when done push all of our subarray to our results 
// return those results
var levelOrder = function(root) {
    if(root == null) return []
    let results = []
    let queue = [root]

    while(queue.length > 0){
        let subarray = []

        for(let i = 0; i < queue.length; i++){
            let currentNode = queue.pop()
            subarray.push(currentNode.val)
            if(currentNode.left) queue.unshift(currentNode.left)
            if(currentNode.right) queue.unshift(currentNode.right)
        }
        results.push(subarray)
    }
    return results
};