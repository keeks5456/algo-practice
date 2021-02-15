// words = ['APPLE', 'PLEAS', 'PLEASE']
// keypads = ['AELWXYZ', 'AELPXYZ', 'AELPSXY', 'SAELPRT', 'XAEBKSY'] 

function numKeypadSolutions(wordList,keypads){
    let results = []
    
    for(keypad of keypads){
      let obj = {} //store our key:value pair
      let validWords = 0 //counter
      let validLetter = keypad[0]
      
      for(letter of keypad){
        obj[letter] = true // bject should nw have a key value pair of {A:'true'}
        }
      for(word of wordList){
        let includesKey = false
        for(let i = 0; i < word.length; i++){
          if(!obj[word[i]]) break
          if(word[i] === validLetter) includesKey = true
          if(i === word.length - 1 && includesKey === true) validWords ++
        }
      }
        results.push(validWords)
    }
    return results
  }
  
  console.log(numKeypadSolutions(['APPLE', 'PLEAS', 'PLEASE'],['AELWXYZ', 'AELPXYZ', 'AELPSXY', 'SAELPRT', 'XAEBKSY'] ))