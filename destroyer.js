// You will be provided with an initial array (the first argument in the destroyer function), 
// followed by one or more arguments. Remove all elements from the initial array that are of 
// the same value as the provided arguments.

/*** Second Solution ***/ 
function destroyer(arr) {
  // convert arguments into a full array
  var args = Array.prototype.slice.call(arguments);
  
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < args.length; j++) {
   	   if (arr[i] === args[j]) {
   		    delete arr[i];
   	   }
   	 }
   }
   
   // remove all the falsy values
   return arr.filter(Boolean);
  
}

/*** Second Solution ***/ 
function destroyer(arr,...args) {
  // return an array of numbers that does not include the numbers found in args array 
  return arr.filter(num => !args.includes(num));
}


destroyer([1, 2, 3, 1, 2, 3], 2, 3);
