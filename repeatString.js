function repeatStringNumTimes(str, num) {
    
//     if(num > 0) {
//         return str.repeat(num);
//     } else {
//         return str.repeat(0);
//     }
    // if num is greater than 0, repeat the string num times, else return an empty string
    return num > 0 ? str.repeat(num) : "";

}

repeatStringNumTimes("abc", -3  );
