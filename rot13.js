function rot13(str) { 
  // The replace() method searches a string for a specified value, or a regular expression, 
  // and returns a new string where the specified values are replaced.
  return str.replace( /[A-Za-z]/g , function(val) {
    // Check the Unicode of the character at the specified index and return converted Unicode values        into letters
    return String.fromCharCode( val.charCodeAt(0) + ( val.toUpperCase() <= "M" ? 13 : -13 ) );
  });
  
}
