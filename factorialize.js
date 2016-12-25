
function factorialize(num) {
	
  var arr = [];
 
  // if the passed argument is 0, return 1
  if(num === 0) {
    return 1;
  }
  // loop "n" (where n is equal with the passed argument) number of 
  // ...times and with every iteration push the number into the array
  for(var i = 1; i <= num; i++) {
  	arr.push(i);
  }

  var factorial = arr.reduce(function(total, i) {
  	return total * i;
  });
  return factorial;
}

factorialize(5);