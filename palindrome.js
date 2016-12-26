/* Return true if the given string is a palindrome. Otherwise, return false.
A palindrome is a word or sentence that's spelled the same way both forward and backward, 
ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn 
everything lower case in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".
*/

function palindrome(str) {

  // remove all on-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case
  var normalStr = str.replace(/[^a-zA-Z0-9]+/gi, '').toLowerCase();
  // check if the value of normalStr variable is equal with the reverse value of itself
  return normalStr === normalStr.split('').reverse().join('');
}


palindrome("eye");
