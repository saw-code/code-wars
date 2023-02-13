function booleanToString(b){
  switch (b) {
    case true:
      return 'true'
    case false:
      return'false'
  }
}

// best practice
//
// function booleanToString(b){
//   return b.toString();
// }