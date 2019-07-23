/*** Return Largest Numbers in Arrays ***/

// Return an array consisting of the largest number from each provided sub-array. For simplicity, 
// the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member 
// with array syntax arr[i].

function largestOfFour(arr) {
  /*** First Solution ***/
  // let newArray = [];
  // let sortedArr = [];

  // for(let i = 0; i < arr.length; i++) {
  //   sortedArr.push(arr[i].sort((a,b) => b - a));
  // }
  // for(let i = 0; i < sortedArr.length; i++) {
  //   newArray.push(arr[i][0]);
  // }
  // return newArray;
  
  
  
  /*** Second Solution ***/
  return arr.map(function(subArray) {
    //console.log(subArray);
    return subArray.reduce(function(num1, num2) {
      return (num1 > num2) ? num1 : num2;
    });
  });

  
  
  /*** Third Solution ***/
  
	let output = [];

	for (let list of arr) {
		output.push(Math.max(...list));
	}

	return output;
  
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
