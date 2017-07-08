// Remove all elements from the initial array that are of the same value as the provided arguments.

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

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
