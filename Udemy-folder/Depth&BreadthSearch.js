// Factorial (!)
//4! = 4 * 3* 2 * 1 = 24
//3! = 3 * 2 * 1 = 6

function factorial(num){
    if(num === 1){ //base case
      return num
    }else {
      return num * factorial(num - 1)
    }
  }
  
  // factorial(4)
  
  //4 * factorial(3)
  //3 * factorial(2)
  //2 * factorial(1)
  // now num === 1 so we can return the stack so 1 -> * 2 -> * 3 -> * 4 = 24
  
  function BST(value){
    this.value = value
    this.left = null
    this.right = null
  }
  
  BST.prototype.insert = function(value){
    if(value <= this.value){
      if(!this.left) this.left = new BST(value)
      else this.left.insert(value)
    }
    else if(value > this.value){
      if(!this.right) this.right = new BST(value)
      else this.right.insert(value) 
    }
  }
  
  // var bst = new BST(50)
  // bst.insert(30)
  // bst.insert(70)
  // bst.insert(20)
  // bst.insert(45)
  // bst.insert(10)
  // bst.insert(35)
  
  
  BST.prototype.contains = function(value){
    if(value === this.value) return true
    else if(value < this.value){
      if(!this.left) return false 
      else return this.left.contains(value)
    }
    else if(value > this.value){
      if(!this.right) return false
      else return this.right.contains(value)
    }
  }
  
  
  //inOrder traversal
  //preorder 
  //postorder
  BST.prototype.depthFirstTraversal = function(iteratorFunc, order){ //another function passed in
    if(order === 'preorder')iteratorFunc(this.value)
  if(this.left) this.left.depthFirstTraversal(iteratorFunc, order)
    if(order === 'inorder') iteratorFunc(this.value)
    if(this.right) this.right.depthFirstTraversal(iteratorFunc, order)
    if(order === 'post-order')iteratorFunc(this.value)
  }
  
  
  // var bst = new BST(50)
  // bst.insert(30)
  // bst.insert(70)
  // bst.insert(60)
  // bst.insert(100)
  // bst.insert(20)
  // bst.insert(45)
  // bst.insert(10)
  // bst.insert(35)
  // bst.insert(85)
  // bst.insert(70)
  
  
  // function log(value){
  //   console.log(value)
  // }
  
  // bst.depthFirstTraversal(log, 'post-order')
  
  
  BST.prototype.breadthFirstTraversal = function(iteratorFunc){
    let queue = [this] //FIFO
    
    while(queue.length){
      var treeNode = queue.shift()
      iteratorFunc(treeNode)
      if(treeNode.left) queue.push(treeNode.left)
      if(treeNode.right) queue.push(treeNode.right)
    }
  }
  
  
  // var bst = new BST(50)
  // bst.insert(30)
  // bst.insert(70)
  // bst.insert(60)
  // bst.insert(100)
  // bst.insert(20)
  // bst.insert(45)
  // bst.insert(10)
  // bst.insert(35)
  // bst.insert(85)
  // bst.insert(59)
  // bst.insert(105)
  
  
  
  // function log(node){
  //   console.log(node.value)
  // }
  
  // bst.breadthFirstTraversal(log)
  
  BST.prototype.getMinVal = function(){
    
  //   if(this.left) return this.left.getMinVal()
  //   else return this.value
    
   let current = this.value
   
   while(current.left != null){
     current = current.left
   }
    return current.left
  }
  
  BST.prototype.getMaxVal = function(){
    if(this.right) return this.right.getMaxVal()
    else return this.val
    
  //   let current = this.value
    
  //   while(current.right != null){
  //     current = current.right
  //   }
  //   return current.right
  }
  
  var bst = new BST(50)
  bst.insert(30)
  bst.insert(70)
  bst.insert(60)
  bst.insert(100)
  bst.insert(20)
  bst.insert(45)
  bst.insert(10)
  bst.insert(35)
  bst.insert(85)
  bst.insert(59)
  bst.insert(105)
  
  function log(node){
    console.log(node)
  }
  
  console.log('MIN', bst.getMinVal())
  // console.log('MAX', bst.getMaxVal()) 
  
  // bst.getMinVal(log)
  // bst.getMaxVal(log)