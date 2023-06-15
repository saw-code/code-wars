// Write a method that takes one argument
// as name and then greets that name,
// capitalized and ends with an exclamation point.
//
//   Example:
//
// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

let greet = function(name) {
  return {
    convert() {
      return `Hello ${name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}!`
    }
  }
};

console.log(greet("JACK").convert())