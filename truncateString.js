function truncateString(str, num) {
  
  if(str.length > num && num <= 3) {
    str = str.slice(0, num) + '...';
  } else if (num <= 14) {
    str = str.slice(0, (num - 3)) + '...';
  } 
  return str;
}

truncateString("Peter Piper picked a peck of pickled peppers", 14);
