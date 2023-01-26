// Implement a function which convert the given boolean value into its string representation.
//
//   Note: Only valid inputs will be given.

function booleanToString(b){
  if (b === true) {
    b = "true"
    return b
  } else {
    b = "false"
    return b
  }
}

// best practice

// #1
// function booleanToString(b){
//   return b.toString();
// }

// #2
// function booleanToString(b){
//   return b ? 'true' : 'false';
// }