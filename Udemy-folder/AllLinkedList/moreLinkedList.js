class Node{
  constructor(val){
    this.val = val
    this.next = null
  }
}

class Singly{
  constructor(){
    this.length = 0
    this.head = null
    this.tail = null
  }
  push(val){
    //create a new node using our Node constructor
    var newNode = new Node(val)
    if(!this.head) {
      //if empty, assign the head to newNode
      this.head = newNode
      //point the tail to the head
      this.tail = this.head
    } else {
      //if there already is a head value, assign the next tail to the newNode
      this.tail.next = newNode
    }
    //increment the length
    this.length ++
    return this
  }
}

// var first = new Node("hi")
// first.next = new Node('there')
// first.next.next = new Node('pal')

var list = new Singly()
list.push('Whats up')
list.push('loser')
list.push(99)