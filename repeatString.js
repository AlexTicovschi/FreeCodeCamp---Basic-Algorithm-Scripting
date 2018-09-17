function repeatStringNumTimes(str, num) {
  // if num is greater than 0, repeat the string num times, else return an empty string
  // return num > 0 ? str.repeat(num) : "";
    
  let newstr = '';
  if(num < 0) return "";

  for(let i = 0; i < num; i++) newstr += str;
  
  return newstr;
}

repeatStringNumTimes("abc", -3  );
