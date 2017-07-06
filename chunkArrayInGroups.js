
function chunkArrayInGroups(arr, size) {

  var newArray = [];
  
  while(arr.length !== 0) {
    newArray.push(arr.splice(0, size));
  }
  return newArray;
  
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);
