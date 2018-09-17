function largestOfFour(arr) {
  
//   let newArray = [];
//   let sortedArr = [];

//   for(let i = 0; i < arr.length; i++) {
//     sortedArr.push(arr[i].sort((a,b) => b - a));
//   }
//   for(let i = 0; i < sortedArr.length; i++) {
//     newArray.push(arr[i][0]);
//   }
//   return newArray;
  
  return arr.map(function(subArray) {
    //console.log(subArray);
    return subArray.reduce(function(num1, num2) {
      return (num1 > num2) ? num1 : num2;
    });
  });
  
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
