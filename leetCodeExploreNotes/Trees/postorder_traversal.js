/* 
* Definition for a binary tree node.
* function TreeNode(val, left, right) {
*     this.val = (val===undefined ? 0 : val)
*     this.left = (left===undefined ? null : left)
*     this.right = (right===undefined ? null : right)
* }
*/
/*
* @param {TreeNode} root
* @return {number[]}
*/

// Input: root = [1,null,2,3]
// Output: [3,2,1]

// Input: root = []
// Output: []

// Input: root = [1]
// Output: [1]

// we first have to vist all the node & children on the left, then the right and then the root
// need  to pop off the leaves first before getting to the root.
// create an empty stack
//create a results variable
//initialize a current variable to root

var postorderTraversal = function(root) {
	if (root == null) {
		return [];
	}

	let stack = [];
	let result = [];

	stack.push(root);

	while (stack.length > 0) {
		let current = stack.pop(); //pop from behind
        result.unshift(current.val); //put to the front
        
        if(current.left) stack.push(current.left) //if there are any remaining left leaves push to stack
        if(current.right) stack.push(current.right) //if there are any remaining right leaves push to stack
	}
	return result;
};
