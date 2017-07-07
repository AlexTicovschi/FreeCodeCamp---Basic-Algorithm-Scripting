function mutation(arr) {
  // turn every letter of the first string to lower case
  var str = arr[0].toLowerCase();
  // convert every string into an array of letters
  var arr2 = arr[1].toLowerCase().split('');

  // iterate through the arr2 array 
  for(var i = 0; i < arr2.length; i++) {
    // variable to store every letter of the second word in the array
    var letter = arr2[i];
    // if this condition is true, i.e the letter cannot be found in the first word(str), ...
    // return false, otherwise return true
    if (str.indexOf(letter) === -1) {
      return false;
    }
  }
  
  return true;
  
}

mutation(["hello", "hey"]);
