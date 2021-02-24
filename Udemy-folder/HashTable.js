// 'hello world'.charCodeAt(4)

//Modulus

console.log(12 % 5 )

function HashTable(size) {
    this.buckets = Array(size);
    this.numBuckets = this.buckets.length;
  }
   
  function HashNode(key, value, next) {
    this.key = key;
    this.value = value;
    this.next = next || null;
  }
  
HashTable.prototype.hash = function(key){
  var total = 0
  for(var i = 0; i < key.length; i++){
    total += key.charCodeAt(i)
    
  }
  var bucket = total % this.numBuckets
  return bucket
}

// HashTable.prototype.insert = function(key, value){
//   var index = this.hash(key) //see where they got inserted
//   console.log('INDEX:', index)
//   if(!this.buckets[index]) this.buckets[index] = new HashNode(key, value)
//   else{
//     let currentNode = this.buckets[index]
//     while(currentNode.next){ //while this is present
//       currentNode = currentNode.next //travel to end of chain
//     }
//     currentNode.next = new HashNode(key,value) //insert new node in chain
//   }
// }

//refractored
HashTable.prototype.insert = function(key, value){
  var index = this.hash(key) //see where they got inserted
  console.log('INDEX:', index)
  if(!this.buckets[index]){
    this.buckets[index] = new HashNode(key, value)
  }
  else if(this.buckets[index].key === key){
      this.buckets[index].value = value
    }
else{
    let currentNode = this.buckets[index]
    while(currentNode.next){ 
      if(currentNode.next.key === key){
        currentNode.next.value = value // update friend email address
        return //stop method from running if doing update
      }
      currentNode = currentNode.next //travel to end of chain
    }
    currentNode.next = new HashNode(key,value) //insert new node in chain
  }
}
var myHT = new HashTable(30)

myHT.insert('Dean', 'karen@gmail.com', )
myHT.insert('Megan', 'megan@gmail.com', )
myHT.insert('Megan', 'meganGriffin@gmail.com')
myHT.insert('Dane', 'kathy@yahoo.com')
myHT.insert('Dane', 'dane1010@gmail.com')
console.log(myHT.buckets)
//dean and dane are a collision


//Get Method
HashTable.prototype.get = function(key){
    var index = this.hash(key)
    if(!this.buckets[index]) return null
    else {
      var currentNode = this.buckets[index]
      while(currentNode){
        if(currentNode.key === key)return currentNode.value
        currentNode = currentNode.next
      }
      return null
    }
  }
  
  HashTable.prototype.retrieveAll = function(){
    var allNodes = []
    for(let i = 0; i < this.numBuckets; i++){
      let currentNode = this.buckets[i]
      while(currentNode){
        allNodes.push(currentNode)
        currentNode = currentNode.next
      }
    }
    return allNodes
  }
  
  myHT.insert('Dean', 'karen@gmail.com', )
  myHT.insert('Megan', 'megan@gmail.com', )
  myHT.insert('Megan', 'meganGriffin@gmail.com')
  myHT.insert('Dane', 'kathy@yahoo.com')
  myHT.insert('Dane', 'dane1010@gmail.com')
  myHT.insert('Joe', 'JoeJames@gmail.com')
  myHT.insert('Samantha', 'sammy@twitter.com')
  
  
  myHT.retrieveAll()
  // console.log(myHT.buckets)
  //dean and dane are a collision
  
  
  
    
