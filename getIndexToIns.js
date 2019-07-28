// In this example, 10 - 35 = -25, which will increment the index to 1; 20 - 35 = 15, now the index equals 2; then 30 - 35 = -5 ...
// increment the index again, index equals 3; 40 - 35 = 5, which does not satisfy the condition, so the num should be inserted at index 3 

/*** First Solution ***/
function getIndexToIns(arr, num) {
  var index = 0;	
  //loop through the array
  for(var i = 0; i < arr.length; i++) {
    // if the arrays value - number returns negative, increment the value of index by one
    if(arr[i] - num < 0) {
      index++;
    }
  }
  return index;
}


/*** Second Solution ***/
function getIndexToIns(arr, num) {
  return [...arr, num].sort((a,b) => a-b).indexOf(num);
}

getIndexToIns([10, 20, 30, 40, 50], 35);
