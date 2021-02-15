// Max Depth of Binary Tree 
// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

 

var maxDepth = function(root) {
    if(root == null){
        return 0
    } else {
        let leftDepth = maxDepth(root.left)
        let rightDepth = maxDepth(root.right)
        var childDepth = leftDepth > rightDepth ? leftDepth : rightDepth;
    return 1 + childDepth
    }
};