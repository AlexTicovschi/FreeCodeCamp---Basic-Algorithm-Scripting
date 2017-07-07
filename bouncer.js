
function bouncer(arr) {
  // if the value is not falsy, it will be evaluated to true and returned, 
  //...otherwise it will evaluate to false and the value will not be returned 
  // a truthy value is a value that translates to true when evaluated in a Boolean context
  return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);
