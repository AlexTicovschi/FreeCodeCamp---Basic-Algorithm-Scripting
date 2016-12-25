
function reverseString(str) {
  // convert the string into an array of characters, reverse them 
  // and then join the reversed array into a string
  return str.split("").reverse().join("");
}

reverseString("hello");