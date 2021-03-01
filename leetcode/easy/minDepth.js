//Min Depth Of Binary Tree

// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.

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
 * @return {number}
 */

/*
first check if root is null ==> return 0

check if root has a value but not left or right leaves ==> return 1

if the right leaves are null ==> recursively call left leaves + 1

if the left leaves are null ==> recursively call right leaves + 1

using Math.min() to find a minimum of nums ==> return the minimum of both recursively called leaves

*/
var minDepth = function(root) {
    if(root == null) return 0
    
if(root.left === null && root.right === null) return 1 
    //if there are empty leaves at left and right of root return 1 this is the height
    
    if(!root.left){ //if no leaves @ left
        return minDepth(root.right) + 1 //recursively return right leaves + 1
    } 
    if(!root.right){ //if no leaves @ right
        return minDepth(root.left) + 1  ////recursively return right leaves + 1
    }
    
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1 
    //return the minimum of both left and right leaves and add one
};
