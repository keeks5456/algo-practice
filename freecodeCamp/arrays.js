
//  Array Data Structures
    // One-Dimensional Array:</b></h5><p> an array that only has one level, or that it does not have any other arrays nested within it
  let simpleArray = ['one', 2, 'three', true, false, undefined, null];
  console.log(simpleArray.length);
  // logs 7

    // Multi-Dimensional Array: an array that contains other arrays. Notice that this array also contains JavaScript objects, which we will examine very closely in our next section, but for now, all you need to know is that arrays are also capable of storing complex objects.
  let complexArray = [
  [
    {
      one: 1,
      two: 2
    },
    {
      three: 3,
      four: 4
    }
  ],
  [
    {
      a: "a",
      b: "b"
    },
    {
      c: "c",
      d: "d"
    }
  ]
];
      //  Accessing An Array
      // In an array, each array item has an index. This index doubles as the position of that item in the array, and how you reference it. However, it is important to note, that JavaScript arrays are zero-indexed, meaning that the first element of an array is actually at the zeroth position, not the first. In order to retrieve an element from an array we can enclose an index in brackets and append it to the end of an array, or more commonly, to a variable which references an array object. This is known as bracket notation.

      let ourArray = ["a", "b", "c"];
      let ourVariable = ourArray[0];
      // ourVariable equals "a"

        // Copy an Array with the Spread Operator
        // ES6's new spread operator allows us to easily copy all of an array's elements, in order, with a simple and highly readable syntax.
         let thisArray = [true, true, undefined, false, null];<br/>
           let thatArray = [...thisArray];
            // thatArray equals [true, true, undefined, false, null]
            // thisArray remains unchanged and thatArray contains the same elements as thisArray

        // Define a function <b>copyMachine</b> that takes an array and number as arguments. The function should return a new array made up of number copies of array. Modify the function using spread syntax, (hint, another method can be used to can come in handy as well)

       function copyMachine(arr, num) {
            let newArr = [];
            while (num >= 1) {
              // Only change code below this line
              newArr.push([...arr])
              // Only change code above this line
              num--;
            }
            return newArr;
          }
          
          console.log(copyMachine([true, false, true], 2));
  
        // Check For The Presence of an Element With indexOf()
          // Since arrays can be changed, or mutated, at any time, there's no guarantee about where a particular piece of data will be on a given array, or if that element even still exists. Luckily, JavaScript provides us with another built-in method, indexOf(), that allows us to quickly and easily check for the presence of an element on an array. indexOf() takes an element as a parameter, and when called, it returns the position, or index, of that element, or -1 if the element does not exist on the array.
         
          // Something to remember with checking the the existence of elements in arrays, in this case, checking the index -- is to check if the array is less than zero or if it is not -1! </b></p>
       
          function quickCheck(arr, elem){
            return arr.indexOf(elem) ? true : false
          }
          console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));


      //  Iterate Through All an Array's Items Using For Loops</h2>
        // We have defined a function, filteredArray, which takes arr, a nested array, and elem as arguments, and returns a new array. elem represents an element that may or may not be present on one or more of the arrays nested within arr. Modify the function, using a for loop, to return a filtered version of the passed array such that any array nested within arr containing elem has been removed.

        function filteredArray(arr, elem) {
          let newArr = [];
          // Only change code below this line
          for(let i = 0; i < arr.length; i++){
            if(arr[i].indexOf(elem) == -1 ){ //again something to remember to check if our array is === 0  or isnt != -1 <-- ?
              newArr.push(arr[i])
            }
          }
          // Only change code above this line
          return newArr;
        }
        
        console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
        
        // Create complex multi-dimensional arrays

        // One of the most powerful features when thinking of arrays as data structures, is that arrays can contain, or even be completely made up of other arrays. We have seen arrays that contain arrays in previous challenges, but fairly simple ones. However, arrays can contain an infinite depth of arrays that can contain other arrays, each with their own arbitrary levels of depth, and so on. In this way, an array can very quickly become very complex data structure, known as a multi-dimensional, or nested array. 
        
        // We have defined a variable, myNestedArray, set equal to an array. Modify myNestedArray, using any combination of strings, numbers, and booleans for data elements, so that it has exactly five levels of depth (remember, the outer-most array is level 1). Somewhere on the third level, include the string 'deep', on the fourth level, include the string 'deeper', and on the fifth level, include the string 'deepest'.
        
        let myNestedArray = [
          // Only change code below this line
          ['unshift', false, 1, 2, 3, 'complex', 'nested'],[
          ['loop', 'shift', 6, 7, 1000, 'method', 'deep']
          ],
          [
            [
          ['concat', false, true, 'spread', 'array', 'deeper']
            ]
          ],
          [
            [
              [
          ['mutate', 1327.98, 'splice', 'slice', 'push', 'deepest']
              ]
            ]
          ],
          ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
          // Only change code above this line
        ];
        