// Given the root of a binary tree, return the inorder traversal of its nodes' values.

// notes: root is a (binary) tree that optionally contains a left and/or right (binary) tree.
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

var inorderTraversal = function(root) {
    var callStack = [];
    var current = root;
    var result = [];
    while (true) {
      while (!!current) { //while current isnt empty
          callStack.push(current); //push the root int our callStack
          current = current.left; //keepp moving left down the tree
      }

      if (callStack.length == 0) break; // have a break in the loop if the callStack becomes empty.

      var lastCurrent = callStack.pop(); //pop off the remaining nodes into a new variable
        result.push(lastCurrent.val); //push into result the values of lastCurrent FILO
        current = lastCurrent.right; // keep moving right down the tree
    }
      return result //return the results
  }


//   Recursive solution 

function inorderTraversal(root){
    let result = [] //assign a result variable to return later

    if(!!root.left){
        //the root left side is not empty
        result = result.concat(inorderTraversal(root.left)) //keep recursively concating the left nodes in our results
        result = result.push(root.val)
        //take our result and push the values into it
    }
    //same concept for right side of root

    if(!!root.right){
        result = result.concat(inorderTraversal(root.right))
        result = result.push(root.val)
    }
    return result 
}

// another iterative solution

// 1. create an empty stack to push nodes int
// 2. create a results to return at the end
// 3. initialize the root to a current variable 
// 4. while current is not null and stack is not empty
// 5. AND while the current is not null
    // a. push into our stack whatever is in current 
    // b. keep assigning current to the current left nodes
// for the right side we will want to pop off from the stack and add it into pur current variable
// 6. assign current variable the popped pff element in stack
//7. push the current value into our results
//8. keep asssigning the right nodes to current
// 9. return the result



