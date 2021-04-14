
function LinkedList() {
    this.head = null;
    this.tail = null;
  }
  
  function Node(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
  
  var node1 = new Node(100, 'node2', null); //instance of Node() constructor function
  // console.log(node1)
  
  LinkedList.prototype.addToHead = function (value) {
    var newNode = new Node(value, this.head, null);
  
    if (this.head) this.head.prev = newNode;
    else this.tail = newNode;
    this.head = newNode;
  };
  
  //add to head method
  var ll = new LinkedList();
  
  ll.addToHead(100); //first node as head and tail
  ll.addToHead(200);
  ll.addToHead(300);
  // console.log(ll)
  //circular === refrences the node in front and back
  
  //add to tail method
  LinkedList.prototype.addToTail = function (value) {
    var newNode = new Node(value, null, this.tail);
    //is not empty?
    if (this.tail) this.tail.next = newNode;
    else this.head = newNode;
    this.tail = newNode;
  };
  
  // var myLL = new LinkedList();
  // myLL.addToTail(10);
  // myLL.addToTail(20);
  // myLL.addToTail(30);
  // myLL.addToHead(100);
  
  //remove head
  LinkedList.prototype.removeHead = function () {
    //takes n params
    //check if empty
    if (!this.head) return null;
    var val = this.head.value;
    this.head = this.head.next;
    if (this.head) this.head.prev = null;
    else this.tail = null;
    return val;
  };
  
  var ll = new LinkedList();
  ll.addToHead(1000);
  ll.addToHead(2000);
  ll.addToTail(3000);
  
  // console.log(ll.removeHead()) //logged 2000
  // console.log(ll.removeHead()) //logged 1000
  
  //remove tail
  LinkedList.prototype.removeTail = function () {
    //takes no params
    //check if empty
    if (!this.tail) return null;
    var val = this.tail.value; //store value of tail node
    this.tail = this.tail.prev;
    if (this.tail) this.tail.next = null;
    else this.head = null; //tail will already = null
    return val;
  };
  
  var ll = new LinkedList();
  ll.addToHead('0ne');
  ll.addToHead('two');
  ll.addToHead('three');
  
  // console.log(ll.removeTail()) //logged 3000
  // console.log(ll.removeTail()) //logged 1000
  
  LinkedList.prototype.search = function(searchValue){
    var currentNode = this.head
    while(currentNode){
      if(currentNode.value === searchValue) return currentNode.value
      currentNode = currentNode.next //as long as node is not null or undefined keeps going
    }
    return null
  }
  
  // var ll = new LinkedList()
  
  // ll.addToHead(123)
  // ll.addToHead('two')
  // ll.addToHead(22)
  // ll.addToTail('bye')
  // ll.addToTail(999)
  // ll.addToHead('hello')
  
  LinkedList.prototype.indexOf = function (value) {
  //redo this whole today
  };
  
  //return the index of out value in an array
  var myLl = new LinkedList();
  
  myLl.addToHead(123);
  myLl.addToHead('two');
  myLl.addToHead(22);
  myLl.addToTail('bye');
  myLl.addToTail(22);
  
  myLl.indexOf(22)