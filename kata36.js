// When provided with a String, capitalize all vowels
//
// For example:
//
// Input : "Hello World!"
//
// Output : "HEllO WOrld!"
//
// Note: Y is not a vowel in this kata.

let voidChars = ["a", "e", "i", "o", "u"]

function swap (string) {
  return string.split("").map(el => voidChars.includes(el) ? el.toUpperCase() : el).join("")
}

