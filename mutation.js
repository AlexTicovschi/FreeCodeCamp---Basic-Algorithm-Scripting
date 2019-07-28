/********************************************/
/*** Basic Algorithm Scripting: Mutations ***/
/********************************************/

// Return true if the string in the first element of the array contains all of the letters of the string
// in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string 
// are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".


/*** First Solution ***/
function mutation(arr) {
  // turn every letter of the first string to lower case
  var str = arr[0].toLowerCase();
  // convert the second string into an array of letters
  var arr2 = arr[1].toLowerCase().split('');

  // iterate through the arr2 array 
  for(var i = 0; i < arr2.length; i++) {
    // variable to store every letter of the second word in the array
    var letter = arr2[i];
    // if this condition is true, i.e the letter cannot be found in the first word(str), ...
    // return false 
    if (str.indexOf(letter) === -1) {
      return false;
    }
  }
  
  //otherwise return true
  return true;
}


/*** Second Solution ***/
function mutation(arr) {
  const word1 = arr[0].toLowerCase();
  const word2 = arr[1].toLowerCase();

  for(let val of word2) {
    if(word1.indexOf(val) === -1) {
      return false;
    }
  }

  return true;
}

mutation(["hello", "hey"]);
