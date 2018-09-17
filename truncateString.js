function truncateString(str, num) {
  
//   if(str.length > num && num <= 3) {
//     str = str.slice(0, num) + '...';
//   } else if (num <= 14) {
//     str = str.slice(0, (num - 3)) + '...';
//   } 
//   return str;
  
    return num < 12 ? str.substr(0, num) + '...' : str.substr(0, num);
}

truncateString("Peter Piper picked a peck of pickled peppers", 14);
