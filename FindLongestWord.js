// Find the Longest Word in a String 
// Return the length of the longest word in the provided sentence.

/*** First Solution ***/ 
function findLongestWord(str) {
  // variable to store the result
  var longestWord = 0;
  // convert the string into an array of words
  var strArray = str.split(" ");
  
  for(var i = 0; i < strArray.length; i++ ) {
    // if the length of the word is greater than the value of longestWord ...
    if(strArray[i].length > longestWord) {
      // ...store the result into the longestWord variable
      longestWord = strArray[i].length;
    }
  }
  // return the longestWord
  return longestWord;
}


/*** Second Solution ***/ 
function findLongestWordLength(str) {
  return str.split(' ').sort((a,b)=> b.length - a.length)[0].length;
}


/*** Third Solution ***/
function findLongestWord(str) {
  return bubbleSort(str.split(' '))[0].length;
}

function bubbleSort(arr) {
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j].length < arr[j+1].length) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
}


findLongestWord("The quick brown fox jumped over the lazy dog");

