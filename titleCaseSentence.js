// Title Case a Sentence 
// Return the provided string with the first letter of each word capitalized. 
// Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words
// like "the" and "of".


function titleCase(str) {
  // convert the string to lower case and array of words and store it in 'words' variable
  var words = str.toLowerCase().split(" ");
  
  // loop through the words array
  for(var i = 0; i < words.length; i++) {
    // convert the array of words into an array of letters
    var letters = words[i].split("");
    // convert the first letter of each word to upper case
    letters[0] = letters[0].toUpperCase(); 
    words[i] = letters.join('');
  }
  // return the string
  return words.join(' ');
}

titleCase("I'm a little tea pot");


