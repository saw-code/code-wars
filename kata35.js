let voidChars = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]

function vowelOne(s) {
  return s.split("").map(el => voidChars.includes(el) ? 1 : 0).join("")
}

// with regexp

// function vowelOne(s) {
//   return s.replace(/[^aeiou]/gi, '0').replace(/[^\d]/g, '1');
// }