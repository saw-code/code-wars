// Given a string and an array of integers representing indices, capitalize all letters at the given indices.
//
// For example:
//
// capitalize("abcdef",[1,2,5]) = "aBCdeF"
// capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
// The input will be a lowercase string with no spaces and an array of digits.
//
// Good luck!

function capitalize(s,arr){
  let newString = s.split("")

  arr.map(arrEl => {
    newString = newString.map((strEl, index) => index === arrEl ? newString[index].toUpperCase() : strEl )
  })
  return newString.join("")
}

console.log(capitalize("abcdef",[1,2,5]))